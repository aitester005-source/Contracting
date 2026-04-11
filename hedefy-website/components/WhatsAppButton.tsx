import React, { useState } from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = "Hello, I would like to request scaffolding services.";
  const whatsappNumber = "971504529978";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-4 mb-4 max-w-xs animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-primary-dark">Chat with us!</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">
                <FaTimes />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              We typically reply within minutes. How can we help you with your scaffolding needs?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full btn-secondary text-center text-sm"
            >
              Start Chat
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent hover:bg-yellow-500 text-primary-dark p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <BiLogoWhatsapp size={28} />
        </button>
      </div>
    </>
  );
}
