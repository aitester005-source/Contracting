import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check API key
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const messages = [
      {
        id: 1,
        sender: 'customer',
        message: 'I need scaffolding for a building project',
        timestamp: new Date('2024-04-10'),
        resolved: false,
      },
      {
        id: 2,
        sender: 'bot',
        message: 'Sure! Please provide: Building height, Project location, Project duration',
        timestamp: new Date('2024-04-10'),
        resolved: false,
      },
    ];

    return res.status(200).json({
      messages,
      total: messages.length,
      unresolved: messages.filter((m) => !m.resolved).length,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return res.status(500).json({ error: 'Failed to fetch messages' });
  }
}
