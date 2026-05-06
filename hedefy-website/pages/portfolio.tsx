import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Motor City Community Building',
      location: 'Dubai, UAE',
      description: 'Large-scale residential complex scaffolding project with 50+ workers',
      image: '/newlayout/images/portfolio/motor-city.jpg',
      category: 'residential',
    },
    {
      title: 'Sustainable City 800 Villas',
      location: 'Abu Dhabi, Yas Island',
      description: 'Comprehensive villa construction scaffolding solution for 800 units',
      image: '/newlayout/images/portfolio/sustainable-city.jpg',
      category: 'residential',
    },
    {
      title: 'Sharjah Government Building Dome',
      location: 'Sharjah, UAE',
      description: 'Specialized dome scaffolding for government building construction',
      image: '/newlayout/images/portfolio/sharjah-government.jpg',
      category: 'commercial',
    },
    {
      title: 'Damac Lagoons 950 Townhouse',
      location: 'Dubai, Marina',
      description: 'Modern townhouse complex scaffolding project',
      image: '/newlayout/images/portfolio/damac-lagoons.jpg',
      category: 'residential',
    },
    {
      title: 'Al Farooq Mosque Minaret',
      location: 'Dubai, UAE',
      description: 'Specialized minaret scaffolding with precision engineering',
      image: '/newlayout/images/portfolio/minaret.jpg',
      category: 'religious',
    },
    {
      title: 'ADNOC Storage Tank Project',
      location: 'Abu Dhabi, UAE',
      description: 'Industrial tank scaffolding for oil and gas sector',
      image: '/newlayout/images/portfolio/tank.jpg',
      category: 'industrial',
    },
    {
      title: 'Dubai Shopping Festival 2024',
      location: 'Dubai, UAE',
      description: 'Temporary event scaffolding for major shopping festival',
      image: '/newlayout/images/portfolio/event1.jpg',
      category: 'event',
    },
    {
      title: 'Emirates NBD Tower Renovation',
      location: 'Dubai, Business Bay',
      description: 'Complex scaffolding for high-rise building renovation',
      image: '/newlayout/images/portfolio/renovation.jpg',
      category: 'commercial',
    },
    {
      title: 'RAK Exhibition Center',
      location: 'Ras Al Khaimah, UAE',
      description: 'Exhibition center construction and setup scaffolding',
      image: '/newlayout/images/portfolio/event2.jpg',
      category: 'event',
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
            <SectionHeader
              title="Project Gallery"
              subtitle="Explore our diverse portfolio of completed projects"
            />
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    filter === cat.value
                      ? 'bg-primary-dark text-white'
                      : 'bg-white text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white'
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Our Track Record"
              subtitle="By the numbers"
            />
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
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Featured Case Study"
              subtitle="Motor City Community Building - Dubai"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/newlayout/images/portfolio/motor-city.jpg"
                alt="Case Study"
                className="rounded-lg shadow-xl"
              />
              <div>
                <h3 className="text-3xl font-bold text-primary-dark mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Project Type</h4>
                    <p className="text-gray-600">Large-scale residential complex construction</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Location</h4>
                    <p className="text-gray-600">Motor City, Dubai, UAE</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Timeline</h4>
                    <p className="text-gray-600">24 months (2022-2024)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Challenge</h4>
                    <p className="text-gray-600">Multi-phase project with 50+ simultaneous construction zones and strict safety requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Solution</h4>
                    <p className="text-gray-600">Deployed customized scaffolding systems across all zones with real-time monitoring and safety protocols.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Result</h4>
                    <p className="text-gray-600">Zero safety incidents, on-time delivery, 99.5% customer satisfaction</p>
                  </div>
                </div>
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
