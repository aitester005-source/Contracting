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
  return (
    <Link href={link || '/contact'} className="block h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-gray-200 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg">View Details</span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
              Completed
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">📍 {location}</p>
          <p className="text-gray-600 text-sm flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  );
}
