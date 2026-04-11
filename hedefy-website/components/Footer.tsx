import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Hedefy Scaffolding Contracting Co. LLC</h3>
            <p className="text-gray-300 mb-4">Professional scaffolding solutions for construction, events, and industrial projects since 2010.</p>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-yellow-300"><FaFacebook size={20} /></a>
              <a href="#" className="text-accent hover:text-yellow-300"><FaLinkedin size={20} /></a>
              <a href="#" className="text-accent hover:text-yellow-300"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-accent transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• External Building Scaffolding</li>
              <li>• Minaret Scaffolding</li>
              <li>• Tank Scaffolding</li>
              <li>• Tower Erection</li>
              <li>• Slab Support</li>
              <li>• Event & Exhibition</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <FaPhone className="text-accent mt-1" size={16} />
                <a href="tel:+971504529978" className="hover:text-accent">+971 50-4529978</a>
              </li>
              <li className="flex gap-2">
                <FaEnvelope className="text-accent mt-1" size={16} />
                <a href="mailto:info@hedefy-scaff.com" className="hover:text-accent">info@hedefy-scaff.com</a>
              </li>
              <li className="flex gap-2">
                <FaMapMarkerAlt className="text-accent mt-1" size={16} />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex gap-2">
                <BiLogoWhatsapp className="text-accent mt-1" size={16} />
                <a href="https://wa.me/971504529978" className="hover:text-accent">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-400 text-sm">© 2026 Hedefy Scaffolding Contracting Co. LLC. All rights reserved.</p>
            <div className="text-right text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-accent mr-4">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
