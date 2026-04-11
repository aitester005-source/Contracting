import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Hedefy Scaffolding Contracting Co. LLC</title>
      </Head>
      <Layout>
        <section className="section-padding">
          <div className="container-custom px-4 max-w-3xl">
            <SectionHeader title="Terms of Service" centered/>
            
            <div className="space-y-8 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Hedefy Scaffolding's website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Disclaimer</h2>
                <p>
                  The materials on our website are provided on an 'as is' basis. Hedefy Scaffolding does not make any warranties, expressed or implied, and hereby disclaims and negates any other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Limitations</h2>
                <p>
                  In no event shall Hedefy Scaffolding or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Hedefy Scaffolding's website could include technical, typographical, or photographic errors. Hedefy Scaffolding does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Links</h2>
                <p>
                  Hedefy Scaffolding has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Hedefy Scaffolding of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Modifications</h2>
                <p>
                  Hedefy Scaffolding may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Contact Information</h2>
                <p>
                  For any questions about these terms, please contact us at info@hedefy-scaff.com
                </p>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
