import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  remarks?: string;
  whatsappUrl: string;
}

export default function WhatsAppLeadModal({ isOpen, onClose, remarks, whatsappUrl }: WhatsAppLeadModalProps) {
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/whatsapp-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobile: mobile,
          remarks: remarks || 'Direct WhatsApp Chat'
        }),
      });
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      onClose();
    } catch (error) {
      console.error('Lead log error:', error);
      // Still open WhatsApp even if logging fails
      window.open(whatsappUrl, '_blank');
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-primary-dark"
          >
            <FaTimes size={20} />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mx-auto mb-4">
              <FaWhatsapp size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark">Quick Connect</h3>
            <p className="text-gray-500 mt-2">Enter your mobile number to start the WhatsApp chat.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="e.g. +971 50 123 4567"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? 'Connecting...' : 'Continue to WhatsApp'}
              {!isSubmitting && <FaWhatsapp size={20} />}
            </button>
            
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">
              By continuing, you agree to be contacted by Hedefy team.
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
