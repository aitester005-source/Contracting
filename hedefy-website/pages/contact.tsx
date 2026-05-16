import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import FormField from '@/components/FormField';
import Button from '@/components/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import WhatsAppLeadModal from '@/components/WhatsAppLeadModal';

export default function Contact() {
  const router = useRouter();
  const { project, service } = router.query;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectDetails: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    if (project || service) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: `Inquiry regarding ${service ? `Service: ${service}` : 'your scaffolding services'}${project ? ` (specifically project reference: ${project})` : ''}. I would like to request a quote.`,
      }));
    }
  }, [project, service]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you! We will contact you shortly.');
        setFormData({ name: '', company: '', phone: '', email: '', projectDetails: '' });
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Hedefy Scaffolding Contracting Co. LLC | Get Your Quote</title>
        <meta
          name="description"
          content="Contact Hedefy Scaffolding Contracting Co. LLC for scaffolding services. Call, email, or fill out our form for a free consultation and quote."
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container-custom px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-200">We're here to help with your scaffolding needs</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-accent">
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  <FaPhone />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Phone</h3>
                <a href="tel:0504529978" className="text-gray-600 hover:text-primary-dark block">
                  050-4529978
                </a>
              </div>

              {/* Email & Website */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-accent">
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Contact</h3>
                <a href="mailto:info@hedefy-scaff.com" className="text-gray-600 hover:text-primary-dark block mb-1">
                  info@hedefy-scaff.com
                </a>
                <a href="https://www.hedefy-scaff.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-dark block">
                  www.hedefy-scaff.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-500">
                <div className="text-4xl text-green-500 mb-4 flex justify-center">
                  <BiLogoWhatsapp />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">WhatsApp</h3>
                <button
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="text-gray-600 hover:text-primary-dark block mx-auto"
                >
                  050-4529978
                </button>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-accent">
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Location</h3>
                <p className="text-gray-600">Office No. G05, Elham Building<br/>Abu Hail, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4">
            <SectionHeader
              title="Send us a Message"
              subtitle="Fill out the form below and we'll get back to you soon"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label="Full Name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormField
                  label="Company Name"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="050-4529978"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormField
                  label="Project Details"
                  name="projectDetails"
                  placeholder="Tell us about your project requirements..."
                  required
                  isTextarea
                  rows={5}
                  value={formData.projectDetails}
                  onChange={handleChange}
                />
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200">
                  <iframe
                    src="https://maps.google.com/maps?q=Elham%20Building,%20Abu%20Hail,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Hedefy Location Map"
                  ></iframe>
                </div>

                {/* Business Hours */}
                <div className="bg-primary-dark text-white rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaClock size={24} className="text-accent" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-accent font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-accent font-semibold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-accent font-semibold">Closed</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3 mt-3">
                      <p className="text-sm text-gray-300">
                        <span className="text-accent font-semibold">Emergency Support:</span> Available 24/7 for urgent projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhatsAppLeadModal
          isOpen={isWhatsAppModalOpen}
          onClose={() => setIsWhatsAppModalOpen(false)}
          remarks={`Contact Page Request ${formData.name ? `from ${formData.name}` : ''}`}
          whatsappUrl="https://wa.me/971504529978"
        />
      </Layout>
    </>
  );
}
