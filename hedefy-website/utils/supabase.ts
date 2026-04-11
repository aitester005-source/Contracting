// Supabase Client Setup
// Install: npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Inquiry Services
export const inquiryService = {
  async create(data: any) {
    const { data: inquiry, error } = await supabase
      .from('inquiries')
      .insert([data])
      .select();

    if (error) throw error;
    return inquiry?.[0];
  },

  async getAll() {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('inquiries')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data?.[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

// ChatBot Message Services
export const chatbotService = {
  async createMessage(data: any) {
    const { data: message, error } = await supabase
      .from('chatbot_messages')
      .insert([data])
      .select();

    if (error) throw error;
    return message?.[0];
  },

  async getConversation(conversationId: string) {
    const { data, error } = await supabase
      .from('chatbot_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  },
};

// WhatsApp Lead Services
export const whatsappService = {
  async createLead(data: any) {
    const { data: lead, error } = await supabase
      .from('whatsapp_leads')
      .insert([data])
      .select();

    if (error) throw error;
    return lead?.[0];
  },

  async getAllLeads() {
    const { data, error } = await supabase
      .from('whatsapp_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async updateLead(id: string, updates: any) {
    const { data, error } = await supabase
      .from('whatsapp_leads')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data?.[0];
  },
};

// Project Services
export const projectService = {
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },
};

// FAQ Services
export const faqService = {
  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('faq')
      .select('*')
      .eq('category', category);

    if (error) throw error;
    return data;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('faq')
      .select('*');

    if (error) throw error;
    return data;
  },
};
