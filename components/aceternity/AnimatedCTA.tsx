"use client";

import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Meteors } from "@/components/ui/meteors";

export function AnimatedCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
      
      <Meteors number={20} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.1} duration={0.6}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Garden Journey?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of gardeners who&apos;ve transformed their spaces using the Sproutly method. 
              Start growing today, no matter how small your space.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#signup"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition transform hover:scale-105"
              >
                Start Growing Today
              </a>
              <a
                href="#learn-more"
                className="px-8 py-4 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-lg font-medium hover:bg-secondary/20 transition transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3} duration={0.6} className="mt-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-4">
                {['👩‍🌾', '👨‍🌾', '👩‍🌾', '👨‍🌾'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-primary flex items-center justify-center">
                    <span className="text-sm">{emoji}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">2,000+</span> gardeners already joined
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 