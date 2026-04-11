// Supabase Configuration
export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
};

// Tables
export const TABLES = {
  INQUIRIES: 'inquiries',
  CHATBOT_MESSAGES: 'chatbot_messages',
  WHATSAPP_LEADS: 'whatsapp_leads',
  PROJECTS: 'projects',
  FAQ: 'faq',
};

// Statuses
export const STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  CONVERTED: 'converted',
  REJECTED: 'rejected',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

// Service Types
export const SERVICE_TYPES = [
  'External Building Scaffolding',
  'Minaret Scaffolding',
  'Tank Scaffolding',
  'Tower Erection',
  'Slab Support',
  'Chandelier Scaffolding',
  'Signboard Scaffolding',
  'Event & Exhibition Scaffolding',
];

// Project Categories
export const PROJECT_CATEGORIES = [
  'residential',
  'commercial',
  'industrial',
  'religious',
  'event',
];
