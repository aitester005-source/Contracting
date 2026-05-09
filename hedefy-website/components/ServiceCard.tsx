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
      className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-8 group border border-gray-50 flex flex-col h-full hover:-translate-y-3 relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover top accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl text-accent mb-8 group-hover:bg-accent group-hover:text-primary-dark transition-all duration-500">
        {IconComponent ? <IconComponent /> : <div>Icon</div>}
      </div>
      <h3 className="text-2xl font-bold text-primary-dark mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      
      <div className="mt-auto">
        <Link href="/contact">
          <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-md group-hover:shadow-xl">
            Request Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
