import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
});

// Contact API
export const submitContactForm = async (data: {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectDetails: string;
}) => {
  const response = await apiClient.post('/contact', data);
  return response.data;
};

// Chatbot API
export const sendChatMessage = async (
  message: string,
  conversationHistory?: any[]
) => {
  const response = await apiClient.post('/chatbot', {
    message,
    conversationHistory,
  });
  return response.data;
};

// Inquiry API
export const submitChatbotInquiry = async (data: any) => {
  const response = await apiClient.post('/inquiries', data);
  return response.data;
};

// Admin API
export const getAdminStatistics = async (apiKey: string) => {
  const response = await apiClient.get('/admin/statistics', {
    headers: { 'x-api-key': apiKey },
  });
  return response.data;
};

export const getAdminInquiries = async (apiKey: string) => {
  const response = await apiClient.get('/admin/inquiries', {
    headers: { 'x-api-key': apiKey },
  });
  return response.data;
};

export const getAdminMessages = async (apiKey: string) => {
  const response = await apiClient.get('/admin/messages', {
    headers: { 'x-api-key': apiKey },
  });
  return response.data;
};
