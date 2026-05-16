import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import Link from 'next/link';
import { FaCheckCircle, FaBullseye, FaEye, FaAward, FaClock, FaUsers } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function About() {
  return (
    <>
      <Head>
        <title>About Hedefy Scaffolding Contracting Co. LLC - Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Hedefy Scaffolding's mission, vision, and commitment to providing safe, reliable scaffolding solutions."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container-custom px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Hedefy Scaffolding Contracting Co. LLC</h1>
            <p className="text-xl text-gray-200">Our Journey to Excellence in Scaffolding Services</p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-custom px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                {/* Decorative Background Element */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-dark/10 rounded-2xl -z-10 group-hover:-rotate-12 transition-transform duration-500"></div>
                
                <img
                  src="/images/portfolio/motor-city.jpg"
                  alt="Hedefy Scaffolding Company Overview"
                  className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Company Overview</h2>
                
                {/* Long Modern Separator Bar */}
                <div className="w-full max-w-xs h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden flex">
                  <div className="h-full w-1/2 bg-accent"></div>
                  <div className="h-full w-1/4 bg-primary-dark"></div>
                  <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed font-medium italic border-l-4 border-accent pl-6 py-2">
                    "We are into the scaffolding business since 2010 providing internal and external scaffolding solutions for buildings, tanks, towers, minarets and events."
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    With over a decade of experience, we have established ourselves as a trusted partner for construction companies, contractors, and event organizers across the UAE. Our commitment to safety, quality, and professionalism sets us apart in the industry.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed bg-gray-50 p-6 rounded-2xl border-l-4 border-primary-dark">
                    Our team consists of experienced engineers, safety specialists, and skilled workers who work together to deliver exceptional results on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                    <FaBullseye />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Deliver exceptional scaffolding services without compromising safety, quality and project deadlines. We strive to be the most reliable partner for all scaffolding needs.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-4xl text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                    <FaEye />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become an innovative and trustworthy scaffolding solution provider across construction, events, exhibitions, and oil & gas industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 mb-8">The principles that guide our work</p>
              
              {/* Long Modern Separator Bar */}
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-primary-dark"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FaCheckCircle />, title: 'Safety First', desc: 'Safety is our top priority in every operation' },
                { icon: <FaAward />, title: 'Quality Excellence', desc: 'We deliver premium quality in all projects' },
                { icon: <FaClock />, title: 'Reliability', desc: 'Always on-time, always on-budget' },
                { icon: <FaUsers />, title: 'Teamwork', desc: 'Collaboration with clients and partners' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col h-full text-center border border-gray-50 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex justify-center items-center text-4xl text-accent mx-auto mb-8 group-hover:bg-accent group-hover:text-primary-dark transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Extended */}
        <section className="section-padding bg-[#051129] text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-dark to-accent opacity-40"></div>
          
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Industry Leaders Choose Hedefy</h2>
              <p className="text-xl text-gray-400 mb-8">Our competitive advantages</p>
              <div className="w-full max-w-4xl mx-auto h-1.5 bg-white/5 rounded-full overflow-hidden flex">
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
                <div className="h-full w-2/4 bg-white/20"></div>
                <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { stat: '14+', title: 'Years of Experience', desc: 'Proven track record in delivering high-quality scaffolding solutions across the UAE.' },
                { stat: '500+', title: 'Completed Projects', desc: 'Successfully delivered across residential, commercial, and industrial sectors.' },
                { stat: '✓', title: 'Certified & Compliant', desc: 'All safety certifications and international compliance standards fully met.' },
                { stat: '150+', title: 'Expert Team', desc: 'Over 150 trained professionals with specialized scaffolding expertise.' },
                { stat: '★', title: 'Modern Equipment', desc: 'State-of-the-art scaffolding materials and construction equipment on every project.' },
                { stat: '24/7', title: 'Support', desc: 'Round-the-clock customer service and technical support for all clients.' },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-l-[2rem]"></div>
                  <div className="text-4xl font-black text-accent mb-4 font-mono">{item.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Hedefy Scaffolding for your next project and experience the difference professional expertise makes.
            </p>
            <div className="max-w-2xl mx-auto bg-primary-dark/5 border border-primary-dark/10 rounded-[3rem] p-4 shadow-xl flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full md:flex-1">
                <button className="w-full bg-primary-dark text-white font-bold py-5 px-8 rounded-full hover:bg-accent hover:text-primary-dark transition-all duration-300 shadow-lg text-lg flex items-center justify-center gap-2 group">
                  Get in Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              <a
                href="https://wa.me/971504529978?text=Hello, I would like to learn more about Hedefy Scaffolding services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:flex-1"
              >
                <button className="w-full bg-[#25D366] text-white font-bold py-5 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg flex items-center justify-center gap-3 text-lg">
                  <BiLogoWhatsapp size={24} />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
