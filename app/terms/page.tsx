import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import CreativeFooter from '@/components/CreativeFooter';

export const metadata: Metadata = {
  title: 'Terms of Service | Sproutly Urban Gardening Courses',
  description: 'Read our terms of service for using Sproutly courses and website. Understanding your rights and responsibilities.',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="py-20 pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb 
            items={[
              { label: 'Terms of Service' }
            ]}
            className="mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using Sproutly&apos;s website and services, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations.
            </p>

            <h2>Course Enrollment and Access</h2>
            <ul>
              <li>Course access is granted upon successful payment</li>
              <li>You must be 18 years or older to enroll</li>
              <li>Account credentials are for personal use only</li>
              <li>Course materials are for educational purposes only</li>
            </ul>

            <h2>Payment and Refunds</h2>
            <p>
              Course fees are due at enrollment. We offer a 14-day money-back guarantee 
              if you&apos;re not satisfied with the course content.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All course materials, including videos, guides, and resources, are protected 
              by copyright and remain the property of Sproutly. You may not redistribute 
              or resell any course content.
            </p>

            <h2>User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Share course materials with non-enrolled users</li>
              <li>Use the service for any unlawful purpose</li>
              <li>Interfere with other students&apos; learning experience</li>
              <li>Attempt to reverse engineer or copy our systems</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Sproutly provides educational content for informational purposes. 
              We are not responsible for any gardening results or plant health outcomes.
            </p>

            <h2>Service Availability</h2>
            <p>
              While we strive for 100% uptime, we cannot guarantee uninterrupted access 
              to our services. Scheduled maintenance will be announced in advance.
            </p>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. 
              Continued use of our services constitutes acceptance of updated terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@sproutly.site" className="text-primary hover:underline">
                legal@sproutly.site
              </a>
            </p>
          </div>
        </div>
      </section>

      <CreativeFooter />
    </main>
  );
} 