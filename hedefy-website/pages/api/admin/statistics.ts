import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const statistics = {
      totalInquiries: 247,
      whatsappLeads: 84,
      chatbotConversations: 156,
      completedProjects: 500,
      activeProjects: 12,
      teamMembers: 152,
      serviceAreas: ['Dubai', 'Abu Dhabi', 'Sharjah', 'other Emirates'],
      conversionRate: 0.68,
    };

    return res.status(200).json(statistics);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return res.status(500).json({ error: 'Failed to fetch statistics' });
  }
}
