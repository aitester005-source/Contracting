import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Hedefy Scaffolding Contracting Co. LLC</title>
      </Head>
      <Layout>
        <section className="section-padding">
          <div className="container-custom px-4 max-w-3xl">
            <SectionHeader title="Privacy Policy" centered/>
            
            <div className="space-y-8 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Introduction</h2>
                <p>
                  This Privacy Policy describes how Hedefy Scaffolding Contracting Co. LLC collects, uses, and shares information about you when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, email, phone number, and company information</li>
                  <li>Project details and requirements</li>
                  <li>Website usage information via cookies</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To respond to your inquiries and provide quotes</li>
                  <li>To improve our services</li>
                  <li>To send marketing communications (with consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. Your data is encrypted and stored securely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
                <p>
                  For privacy concerns, contact us at info@hedefy-scaff.com
                </p>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
