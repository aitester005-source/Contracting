import type { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  conversationHistory?: Message[];
}

const FAQ_DATA = {
  pricing: {
    keywords: ['price', 'cost', 'quote', 'rate', 'fee', 'expensive', 'affordable'],
    response:
      'We offer competitive pricing tailored to your specific project needs. Factors affecting pricing include project size, duration, location, and complexity. For an accurate quote, please provide your project details using our contact form or WhatsApp.',
  },
  serviceAreas: {
    keywords: ['service', 'area', 'location', 'where', 'coverage'],
    response:
      'We provide scaffolding services throughout the UAE including Dubai, Abu Dhabi, Sharjah, and all emirates. We can handle local and nationwide projects. For specific locations, please contact our team.',
  },
  timeline: {
    keywords: ['timeline', 'duration', 'how long', 'days', 'weeks', 'months', 'schedule'],
    response:
      'Project timelines vary based on complexity and scope. Simple projects may take days, while larger projects can span weeks or months. We provide detailed timelines during the consultation phase. Our team works efficiently to meet your deadlines.',
  },
  safety: {
    keywords: ['safety', 'certified', 'certificate', 'standards', 'compliance', 'insurance'],
    response:
      'Safety is our top priority. We are ISO 9001:2015 and OHSAS 18001 certified. All our staff are trained and equipment is regularly inspected. We comply with all UAE labor laws and international safety standards.',
  },
  scaffoldingTypes: {
    keywords: ['type', 'external', 'minaret', 'tank', 'tower', 'slab', 'event', 'chandelier', 'signboard'],
    response:
      'We offer various scaffolding types including: External Building Scaffolding, Minaret Scaffolding, Tank Scaffolding, Tower Erection, Slab Support, Chandelier, Signboard, and Event Scaffolding. Which type interests you?',
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, conversationHistory = [] }: ChatRequest = req.body;

  if (!message || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Check for FAQ matches
    const faqResponse = checkFAQ(message.toLowerCase());

    if (faqResponse) {
      return res.status(200).json({ reply: faqResponse });
    }

    // Generate contextual response based on conversation
    const reply = generateResponse(message, conversationHistory);

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({
      reply: 'I apologize for the error. Please contact our team directly for immediate assistance.',
    });
  }
}

function checkFAQ(message: string): string | null {
  for (const [, faqItem] of Object.entries(FAQ_DATA)) {
    if (faqItem.keywords.some((keyword) => message.includes(keyword))) {
      return faqItem.response;
    }
  }
  return null;
}

function generateResponse(message: string, history: Message[]): string {
  const lowerMessage = message.toLowerCase();

  // Greeting responses
  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey')
  ) {
    return 'Hello! Welcome to Hedefy Scaffolding Contracting Co. LLC. How can I assist you today? You can ask about our services, pricing, or request a quote.';
  }

  // Service inquiry
  if (lowerMessage.includes('service') || lowerMessage.includes('help')) {
    return 'We provide comprehensive scaffolding solutions including:\n• External Building Scaffolding\n• Minaret Scaffolding\n• Tank Scaffolding\n• Tower Erection\n• Slab Support\n• Event & Exhibition Scaffolding\n\nWhich service interests you?';
  }

  // Project inquiry
  if (lowerMessage.includes('project') || lowerMessage.includes('need')) {
    return 'Great! To better assist you, could you please provide:\n1. Type of project (building, minaret, tank, etc.)\n2. Project location\n3. Estimated timeline\n4. Any specific requirements?\n\nThis information will help us provide an accurate quote.';
  }

  // Contact or follow-up
  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('follow') ||
    lowerMessage.includes('quote')
  ) {
    return 'You can reach us through:\n📞 Phone: 050-4529978\n📧 Email: info@hedefy-scaff.com\n💬 WhatsApp: Available 24/7\n\nOr fill out our contact form for a detailed quote. Our team responds within 2-4 hours.';
  }

  // Default response
  return 'Thank you for your message. Could you provide more details about your project requirements? Our team is here to help. You can also use our contact form for a personalized quote.';
}
