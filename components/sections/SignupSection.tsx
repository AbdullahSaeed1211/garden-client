"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import SignupForm from '@/components/aceternity/SignupForm';
import Image from 'next/image';

export default function SignupSection() {
  return (
    <section id="signup" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50 -z-10" />
      
      {/* Decorative images */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 -z-10 hidden lg:block">
        <Image 
          src="/hero-garden.jpg" 
          alt="Decorative plant" 
          fill
          className="object-contain"
        />
      </div>
      
      <div className="absolute top-10 right-0 w-64 h-64 opacity-20 -z-10 hidden lg:block">
        <Image 
          src="/hero-garden-2.jpg" 
          alt="Decorative plant" 
          fill
          className="object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="max-w-lg mx-auto lg:mx-0">
              <span className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4">
                Join Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Start Your Garden Journey
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Sign up for our 6-week course and transform your urban space into a thriving garden oasis. 
                Learn from garden expert Olivia and join a community of passionate urban gardeners.
              </p>
              
              <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">What You&apos;ll Get:</h3>
                <ul className="space-y-4">
                  {[
                    "Weekly live online sessions with Olivia",
                    "Hands-on projects with personalized feedback",
                    "Exclusive course materials and resources",
                    "Access to our community of gardeners",
                    "Lifetime access to course recordings",
                    "Certificate of completion"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="mt-8 lg:mt-0">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
                <div className="p-6">
                  <SignupForm className="z-10 relative" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
} 