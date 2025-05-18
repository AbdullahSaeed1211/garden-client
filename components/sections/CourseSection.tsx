"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Sprout, Flower, Droplets, Sun, Mountain } from "lucide-react";

const courseWeeks = [
  {
    week: 1,
    title: "Gardening Fundamentals",
    description: "Learn the basics of soil preparation, light requirements, and essential gardening tools for your urban setup.",
    color: "bg-primary/20",
    icon: Sprout,
  },
  {
    week: 2,
    title: "Container Gardening & Space Planning",
    description: "Discover how to maximize limited space with vertical gardens, hanging plants, and strategic container placement.",
    color: "bg-accent/20",
    icon: Leaf,
  },
  {
    week: 3,
    title: "Growing Herbs & Vegetables",
    description: "Master the techniques for growing culinary herbs and compact vegetables perfect for urban kitchens and balconies.",
    color: "bg-chart-3/20",
    icon: Flower,
  },
  {
    week: 4,
    title: "Watering & Maintenance",
    description: "Develop sustainable watering routines and learn essential maintenance practices for healthy, thriving plants.",
    color: "bg-chart-4/20",
    icon: Droplets,
  },
  {
    week: 5,
    title: "Light Management & Seasons",
    description: "Understand seasonal planting cycles and techniques to optimize natural and artificial light in urban environments.",
    color: "bg-secondary/20",
    icon: Sun,
  },
  {
    week: 6,
    title: "Advanced Techniques & Troubleshooting",
    description: "Explore advanced urban gardening methods and learn solutions for common plant diseases and pest problems.",
    color: "bg-chart-5/20",
    icon: Mountain,
  },
];

export default function CourseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="course" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4"
          >
            What You&apos;ll Learn
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Your Learning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Our 6-week curriculum is designed to take you from a complete beginner to a confident urban gardener,
            with practical lessons and hands-on projects each week.
          </motion.p>
        </div>
        
        <div ref={ref} className="mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courseWeeks.map((week) => {
              const Icon = week.icon;
              
              return (
                <motion.div
                  key={week.week}
                  variants={itemVariants}
                  className={`rounded-xl p-6 border border-primary/10 ${week.color} hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold bg-background text-primary px-3 py-1 rounded-full">
                      Week {week.week}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                  <p className="text-muted-foreground">{week.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#signup" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 py-3 transition-all transform hover:scale-105"
          >
            Join the Course
          </a>
        </motion.div>
      </div>
    </section>
  );
} 