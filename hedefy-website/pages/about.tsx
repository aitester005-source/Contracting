import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import Link from 'next/link';
import { FaCheckCircle, FaBullseye, FaEye, FaAward, FaClock, FaUsers } from 'react-icons/fa';

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
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <img
                src="/newlayout/images/about-company.png"
                alt="Hedefy Scaffolding Company Overview"
                className="rounded-lg shadow-xl"
              />
              <div>
                <SectionHeader title="Company Overview" centered={false} />
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We are into the scaffolding business since 2010 providing internal and external scaffolding solutions for buildings, tanks, towers, minarets and events.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  With over a decade of experience, we have established ourselves as a trusted partner for construction companies, contractors, and event organizers across the UAE. Our commitment to safety, quality, and professionalism sets us apart in the industry.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team consists of experienced engineers, safety specialists, and skilled workers who work together to deliver exceptional results on every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-accent">
                <div className="flex items-center gap-4 mb-4">
                  <FaBullseye className="text-4xl text-accent" />
                  <h2 className="text-3xl font-bold text-primary-dark">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Deliver exceptional scaffolding services without compromising safety, quality and project deadlines. We strive to be the most reliable partner for all scaffolding needs.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary-dark">
                <div className="flex items-center gap-4 mb-4">
                  <FaEye className="text-4xl text-primary-dark" />
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
            <SectionHeader
              title="Our Core Values"
              subtitle="The principles that guide our work"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-3xl text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Safety First</h3>
                <p className="text-gray-600">Safety is our top priority in every operation</p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-3xl text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Quality Excellence</h3>
                <p className="text-gray-600">We deliver premium quality in all projects</p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-3xl text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Reliability</h3>
                <p className="text-gray-600">Always on-time, always on-budget</p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-3xl text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">Teamwork</h3>
                <p className="text-gray-600">Collaboration with clients and partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Extended */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Why Industry Leaders Choose Hedefy"
              subtitle="Our competitive advantages"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">14+ Years of Experience</h3>
                  <p>Proven track record in delivering high-quality scaffolding solutions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">500+ Completed Projects</h3>
                  <p>Successfully delivered across residential, commercial, and industrial sectors</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified & Compliant</h3>
                  <p>All safety certifications and international compliance standards met</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p>Over 150 trained professionals with specialized expertise</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
                  <p>State-of-the-art scaffolding materials and construction equipment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent text-primary-dark rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p>Round-the-clock customer service and technical support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with Hedefy Scaffolding for your next project and experience the difference professional expertise makes.
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
