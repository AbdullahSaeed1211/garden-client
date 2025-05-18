"use client";

import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  return (
    <ScrollReveal
      direction="up"
      delay={delay}
      duration={0.6}
      className="w-full"
    >
      <Card className="border border-border/40 h-full p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </ScrollReveal>
  );
};

export function AnimatedFeatures() {
  const features = [
    {
      title: "Personalized Learning",
      description: "Courses tailored to your experience level, garden size, and local climate.",
      icon: "👩‍🌾",
      delay: 0.1,
    },
    {
      title: "Seasonal Guidance",
      description: "Monthly calendars and reminders for what to plant, harvest, and maintain.",
      icon: "🌱",
      delay: 0.2,
    },
    {
      title: "Expert Community",
      description: "Get advice from professional gardeners and connect with fellow enthusiasts.",
      icon: "🌿",
      delay: 0.3,
    },
    {
      title: "Sustainable Methods",
      description: "Learn organic gardening techniques that work with nature, not against it.",
      icon: "🦋",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.5}>
            <span className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4">
              Why Choose Sproutly
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Grow your gardening skills with us
            </h2>
            <p className="text-muted-foreground">
              Our platform offers everything you need to become a confident gardener, 
              no matter your experience level or space constraints.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
} 