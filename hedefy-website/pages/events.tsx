import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import FacebookFeed from '@/components/FacebookFeed';
import { FaCalendarAlt, FaCamera, FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const [showGallery, setShowGallery] = useState(false);
  const [showFeed, setShowFeed] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ src: string, title: string, type: 'image' | 'video' } | null>(null);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
    if (showFeed) setShowFeed(false);
    if (showLinkedIn) setShowLinkedIn(false);
  };

  const toggleFeed = () => {
    setShowFeed(!showFeed);
    if (showGallery) setShowGallery(false);
    if (showLinkedIn) setShowLinkedIn(false);
  };

  const toggleLinkedIn = () => {
    setShowLinkedIn(!showLinkedIn);
    if (showGallery) setShowGallery(false);
    if (showFeed) setShowFeed(false);
  };

  useEffect(() => {
    if (showGallery) {
      setTimeout(() => {
        document.getElementById('project-gallery')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showGallery]);

  useEffect(() => {
    if (showFeed) {
      setTimeout(() => {
        document.getElementById('facebook-feed-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showFeed]);

  useEffect(() => {
    if (showLinkedIn) {
      setTimeout(() => {
        document.getElementById('linkedin-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showLinkedIn]);

  return (
    <>
      <Head>
        <title>Events & News - Hedefy Scaffolding Contracting Co. LLC</title>
        <meta
          name="description"
          content="Stay updated with the latest events, projects, and safety training sessions at Hedefy Scaffolding. Follow our live Facebook feed for real-time updates."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container-custom px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Events & Live Updates</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Follow our latest company milestones, project completions, and safety workshops directly from our social networks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={toggleGallery}
                className={`px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3 ${showGallery ? 'bg-white text-primary-dark' : 'bg-accent text-primary-dark'}`}
              >
                {showGallery ? 'Hide Gallery' : 'Project Gallery'}
                {showGallery ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <button
                onClick={toggleFeed}
                className={`px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3 ${showFeed ? 'bg-white text-primary-dark' : 'bg-primary-light text-white'}`}
              >
                {showFeed ? 'Hide Facebook' : 'Facebook Feed'}
                {showFeed ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <button
                onClick={toggleLinkedIn}
                className={`px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3 ${showLinkedIn ? 'bg-white text-primary-dark' : 'bg-[#0077b5] text-white'}`}
              >
                {showLinkedIn ? 'Hide LinkedIn' : 'LinkedIn Profile'}
                {showLinkedIn ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                onClick={toggleFeed}
                className={`text-center p-8 rounded-xl hover:shadow-lg transition-all border-b-4 cursor-pointer hover:-translate-y-1 active:scale-95 ${showFeed ? 'bg-primary-dark text-white border-white' : 'bg-gray-50 text-primary-dark border-accent'}`}
              >
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  <FaCalendarAlt />
                </div>
                <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
                <p className={showFeed ? 'text-gray-300' : 'text-gray-600'}>
                  {showFeed ? 'Click to hide Facebook feed' : 'Click to view live updates & events'}
                </p>
              </div>
              <div
                onClick={toggleGallery}
                className={`text-center p-8 rounded-xl hover:shadow-lg transition-all border-b-4 cursor-pointer hover:-translate-y-1 active:scale-95 ${showGallery ? 'bg-primary-dark text-white border-white' : 'bg-gray-50 text-primary-dark border-accent'}`}
              >
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  <FaCamera />
                </div>
                <h3 className={`text-xl font-bold mb-2`}>Project Gallery</h3>
                <p className={showGallery ? 'text-gray-300' : 'text-gray-600'}>
                  {showGallery ? 'Click to hide our project portfolio' : 'Click to view our project portfolio'}
                </p>
              </div>
              <div
                onClick={toggleLinkedIn}
                className={`text-center p-8 rounded-xl hover:shadow-lg transition-all border-b-4 cursor-pointer hover:-translate-y-1 active:scale-95 ${showLinkedIn ? 'bg-primary-dark text-white border-white' : 'bg-gray-50 text-primary-dark border-[#0077b5]'}`}
              >
                <div className="text-4xl text-[#0077b5] mb-4 flex justify-center">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className={showLinkedIn ? 'text-gray-300' : 'text-gray-600'}>
                  {showLinkedIn ? 'Click to hide LinkedIn' : 'Connect with our LinkedIn community'}
                </p>
              </div>
            </div>

            {/* Project Gallery Section */}
            <AnimatePresence>
              {showGallery && (
                <motion.div
                  id="project-gallery"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="mt-8 overflow-hidden"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Project Gallery</h2>
                    <p className="text-xl text-gray-600 mb-8">A showcase of our precision scaffolding work in Dubai, Abu Dhabi, and Sharjah</p>
                    
                    <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                      <div className="h-full w-2/4 bg-primary-dark"></div>
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                      { src: '/images/Gallery/Villa External Scaffolding P1.jpeg', title: 'Villa External Scaffolding', type: 'image' },
                      { src: '/images/Gallery/Building Access Scaffolding P1.jpeg', title: 'Building Access Scaffolding', type: 'image' },
                      { src: '/images/Gallery/Dome External Scaffolding P1.jpeg', title: 'Dome Scaffolding Work', type: 'image' },
                      { src: '/images/Gallery/Dome Internal Scaffolding P3.mp4', title: 'Internal Dome Setup', type: 'video' },
                      { src: '/images/Gallery/Scaffolding Tower for maintenance works P4.mp4', title: 'Maintenance Tower Operation', type: 'video' },
                      { src: '/images/Gallery/Scaffolding Tower for maintenance works P1.jpeg', title: 'Mobile Maintenance Tower', type: 'image' },
                      { src: '/images/Gallery/Tower Access Scaffolding P2.jpeg', title: 'Tower Access Work', type: 'image' },
                      { src: '/images/Gallery/Dome External Scaffolding P4.jpeg', title: 'Specialized Dome Access', type: 'image' },
                      { src: '/images/Gallery/Villa External Scaffolding P5.jpeg', title: 'Villa Complex Scaffolding', type: 'image' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedItem(item as any)}
                        className="group relative overflow-hidden rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-video bg-black"
                      >
                        {item.type === 'video' ? (
                          <div className="relative w-full h-full">
                            <video
                              src={item.src}
                              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                              muted
                              playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary-dark shadow-xl group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.3 2.841A.75.75 0 017 2.5c.16 0 .31.05.44.14l8 5.5a.75.75 0 010 1.22l-8 5.5A.75.75 0 016.3 14.16V2.84z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                          <span className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">{item.type}</span>
                          <p className="text-white font-bold text-xl">{item.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* LinkedIn Section */}
        <AnimatePresence>
          {showLinkedIn && (
            <motion.section
              id="linkedin-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white border-y border-gray-100 overflow-hidden"
            >
              <div className="py-8 md:py-12">
                <div className="container-custom px-4 mb-4 text-center">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">LinkedIn Community</h2>
                    <p className="text-xl text-gray-600 mb-8">Connect with our professional network and industry experts</p>
                    
                    <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                      <div className="h-full w-2/4 bg-primary-dark"></div>
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="container-custom px-4">
                  <div className="max-w-4xl mx-auto bg-[#f3f6f8] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="bg-[#0077b5] p-6 md:p-8 text-white flex flex-col md:flex-row items-center gap-6">
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 shadow-inner">
                        <img src="/images/logo.jpeg" alt="Hedefy" className="object-contain" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold">Hedefy Scaffolding Contracting Co. LLC</h3>
                        <p className="text-blue-100 text-base md:text-lg">Precision Engineering & Safety Experts</p>
                      </div>
                    </div>
                    <div className="p-6 md:p-10 text-center">
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Join our professional circle on LinkedIn to stay informed about industrial trends and specialized techniques.
                      </p>
                      <a
                        href="https://www.linkedin.com/company/113126110/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#0077b5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#005582] transition-all shadow-lg hover:scale-105 active:scale-95"
                      >
                        Follow Us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Full-Width Facebook Feed Section */}
        <AnimatePresence>
          {showFeed && (
            <motion.section
              id="facebook-feed-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-gray-50 border-y border-gray-100 overflow-hidden"
            >
              <div className="py-0">
                <div className="container-custom px-4 mb-0 text-center">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Live Facebook Feed</h2>
                    <p className="text-xl text-gray-600 mb-8">Follow us for daily updates and behind-the-scenes content</p>
                    
                    <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                      <div className="h-full w-2/4 bg-primary-dark"></div>
                      <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <FacebookFeed />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Modern Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl cursor-default"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <div className="bg-black aspect-video flex items-center justify-center">
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="w-full h-full max-h-[75vh]"
                    />
                  ) : (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[75vh] object-contain"
                    />
                  )}
                </div>

                <div className="p-10 bg-white text-center">
                  <div className="inline-block bg-accent/10 text-primary-dark font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">
                    {selectedItem.type} Evidence
                  </div>
                  <h3 className="text-3xl font-bold text-primary-dark">{selectedItem.title}</h3>
                  <p className="text-gray-500 mt-3 font-medium">Hedefy Scaffolding - Operational Excellence in UAE</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="section-padding bg-primary-dark text-white text-center">
          <div className="container-custom px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to stay updated?</h2>
            <p className="text-xl text-gray-300 mb-8">Follow us on Facebook to get real-time notifications about our latest achievements.</p>
            <a
              href="https://www.facebook.com/profile.php?id=61572363516894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg active:scale-95"
            >
              Follow Our Page
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
