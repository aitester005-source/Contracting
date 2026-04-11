-- Inquiries Table
CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  project_details TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ChatBot Messages Table
CREATE TABLE chatbot_messages (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID,
  sender VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  conversation_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- WhatsApp Leads Table
CREATE TABLE whatsapp_leads (
  id BIGSERIAL PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL,
  name VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE projects (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  image_url VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FAQ Table
CREATE TABLE faq (
  id BIGSERIAL PRIMARY KEY,
  category VARCHAR(100) NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  keywords JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inquiries Index
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at);

-- ChatBot Messages Index
CREATE INDEX idx_chatbot_messages_conversation_id ON chatbot_messages(conversation_id);
CREATE INDEX idx_chatbot_messages_created_at ON chatbot_messages(created_at);

-- WhatsApp Leads Index
CREATE INDEX idx_whatsapp_leads_status ON whatsapp_leads(status);
CREATE INDEX idx_whatsapp_leads_created_at ON whatsapp_leads(created_at);
