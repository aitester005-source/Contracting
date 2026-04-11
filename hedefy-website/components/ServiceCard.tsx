import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ iconName, title, description, index }: ServiceCardProps) {
  // Get the icon component from react-icons/fa dynamically
  const IconComponent = (FaIcons as any)[iconName];
  
  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group border-t-4 border-accent hover:border-primary-dark"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl text-accent mb-4 group-hover:text-primary-dark transition-colors">
        {IconComponent ? <IconComponent /> : <div>Icon</div>}
      </div>
      <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="btn-secondary text-sm w-full">Request Quote</button>
    </div>
  );
}
