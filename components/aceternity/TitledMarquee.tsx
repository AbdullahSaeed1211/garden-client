"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface TitledMarqueeProps {
  title: string;
  items: string[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  theme?: "primary" | "secondary" | "accent";
}

export function TitledMarquee({
  title,
  items,
  className = "",
  speed = 40,
  direction = "left",
  theme = "primary"
}: TitledMarqueeProps) {
  const themeClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20"
  };

  return (
    <section className={`py-12 px-4 relative overflow-hidden ${className}`}>
      <ScrollReveal direction="up" delay={0.1} duration={0.6} className="mb-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
      </ScrollReveal>
      
      <Marquee speed={speed} direction={direction} pauseOnHover={true} className="py-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`mx-4 px-6 py-3 rounded-lg border ${themeClasses[theme]} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
          >
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
} 