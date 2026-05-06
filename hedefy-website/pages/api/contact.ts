import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectDetails: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, phone, email, projectDetails }: ContactFormData = req.body;

  // Validation
  if (!name || !phone || !email || !projectDetails) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Save to Google Sheet
    await saveToGoogleSheet({
      name,
      company,
      phone,
      email,
      projectDetails,
    });

    // Send Email Notification
    await sendEmailNotification({
      name,
      company,
      phone,
      email,
      projectDetails,
    });

    // Send WhatsApp Notification
    await sendWhatsAppNotification({
      name,
      company,
      phone,
      email,
      projectDetails,
    });

    // Send Confirmation Email to User
    await sendConfirmationEmail(email, name);

    return res.status(200).json({
      success: true,
      message: 'Inquiry submitted successfully. We will contact you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Failed to process inquiry. Please try again.',
    });
  }
}

// Mailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function saveToGoogleSheet(data: ContactFormData) {
  try {
    // Only attempt if credentials exist
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.log('Skipping Google Sheets: No credentials provided in .env');
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Adjust if your sheet name differs
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.name,
            data.company,
            data.phone,
            data.email,
            data.projectDetails
          ],
        ],
      },
    });
    console.log('Successfully saved to Google Sheets');
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    // Don't throw, allow other notifications to proceed even if Sheets fails
  }
}

async function sendEmailNotification(data: ContactFormData) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('Skipping Email: No SMTP credentials provided in .env');
      return;
    }

    const mailOptions = {
      from: `"Hedefy Website Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry from ${data.name}`,
      html: `
        <h2>New Inquiry from ${data.name}</h2>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Details:</strong></p>
        <p>${data.projectDetails}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log('Admin email notification sent');
  } catch (error) {
    console.error('Error sending admin email notification:', error);
  }
}

async function sendWhatsAppNotification(data: ContactFormData) {
  try {
    if (!process.env.WHATSAPP_ACCESS_TOKEN) {
      console.log('Skipping WhatsApp: No access token provided in .env');
      return;
    }

    const message = `*New Inquiry Received!*\n\n*Name:* ${data.name}\n*Company:* ${data.company || 'N/A'}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Details:* ${data.projectDetails}`;

    // Fallback to Account ID if Phone Number ID is not set
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID || process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
    const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.ADMIN_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER,
        type: 'text',
        text: { body: message }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('WhatsApp API Error:', errorData);
    } else {
      console.log('WhatsApp notification sent');
    }
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
  }
}

async function sendConfirmationEmail(email: string, name: string) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return;
    }

    const mailOptions = {
      from: `"Hedefy Scaffolding Contracting Co. LLC" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Your Inquiry - Hedefy Scaffolding',
      html: `
        <h2>Thank You ${name}!</h2>
        <p>We received your inquiry and our team will contact you shortly.</p>
        <p>In the meantime, feel free to chat with our AI assistant or contact us on WhatsApp.</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}
