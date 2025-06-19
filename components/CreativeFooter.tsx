"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreativeFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/" className="flex items-center gap-1">
                <span className="text-primary font-bold text-2xl">Sproutly</span>
                <span className="text-green-600 text-2xl">🌱</span>
              </Link>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md">
              We&apos;re on a mission to help urban dwellers reconnect with nature through practical gardening education. Our expert-led courses support gardeners at every stage.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                {name: "instagram", href: "https://instagram.com/sproutlygardens", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )},
                {name: "youtube", href: "https://youtube.com/@sproutlygardens", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )},
                {name: "twitter", href: "https://twitter.com/sproutlysite", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
              ].map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Courses</h3>
            <ul className="space-y-3">
              <li><Link href="/courses/urban-gardening" className="text-gray-600 hover:text-primary transition-colors">Urban Gardening</Link></li>
              <li><Link href="/courses/herb-garden" className="text-gray-600 hover:text-primary transition-colors">Herb Garden</Link></li>
              <li><Link href="/courses/vertical-gardening" className="text-gray-600 hover:text-primary transition-colors">Vertical Gardens</Link></li>
              <li><Link href="/courses/container-gardening" className="text-gray-600 hover:text-primary transition-colors">Container Gardens</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/blog/10-best-plants-small-urban-spaces" className="text-gray-600 hover:text-primary transition-colors">Plant Guides</Link></li>
              <li><Link href="/blog/container-gardening-complete-guide" className="text-gray-600 hover:text-primary transition-colors">Growing Tips</Link></li>
              <li><Link href="/#faq" className="text-gray-600 hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <span className="block text-gray-500 mb-1">Email us at</span>
                  <a href="mailto:hello@sproutly.site" className="text-gray-700 hover:text-primary">hello@sproutly.site</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <span className="block text-gray-500 mb-1">Call us at</span>
                  <a href="tel:+1-123-456-7890" className="text-gray-700 hover:text-primary">(123) 456-7890</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Sproutly. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm mt-4">
            <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 