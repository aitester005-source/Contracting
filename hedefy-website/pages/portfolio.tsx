import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import Link from 'next/link';
import { FaBuilding, FaMapMarkerAlt, FaClock, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Dome Internal Setup',
      location: 'Dubai, UAE',
      description: 'Video demonstration of internal dome scaffolding setup and safety.',
      image: '/images/portfolio/Dome Internal Scaffolding P1.jpeg',
      video: '/images/Gallery/Dome Internal Scaffolding P3.mp4',
      category: 'religious',
    },
    {
      title: 'High-Access Maintenance Operation',
      location: 'Sharjah, UAE',
      description: 'Operational video of a high-access maintenance tower in action.',
      image: '/images/portfolio/Scaffolding Tower for maintenance works P1.jpeg',
      video: '/images/Gallery/Scaffolding Tower for maintenance works P4.mp4',
      category: 'event',
    },
    {
      title: 'Villa External Scaffolding',
      location: 'Dubai, UAE',
      description: 'Customized external scaffolding for residential villa construction.',
      image: '/images/Gallery/Villa External Scaffolding P1.jpeg',
      category: 'residential',
    },
    {
      title: 'Building Access Scaffolding',
      location: 'Abu Dhabi, UAE',
      description: 'Professional high-rise building access scaffolding solution.',
      image: '/images/Gallery/Building Access Scaffolding P1.jpeg',
      category: 'commercial',
    },
    {
      title: 'Tower Access Scaffolding',
      location: 'Sharjah, UAE',
      description: 'Specialized tower access scaffolding for tall structures.',
      image: '/images/Gallery/Tower Access Scaffolding P2.jpeg',
      category: 'industrial',
    },
    {
      title: 'Dome External Scaffolding',
      location: 'Dubai, UAE',
      description: 'Complex dome scaffolding for masjid and government landmarks.',
      image: '/images/Gallery/Dome External Scaffolding P1.jpeg',
      category: 'religious',
    },
    {
      title: 'High-Access Maintenance',
      location: 'Dubai, UAE',
      description: 'Mobile and static scaffolding towers for maintenance works.',
      image: '/images/Gallery/Scaffolding Tower for maintenance works P1.jpeg',
      category: 'event',
    },
    {
      title: 'Specialized Dome Work',
      location: 'Sharjah, UAE',
      description: 'Advanced external scaffolding for curved structural designs.',
      image: '/images/Gallery/Dome External Scaffolding P4.jpeg',
      category: 'religious',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'religious', label: 'Religious' },
    { value: 'event', label: 'Events' },
  ];

  return (
    <>
      <Head>
        <title>Portfolio - Hedefy Scaffolding Contracting Co. LLC | Completed Projects</title>
        <meta
          name="description"
          content="View our portfolio of successfully completed scaffolding projects across UAE including residential, commercial, industrial, and event projects."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container-custom px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-200">Showcasing our successful projects across UAE</p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Project Gallery</h2>
              <p className="text-xl text-gray-600 mb-8">Explore our diverse portfolio of completed projects</p>
              
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>
            <br />
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-8 py-3 rounded-2xl font-bold transition-all duration-500 shadow-sm active:scale-95 ${filter === cat.value
                    ? 'bg-gradient-to-r from-primary-dark to-[#1a2b4d] text-white shadow-xl -translate-y-1'
                    : 'bg-white text-primary-dark border-2 border-gray-100 hover:border-accent hover:shadow-lg'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  image={project.image}
                  video={project.video}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Track Record</h2>
              <p className="text-xl text-gray-300 mb-8">By the numbers</p>
              
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-white/20 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-white"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">500+</p>
                <p className="text-xl">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">150+</p>
                <p className="text-xl">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">99%</p>
                <p className="text-xl">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">14+</p>
                <p className="text-xl">Years in Business</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="section-padding bg-gray-50 relative overflow-hidden">
          <div className="container-custom px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6">Featured Case Study</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Deep dive into our most complex and successful residential project.</p>
              
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>
            <br />
            <div className="bg-white rounded-[4rem] p-8 lg:p-16 shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative group">
                <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-20"></div>
                <img
                  src="/images/portfolio/motor-city.jpg"
                  alt="Case Study"
                  className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-dark text-white p-8 rounded-[2rem] shadow-xl hidden md:block">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm font-medium">Zones Managed</p>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <div className="inline-block bg-accent/10 text-primary-dark font-black text-xs uppercase tracking-widest px-6 py-2 rounded-full mb-8">
                  Residential Flagship
                </div>
                <h3 className="text-4xl font-bold text-primary-dark mb-10 leading-tight">Motor City Community Building</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {[
                    { label: 'Project Type', value: 'Large-scale Residential', icon: <FaBuilding className="text-accent" /> },
                    { label: 'Location', value: 'Motor City, Dubai', icon: <FaMapMarkerAlt className="text-accent" /> },
                    { label: 'Timeline', value: '24 Months (2022-24)', icon: <FaClock className="text-accent" /> },
                    { label: 'Standard', value: 'ISO 9001 Certified', icon: <FaShieldAlt className="text-accent" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">{item.label}</p>
                        <p className="text-primary-dark font-bold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-10">
                  <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-accent rounded-full"></span>
                    The Challenge & Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Managing 50+ simultaneous construction zones required extreme logistical precision. We deployed real-time monitoring and a dedicated safety squad to ensure zero downtime.
                  </p>
                  <div className="flex gap-4">
                    <span className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-primary-dark border border-gray-200 shadow-sm">Zero Safety Incidents</span>
                    <span className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-primary-dark border border-gray-200 shadow-sm">On-Time Delivery</span>
                  </div>
                </div>

                <Link href="/contact?project=Motor City">
                  <Button size="lg" className="w-full sm:w-auto">Inquire About Similar Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-dark text-white text-center">
          <div className="container-custom px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let us bring our expertise to your next project. Contact us for a consultation.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
