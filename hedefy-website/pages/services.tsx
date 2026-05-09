import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import {
  FaBuilding,
  FaCubes,
  FaHardHat,
  FaCity,
  FaLandmark,
  FaWrench,
  FaCalendar,
  FaUsers,
  FaBroadcastTower,
  FaWarehouse,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      iconName: 'FaBuilding',
      title: 'External Scaffolding for Buildings',
      description: 'Professional external scaffolding solutions for residential and commercial building construction, ensuring safe worker access and structural integrity.',
    },
    {
      iconName: 'FaLandmark',
      title: 'Masjid Minaret Scaffolding',
      description: 'Specialized and precision scaffolding for mosque minarets with utmost safety standards and technical expertise.',
    },
    {
      iconName: 'FaCubes',
      title: 'Tank External Scaffolding',
      description: 'Heavy-duty scaffolding solutions for water tanks, oil tanks, and industrial storage structures of all sizes.',
    },
    {
      iconName: 'FaBroadcastTower',
      title: 'Scaffolding Tower Erection',
      description: 'Complete tower construction and erection services with expert engineering and supervision from start to finish.',
    },
    {
      iconName: 'FaHardHat',
      title: 'Slab Support Scaffolding',
      description: 'Temporary structural support systems for concrete slabs and elevated work areas during construction.',
    },
    {
      iconName: 'FaWarehouse',
      title: 'Chandelier Scaffolding',
      description: 'Specialized scaffolding for large fixture installations, maintenance, and construction of decorated structures.',
    },
    {
      iconName: 'FaWrench',
      title: 'Signboard Scaffolding',
      description: 'Safe and secure scaffolding systems for installing, maintaining, and removing large signboards and advertisements.',
    },
    {
      iconName: 'FaCalendar',
      title: 'Event & Exhibition Scaffolding',
      description: 'Temporary scaffolding and structural solutions for events, exhibitions, concerts, and temporary installations.',
    },
  ];

  return (
    <>
      <Head>
        <title>Services - Hedefy Scaffolding Contracting Co. LLC | Professional Solutions</title>
        <meta
          name="description"
          content="Comprehensive scaffolding services including external building, minaret, tank, tower, and event scaffolding solutions."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container-custom px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-200">Comprehensive Scaffolding Solutions for Every Project</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Complete Scaffolding Solutions</h2>
              <p className="text-xl text-gray-600 mb-8">Explore our wide range of professional scaffolding services</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details / Our Approach */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600 mb-8">How we deliver exceptional scaffolding services</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/2 bg-accent animate-pulse"></div>
                <div className="h-full w-1/2 bg-primary-dark"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Assessment', desc: 'We conduct thorough site assessments to understand project requirements and technical specifications.' },
                { step: '02', title: 'Planning', desc: 'Our engineering team develops detailed plans optimized for safety, efficiency, and cost-effectiveness.' },
                { step: '03', title: 'Installation', desc: 'Professional installation by trained crews following strict safety protocols and industry standards.' },
                { step: '04', title: 'Inspection', desc: 'Regular inspections throughout the project duration to ensure absolute safety and structural stability.' },
                { step: '05', title: 'Dismantling', desc: 'Safe and efficient removal of scaffolding structures upon project completion with precision.' },
                { step: '06', title: 'Follow-up', desc: 'Post-project support and documentation for future reference and compliance verification.' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-50 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="text-5xl font-black text-accent/10 group-hover:text-accent/20 mb-6 transition-colors font-mono">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Certification */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Safety & Certification"
              subtitle="We meet the highest industry standards"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Our Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>ISO 9001:2015 Quality Management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>OHSAS 18001 Safety Management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>UAE Labor Law Compliance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>International Safety Standards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Professional Insurance Coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Equipment Inspection & Maintenance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Safety Measures</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Regular staff safety training programs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Daily safety inspections and checks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Personal protective equipment (PPE) provided</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Emergency response procedures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Environmental safety compliance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent text-bold">✓</span>
                    <span>Incident reporting and investigation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Need Scaffolding Services?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and customized quote for your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Request Quote</Button>
            </Link>
              <a
                href="https://wa.me/971504529978?text=I need scaffolding services for my project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
