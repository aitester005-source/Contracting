import type { NextApiRequest, NextApiResponse } from 'next';

// TODO: Integrate with actual database
const inquiries: any[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Simple API key check (implement proper authentication in production)
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    // Get all inquiries
    // TODO: Fetch from database
    return res.status(200).json({
      inquiries: [],
      total: 0,
    });
  }

  if (req.method === 'POST') {
    // Create new inquiry
    const inquiry = req.body;
    // TODO: Save to database
    inquiries.push(inquiry);

    return res.status(201).json({
      success: true,
      inquiry,
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
