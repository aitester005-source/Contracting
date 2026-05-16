import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import WhatsAppLeadModal from './WhatsAppLeadModal';
import { useState } from 'react';

interface Project {
  title: string;
  location: string;
  description: string;
  image: string;
  video?: string;
}

interface ServiceProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  projects: Project[];
}

export default function ServiceProjectsModal({ isOpen, onClose, serviceTitle, projects }: ServiceProjectsModalProps) {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!isOpen) return null;

  const handleWhatsAppClick = (project: Project) => {
    setSelectedProject(project);
    setLeadModalOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark">{serviceTitle}</h2>
              <p className="text-gray-500">Relevant Projects & Case Studies</p>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-primary-dark transition-all duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden bg-black">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="w-full h-full object-cover"
                          controls
                          poster={project.image}
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      {!project.video && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                          <span className="text-white font-bold text-sm">Project Reference</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                        <span className="text-accent">📍</span> {project.location}
                      </p>
                      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3 mt-auto">
                        <button
                          onClick={() => handleWhatsAppClick(project)}
                          className="w-full flex items-center justify-center gap-2 bg-primary-dark text-white py-3 rounded-xl font-bold hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-md"
                        >
                          <FaWhatsapp />
                          Request via WhatsApp
                        </button>
                        <Button
                          variant="outline"
                          className="w-full py-3 rounded-xl text-sm"
                          onClick={() => {
                            window.location.href = `/contact?project=${encodeURIComponent(project.title)}&service=${encodeURIComponent(serviceTitle)}`;
                          }}
                        >
                          Request Detailed Quote
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">More projects for this service will be uploaded soon.</p>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              All projects are executed with the highest safety standards by Hedefy Scaffolding Contracting Co. LLC.
            </p>
          </div>

          <WhatsAppLeadModal
            isOpen={leadModalOpen}
            onClose={() => setLeadModalOpen(false)}
            remarks={selectedProject ? `Project: ${selectedProject.title}` : undefined}
            whatsappUrl={`https://wa.me/971504529978?text=${encodeURIComponent(`Hello Hedefy! I am interested in a quote for a project similar to "${selectedProject?.title}" in ${selectedProject?.location}.`)}`}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
