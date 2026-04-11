import type { NextApiRequest, NextApiResponse } from 'next';

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
    // Save to database (Supabase)
    // TODO: Implement database save
    // const { data, error } = await supabase
    //   .from('inquiries')
    //   .insert([{ name, company, phone, email, projectDetails, created_at: new Date() }]);

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
      phone,
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

async function sendEmailNotification(data: ContactFormData) {
  // TODO: Implement email sending using Gmail/SendGrid
  const emailContent = `
    <h2>New Inquiry from ${data.name}</h2>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Project Details:</strong></p>
    <p>${data.projectDetails}</p>
  `;

  console.log('Email notification:', emailContent);
  // Implementation would go here
}

async function sendWhatsAppNotification(data: {
  name: string;
  phone: string;
  projectDetails: string;
}) {
  // TODO: Implement WhatsApp API integration
  const message = `New inquiry from ${data.name} (${data.phone}): ${data.projectDetails}`;
  console.log('WhatsApp notification:', message);
  // Implementation would go here
}

async function sendConfirmationEmail(email: string, name: string) {
  // TODO: Implement confirmation email sending
  const confirmationContent = `
    <h2>Thank You ${name}!</h2>
    <p>We received your inquiry and our team will contact you shortly.</p>
    <p>In the meantime, feel free to chat with our AI assistant or contact us on WhatsApp.</p>
  `;

  console.log('Confirmation email:', confirmationContent);
  // Implementation would go here
}
