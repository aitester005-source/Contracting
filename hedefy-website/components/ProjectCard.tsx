import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({ title, location, description, image, link }: ProjectCardProps) {
  const fullImageUrl = `https://hedefy-scaff.com${image}`;
  const whatsappMessage = `Hello Hedefy Team! 👋 I am interested in your scaffolding services for a project similar to:
  
🏗️ Project: ${title}
📍 Location: ${location}
🖼️ Image Ref: ${fullImageUrl}

Please provide more information and a quote. Thank you!`;
  const whatsappUrl = `https://wa.me/971504529978?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col border border-gray-100">
      <div className="relative h-64 overflow-hidden bg-gray-200 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white font-bold text-lg">Featured Project</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-accent text-primary-dark text-[10px] uppercase tracking-wider font-black px-4 py-1.5 rounded-full shadow-sm">
            Completed
          </span>
        </div>
        <h3 className="text-2xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <span className="text-accent text-lg">📍</span> {location}
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-primary-dark text-white py-4 rounded-xl font-bold hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-md hover:shadow-xl group/btn"
          >
            <span>Send Inquiry</span>
            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
