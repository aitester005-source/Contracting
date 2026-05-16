import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
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
import ServiceProjectsModal from '@/components/ServiceProjectsModal';
import { useState } from 'react';
import { servicesData } from '@/data/servicesData';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = servicesData;

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
                <ServiceCard
                  key={idx}
                  {...service}
                  index={idx}
                  onClick={() => handleServiceClick(service)}
                />
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
        <section className="section-padding bg-primary-dark relative overflow-hidden">
          {/* Background Decorative elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>

          <div className="container-custom px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Safety & Certification</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">We operate at the highest international industry standards to ensure zero-risk environments.</p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certifications Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary-dark text-3xl">
                    <FaLandmark />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Certifications</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "ISO 9001:2015",
                    "OHSAS 18001",
                    "UAE Labor Law",
                    "Intl Safety Standards",
                    "Professional Insurance",
                    "Equipment Inspection"
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                        <FaBuilding size={14} />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Measures Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent text-3xl">
                    <FaHardHat />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Safety Measures</h3>
                </div>

                <div className="space-y-6">
                  {[
                    "Regular staff safety training programs",
                    "Daily safety inspections and checks",
                    "PPE provided to all personnel",
                    "Environmental safety compliance"
                  ].map((measure, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 w-6 h-6 rounded-md bg-accent flex items-center justify-center text-primary-dark shrink-0">
                        <FaWrench size={12} />
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors leading-tight">{measure}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white relative">
          <div className="container-custom px-4 text-center">
            <div className="max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-12 lg:p-20 border border-gray-100 shadow-sm relative overflow-hidden group">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6">Ready to Build Safely?</h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Partner with the UAE's trusted scaffolding contractor. Contact us today for a free consultation and customized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full">Request Detailed Quote</Button>
                  </Link>
                  <a
                    href="https://wa.me/971504529978?text=I need scaffolding services for my project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button size="lg" variant="outline" className="w-full border-gray-200">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedService && (
          <ServiceProjectsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceTitle={selectedService.title}
            projects={selectedService.projects}
          />
        )}
      </Layout>
    </>
  );
}
