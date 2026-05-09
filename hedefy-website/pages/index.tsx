import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import HeroVideo from '../components/HeroVideo';
import {
  FaCheckCircle,
  FaTrophy,
  FaShieldAlt,
  FaClock,
  FaChartLine,
} from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';

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
      image: '/newlayout/images/portfolio/motor-city.jpg',
    },
    {
      title: 'Sustainable City 800 Villas',
      location: 'Abu Dhabi, Yas Island',
      description: 'Comprehensive villa construction scaffolding solution',
      image: '/newlayout/images/portfolio/sustainable-city.jpg',
    },
    {
      title: 'Sharjah Government Building',
      location: 'Sharjah, UAE',
      description: 'Dome scaffolding for government building',
      image: '/newlayout/images/portfolio/sharjah-government.jpg',
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
        <title>Hedefy Scaffolding - #1 Scaffolding Company in Dubai & UAE Contractor</title>
        <meta
          name="description"
          content="Hedefy Scaffolding is a leading scaffolding contractor in Dubai & UAE. We provide professional industrial, construction, and event scaffolding services since 2010. Safe, certified, and reliable solutions."
        />
        <meta
          name="keywords"
          content="Scaffolding Company Dubai, Scaffolding Contractor UAE, Scaffolding Services Dubai, Industrial Scaffolding UAE, Construction Scaffolding Dubai, Event Scaffolding Dubai, Aluminum Scaffolding UAE, Scaffolding Rental Dubai, Scaffolding Installation UAE, Safe Scaffolding Solutions Dubai"
        />
        <link rel="canonical" href="https://hedefy-scaff.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hedefy-scaff.com/" />
        <meta property="og:title" content="Hedefy Scaffolding - Professional Scaffolding Solutions in UAE" />
        <meta property="og:description" content="Leading scaffolding company in Dubai providing safe and certified solutions for construction and industrial projects across the UAE." />
        <meta property="og:image" content="https://hedefy-scaff.com/newlayout/images/portfolio/motor-city.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hedefy-scaff.com/" />
        <meta property="twitter:title" content="Hedefy Scaffolding - Professional Scaffolding Solutions in UAE" />
        <meta property="twitter:description" content="Safe, reliable, and high-quality scaffolding services in Dubai and UAE since 2010." />
        <meta property="twitter:image" content="https://hedefy-scaff.com/newlayout/images/portfolio/motor-city.jpg" />
      </Head>

      <Layout>
        <HeroVideo />

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
                src="/newlayout/images/portfolio/sharjah-government.jpg"
                alt="About Hedefy"
                className="rounded-lg shadow-xl"
              />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">About Hedefy</h2>
                
                {/* Long Modern Separator Bar */}
                <div className="w-full max-w-xs h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden flex">
                  <div className="h-full w-1/2 bg-accent"></div>
                  <div className="h-full w-1/4 bg-primary-dark"></div>
                  <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                </div>

                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  We are into the scaffolding business since 2010 providing internal and external scaffolding solutions for buildings, tanks, towers, minarets and events. Our commitment to safety and engineering precision has made us a trusted partner across the UAE.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Safety First', desc: 'Complete safety compliance and international certification.', icon: <FaShieldAlt /> },
                    { title: 'Quality Assured', desc: 'Premium scaffolding materials and state-of-the-art equipment.', icon: <FaTrophy /> },
                    { title: 'On-Time Delivery', desc: 'We meet all project deadlines with consistent reliability.', icon: <FaClock /> }
                  ].map((item, idx) => (
                    <div key={idx} className="group flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent/50">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-3xl text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-dark text-xl mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 mb-8">Comprehensive scaffolding solutions for all your project needs</p>
              
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Why Choose Hedefy</h2>
              <p className="text-xl text-gray-600 mb-8">Experience, expertise, and commitment to excellence</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FaTrophy />, title: 'Expert Team', desc: 'Experienced professionals with proven expertise since 2010.' },
                { icon: <FaShieldAlt />, title: 'Safety Certified', desc: 'All certifications and international safety standards strictly met.' },
                { icon: <FaClock />, title: 'On-Time Service', desc: 'Reliable and punctual project completion, every single time.' },
                { icon: <FaChartLine />, title: 'Quality Assured', desc: 'Premium quality materials and state-of-the-art equipment.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col h-full text-center border border-gray-50 group relative overflow-hidden">
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex justify-center items-center text-4xl text-accent mx-auto mb-8 group-hover:bg-accent group-hover:text-primary-dark transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 mb-8">Showcasing our successful completed projects across UAE</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>
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

        {/* UAE Coverage Areas Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">UAE Coverage Areas</h2>
              <p className="text-xl text-gray-600 mb-8">Serving construction and industrial projects across all major Emirates</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/3 bg-accent animate-pulse"></div>
                <div className="h-full w-1/3 bg-primary-dark"></div>
                <div className="h-full w-1/3 bg-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
              {[
                { city: 'Dubai', desc: 'The hub of construction innovation. We provide scaffolding for skyscrapers, malls, and residential towers.' },
                { city: 'Abu Dhabi', desc: 'Focusing on industrial and energy projects, including refineries and major infrastructure works.' },
                { city: 'Sharjah', desc: 'Supporting the cultural and residential growth with efficient scaffolding for schools and villas.' },
                { city: 'Ajman', desc: 'Rapidly growing industrial zones and residential projects across the heart of the Northern Emirates.' },
                { city: 'Industrial Areas', desc: 'Specialized heavy-duty scaffolding for factories, warehouses, and storage facilities UAE-wide.' }
              ].map((area) => (
                <div key={area.city} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full hover:-translate-y-4">
                  {/* Hover Background Accent */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark group-hover:text-accent mb-4 transition-colors">
                    {area.city}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                    {area.desc}
                  </p>
                  
                  {/* Subtle Icon or Shape */}
                  <div className="mt-auto pt-6 text-accent opacity-20 group-hover:opacity-100 transition-opacity">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
          {/* Decorative background accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-dark to-accent opacity-30"></div>
          
          <div className="container-custom px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation and quote for your scaffolding project. Our expert team is ready to assist you.
            </p>
            
            <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-4 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-4">
              {/* Request Quote Button */}
              <Link href="/contact" className="w-full md:flex-1">
                <button className="w-full bg-accent text-primary-dark font-bold py-5 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-lg text-lg flex items-center justify-center gap-2 group">
                  Request Quote
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/971504529978?text=Hello, I would like to request scaffolding services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:flex-1"
              >
                <button className="w-full bg-[#25D366] text-white font-bold py-5 px-8 rounded-full hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 text-lg">
                  <BiLogoWhatsapp size={24} />
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}


