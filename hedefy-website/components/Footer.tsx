import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="bg-[#051129] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Modern Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-primary-dark to-accent"></div>
      
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hedefy <span className="text-accent">Scaffolding</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional scaffolding solutions for construction, events, and industrial projects since 2010. Your trusted partner for safety and excellence across the UAE.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Hedefyscaffolding/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/hedefyscaffolding" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/hedefyscaffolding/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all inline-block">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all inline-block">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all inline-block">Portfolio</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all inline-block">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-accent transition-colors">• External Scaffolding</li>
              <li className="hover:text-accent transition-colors">• Minaret Scaffolding</li>
              <li className="hover:text-accent transition-colors">• Tank Scaffolding</li>
              <li className="hover:text-accent transition-colors">• Tower Erection</li>
              <li className="hover:text-accent transition-colors">• Slab Support</li>
              <li className="hover:text-accent transition-colors">• Event & Exhibition</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                  <FaPhone size={16} />
                </div>
                <a href="tel:0504529978" className="hover:text-accent transition-colors">050-4529978</a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                  <FaEnvelope size={16} />
                </div>
                <a href="mailto:info@hedefy-scaff.com" className="hover:text-accent transition-colors">info@hedefy-scaff.com</a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                  <FaMapMarkerAlt size={16} />
                </div>
                <span className="hover:text-accent transition-colors">Dubai, UAE</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <BiLogoWhatsapp size={20} />
                </div>
                <a href="https://wa.me/971504529978" className="hover:text-green-500 transition-colors">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hedefy Scaffolding Contracting Co. LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
