import React from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function WhatsAppButton() {
  const whatsappMessage = "Hello, I would like to request scaffolding services.";
  const whatsappNumber = "971504529978";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group relative"
        title="Chat on WhatsApp"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <BiLogoWhatsapp size={28} className="relative z-10" />
      </a>
    </div>
  );
}
