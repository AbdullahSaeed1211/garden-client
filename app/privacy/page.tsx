import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import CreativeFooter from '@/components/CreativeFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sproutly Urban Gardening Courses',
  description: 'Learn how Sproutly protects and handles your personal information. Our privacy policy outlines data collection, usage, and your rights.',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="py-20 pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb 
            items={[
              { label: 'Privacy Policy' }
            ]}
            className="mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>
              When you enroll in our courses or use our website, we may collect:
            </p>
            <ul>
              <li>Personal information (name, email address, phone number)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Course progress and participation data</li>
              <li>Website usage analytics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide course access and support</li>
              <li>Process payments and manage your account</li>
              <li>Send course updates and educational content</li>
              <li>Improve our services and website experience</li>
              <li>Communicate with you about your enrollment</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share information with:
            </p>
            <ul>
              <li>Service providers who help us operate our business</li>
              <li>Payment processors for transaction handling</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience and analyze site usage. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@sproutly.site" className="text-primary hover:underline">
                privacy@sproutly.site
              </a>
            </p>
          </div>
        </div>
      </section>

      <CreativeFooter />
    </main>
  );
} 