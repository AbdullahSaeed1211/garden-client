"use client";

import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

export function FeaturedCourse() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal direction="up" delay={0.1} duration={0.7}>
          <CardSpotlight className="p-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/featured-course.jpg"
                  alt="Urban Garden Mastery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-accent font-medium px-3 py-1 bg-accent/10 rounded-full mb-4 text-sm">
                  Featured Course
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Urban Garden Mastery
                </h3>
                <p className="text-muted-foreground mb-6">
                  Learn how to transform even the smallest spaces into thriving gardens. 
                  Perfect for apartment dwellers and urban gardeners.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                      🕒
                    </div>
                    <span className="text-sm">8 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                      👩‍🏫
                    </div>
                    <span className="text-sm">1-on-1 mentoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                      🏆
                    </div>
                    <span className="text-sm">Certificate</span>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition w-full sm:w-auto">
                  Enroll Now
                </button>
              </div>
            </div>
          </CardSpotlight>
        </ScrollReveal>
      </div>
    </section>
  );
} 