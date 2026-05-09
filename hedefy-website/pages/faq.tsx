import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { FaQuestionCircle, FaInfoCircle, FaShieldAlt, FaComments } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';

const FAQPage = () => {
  const faqs = [
    {
      q: "What is the best scaffolding company in Dubai?",
      a: "Hedefy Scaffolding is recognized as one of the top scaffolding companies in Dubai, providing certified, safe, and professional solutions since 2010 for residential, commercial, and industrial projects.",
      icon: <FaShieldAlt />
    },
    {
      q: "How much does scaffolding cost in UAE?",
      a: "Scaffolding costs depend on project scale, height, and duration. We provide competitive rental and installation rates across Dubai and the Northern Emirates. Contact us for a free, no-obligation quote.",
      icon: <FaInfoCircle />
    },
    {
      q: "Do you provide industrial scaffolding?",
      a: "Yes, we specialize in heavy-duty industrial scaffolding for water tanks, tower erection, and refinery maintenance, following the strictest safety standards in the industry.",
      icon: <FaQuestionCircle />
    },
    {
      q: "Is your scaffolding safety certified?",
      a: "Every scaffolding structure we erect is safety certified and inspected by our expert team. We comply with all UAE municipality regulations and international safety standards.",
      icon: <FaShieldAlt />
    },
    {
      q: "How do I get a quote?",
      a: "You can get a quote by filling out our contact form, calling us at 050-4529978, or messaging us on WhatsApp. Our team typically responds within 2-4 hours.",
      icon: <FaComments />
    },
    {
      q: "Do you provide 24/7 support?",
      a: "Yes, we provide 24/7 emergency support for urgent project needs and safety concerns across all our active sites in the UAE.",
      icon: <FaShieldAlt />
    }
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Hedefy Scaffolding Dubai</title>
        <meta name="description" content="Find answers to common questions about scaffolding services, costs, safety certifications, and rental options in Dubai and the UAE." />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-dark to-accent"></div>
          <div className="container-custom px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about our scaffolding solutions, safety standards, and service locations across the UAE.
            </p>
            {/* Separator */}
            <div className="w-full max-w-3xl mx-auto h-1.5 bg-white/5 rounded-full overflow-hidden flex">
              <div className="h-full w-1/4 bg-accent animate-pulse"></div>
              <div className="h-full w-2/4 bg-white/20"></div>
              <div className="h-full w-1/4 bg-accent animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-50 relative overflow-hidden">
                    {/* Accent top bar on hover */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300 flex-shrink-0">
                        {faq.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">{faq.q}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 bg-[#051129] text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-dark to-accent opacity-60"></div>
                <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
                  Our team of experts is ready to help you with any specific scaffolding requirements.
                </p>
                <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 flex flex-col md:flex-row gap-3">
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-accent text-primary-dark font-bold py-4 px-6 rounded-full hover:bg-white transition-all duration-300 shadow-lg text-base flex items-center justify-center gap-2 group">
                      Contact Us
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </Link>
                  <a
                    href="https://wa.me/971504529978?text=Hello, I have a question about your scaffolding services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-full hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-base">
                      <BiLogoWhatsapp size={20} />
                      Chat on WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQPage;

