"use client";

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I need any gardening experience to take the courses?",
    answer: "Not at all! Our courses are designed for all skill levels, from complete beginners to those with some gardening experience. We start with the basics and build up your knowledge step by step."
  },
  {
    question: "What materials or supplies do I need for the course?",
    answer: "We provide a detailed supply list when you enroll. Most items are common gardening supplies like containers, soil, seeds, and basic tools. We focus on budget-friendly options that are easily available."
  },
  {
    question: "Can I really grow plants in a small apartment or balcony?",
    answer: "Absolutely! Our techniques are specifically designed for small urban spaces. You can grow a variety of plants in containers, on balconies, or even indoors with the right setup and plant selection."
  },
  {
    question: "How much time do I need to dedicate to maintaining my garden?",
    answer: "Our urban gardening techniques are designed to be low-maintenance. Most gardens require just 15-30 minutes of care per week once established. We teach you efficient methods to maximize growth with minimal time investment."
  },
  {
    question: "What if I don't have good lighting in my space?",
    answer: "We cover solutions for various lighting conditions, including low-light plants and supplemental grow lights. Many plants can thrive in indirect light, and we'll help you choose the right ones for your specific situation."
  },
  {
    question: "Are the courses live or pre-recorded?",
    answer: "Our courses include both live sessions with instructor Olivia and access to recorded content. You'll get the benefit of real-time interaction and the flexibility to review materials at your own pace."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 px-4 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="container max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions about urban gardening or our courses? We&apos;ve got answers!
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We&apos;d love to help!
            </p>
            <a 
              href="mailto:hello@sproutly.site" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 