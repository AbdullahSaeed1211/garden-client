"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UnderConstructionModal({ isOpen, onClose }: UnderConstructionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            >
              {/* Construction Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-orange-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Payment Portal Under Construction
              </h3>

              {/* Message */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                We&apos;re working hard to bring you a seamless enrollment experience! 
                Our payment system will be available soon.
              </p>

              {/* Contact Info */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800 mb-2 font-medium">
                  Interested in enrolling early?
                </p>
                <p className="text-sm text-green-700">
                  Contact us at{' '}
                  <a 
                    href="mailto:hello@sproutly.site" 
                    className="font-medium underline hover:no-underline"
                  >
                    hello@sproutly.site
                  </a>
                  <br />
                  for early bird pricing and course updates!
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
                <a
                  href="mailto:hello@sproutly.site?subject=Course Enrollment Interest"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 