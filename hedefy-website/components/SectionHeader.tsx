import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="h-1 w-20 bg-accent rounded-full mt-6" style={centered ? { margin: '1.5rem auto 0' } : {}}></div>
    </div>
  );
}
