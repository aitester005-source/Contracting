import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-white fixed w-full top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-accent text-primary-dark text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between px-4">
          <div className="flex gap-6">
            <a href="tel:0529885372" className="flex items-center gap-2 hover:text-primary-light">
              <FaPhone size={14} /> 052-9885372
            </a>
            <a href="mailto:info@hedefy-scaff.com" className="hover:text-primary-light">
              info@hedefy-scaff.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group" title="Hedefy Scaffolding Contracting Co. LLC">
          <Logo />
          <div className="hidden sm:flex flex-col text-xs">
            <span className="font-bold text-white">Contracting Co. LLC</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <Link href="/contact">
            <button className="btn-secondary text-sm">Get Quote</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-light">
          <div className="container-custom px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/portfolio" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn-secondary w-full">Get Quote</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
