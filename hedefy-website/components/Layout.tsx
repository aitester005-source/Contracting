import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ChatBot from './ChatBot';
import SchemaMarkup from './SchemaMarkup';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
