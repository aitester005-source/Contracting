import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-accent text-primary-dark text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center px-4">
          <div className="flex gap-6 items-center">
            <a href="tel:0504529978" className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity">
              <FaPhone size={12} /> 050-4529978
            </a>
            <a href="mailto:info@hedefy-scaff.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <FaEnvelope size={12} /> info@hedefy-scaff.com
            </a>
          </div>
          <span className="font-semibold tracking-wide">UAE&apos;s #1 Scaffolding Partner Since 2010</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#051129]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <nav className="container-custom px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group" title="Hedefy Scaffolding Contracting Co. LLC">
            <Logo />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-white text-sm tracking-wide">Hedefy Scaffolding</span>
              <span className="text-accent text-xs">Contracting Co. LLC</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group rounded-lg ${
                    isActive
                      ? 'text-white bg-accent/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                    isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                  }`}></span>
                </Link>
              );
            })}
            <Link href="/contact" className="ml-4">
              <button className="bg-accent text-primary-dark font-bold px-6 py-2.5 rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-accent/25 text-sm tracking-wide">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#051129]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <div className="container-custom px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl transition-all font-medium border-l-4 ${
                    isActive
                      ? 'text-accent bg-accent/10 border-accent'
                      : 'text-gray-300 hover:text-accent hover:bg-white/5 border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 mt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-accent text-primary-dark font-bold py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg text-base">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
