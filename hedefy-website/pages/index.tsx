import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import {
  FaCheckCircle,
  FaTrophy,
  FaShieldAlt,
  FaClock,
  FaChartLine,
} from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      iconName: 'FaBuilding',
      title: 'External Building Scaffolding',
      description: 'Professional external scaffolding solutions for residential and commercial buildings.',
    },
    {
      iconName: 'FaMosque',
      title: 'Minaret Scaffolding',
      description: 'Specialized scaffolding for mosque minarets with precision and safety.',
    },
    {
      iconName: 'FaBox',
      title: 'Tank Scaffolding',
      description: 'Heavy-duty scaffolding for water tanks and industrial storage structures.',
    },
    {
      iconName: 'FaMonument',
      title: 'Tower Erection',
      description: 'Complete tower construction and erection services with expert supervision.',
    },
  ];

  const projects = [
    {
      title: 'Motor City Community Building',
      location: 'Dubai, UAE',
      description: 'Large-scale residential complex scaffolding project',
      image: '/images/portfolio/motor-city.jpg',
    },
    {
      title: 'Sustainable City 800 Villas',
      location: 'Abu Dhabi, Yas Island',
      description: 'Comprehensive villa construction scaffolding solution',
      image: '/images/portfolio/sustainable-city.jpg',
    },
    {
      title: 'Sharjah Government Building',
      location: 'Sharjah, UAE',
      description: 'Dome scaffolding for government building',
      image: '/images/portfolio/sharjah-government.jpg',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '14+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Expert Team', value: '150+' },
    { label: 'Client Satisfaction', value: '99%' },
  ];

  return (
    <>
      <Head>
        <title>Hedefy Scaffolding Contracting Co. LLC - Professional Solutions in UAE</title>
        <meta
          name="description"
          content="Professional scaffolding services in UAE. External, minaret, tank, and event scaffolding solutions. 14+ years of experience."
        />
        <meta
          name="keywords"
          content="scaffolding company UAE, Dubai scaffolding services, construction scaffolding, minaret scaffolding, event scaffolding"
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-dark via-primary-light to-primary-darker text-white py-20 md:py-32">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Professional Scaffolding Solutions in UAE
                </h1>
                <p className="text-xl text-gray-200">
                  Safe, Reliable and Professional Scaffolding Services Since 2010
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary">
                      Request Quote
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/971504529978?text=Hello, I would like to request scaffolding services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/portfolio/motor-city.jpg"
                  alt="Professional Scaffolding"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary-dark text-white py-12">
          <div className="container-custom px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/images/portfolio/sharjah-government.jpg"
                alt="About Hedefy"
                className="rounded-lg shadow-xl"
              />
              <div>
                <SectionHeader title="About Hedefy" centered={false} />
                <p className="text-gray-600 text-lg mb-6">
                  We are into the scaffolding business since 2010 providing internal and external scaffolding solutions for buildings, tanks, towers, minarets and events.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <FaCheckCircle className="text-accent text-2xl flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Safety First</h4>
                      <p className="text-gray-600">Complete safety compliance and certification</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaCheckCircle className="text-accent text-2xl flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Quality Assured</h4>
                      <p className="text-gray-600">Premium scaffolding materials and equipment</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaCheckCircle className="text-accent text-2xl flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">On-Time Delivery</h4>
                      <p className="text-gray-600">Meet all project deadlines consistently</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <SectionHeader
              title="Our Services"
              subtitle="Comprehensive scaffolding solutions for all your project needs"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} index={idx} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Why Choose Hedefy"
              subtitle="Experience, expertise, and commitment to excellence"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl text-accent mb-4 flex justify-center">
                  <FaTrophy />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with proven expertise</p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-accent mb-4 flex justify-center">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Safety Certified</h3>
                <p className="text-gray-600">All certifications and safety standards met</p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-accent mb-4 flex justify-center">
                  <FaClock />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">On-Time Service</h3>
                <p className="text-gray-600">Reliable and punctual project completion</p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-accent mb-4 flex justify-center">
                  <FaChartLine />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Quality Assured</h3>
                <p className="text-gray-600">Premium quality materials and equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <SectionHeader
              title="Featured Projects"
              subtitle="Showcasing our successful completed projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio">
                <Button size="lg">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your scaffolding project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Request Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/971XXXXXXXXX?text=Hello, I would like to request scaffolding services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}


