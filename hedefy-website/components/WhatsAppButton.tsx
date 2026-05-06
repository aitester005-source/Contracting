import React from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function WhatsAppButton() {

  const whatsappMessage = "Hello, I would like to request scaffolding services.";
  const whatsappNumber = "971529885372";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-yellow-500 text-primary-dark p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <BiLogoWhatsapp size={28} />
        </a>
      </div>
    </>
  );
}
