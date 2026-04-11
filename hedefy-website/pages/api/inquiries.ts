import type { NextApiRequest, NextApiResponse } from 'next';

interface InquiryData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  projectDetails: string;
  contactMethod: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const inquiryData: InquiryData = req.body;

  try {
    // Validate required fields
    if (
      !inquiryData.name ||
      !inquiryData.phone ||
      !inquiryData.email ||
      !inquiryData.projectType
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save inquiry to database
    // TODO: Save to Supabase
    // const { data, error } = await supabase
    //   .from('chatbot_inquiries')
    //   .insert([{...inquiryData, created_at: new Date()}]);

    // Send to admin email
    await sendAdminNotification(inquiryData);

    // Send WhatsApp notification to admin
    await sendWhatsAppToAdmin(inquiryData);

    // Send confirmation to user
    await sendUserConfirmation(inquiryData);

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been received. We will contact you shortly.',
    });
  } catch (error) {
    console.error('Chatbot inquiry error:', error);
    return res.status(500).json({ error: 'Failed to submit inquiry' });
  }
}

async function sendAdminNotification(data: InquiryData) {
  console.log('Admin notification:', data);
  // TODO: Implement email notification
}

async function sendWhatsAppToAdmin(data: InquiryData) {
  console.log('WhatsApp admin notification:', data);
  // TODO: Implement WhatsApp API call
}

async function sendUserConfirmation(data: InquiryData) {
  console.log('User confirmation:', data.email);
  // TODO: Implement user confirmation email
}
