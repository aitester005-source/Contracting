import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { mobile, remarks } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const date = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'WhatsApp!A2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[date, mobile || 'Direct Click', remarks || 'WhatsApp Request']],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Google Sheets Error:', error);
    return res.status(500).json({ error: 'Failed to record lead', details: error.message });
  }
}
