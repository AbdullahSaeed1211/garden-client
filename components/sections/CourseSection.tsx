"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Sprout, Flower, Droplets, Sun, Mountain } from "lucide-react";

const courseWeeks = [
  {
    week: 1,
    title: "The 'Unkillable Plant' Foundation",
    description: "Skip years of trial and error. Get the exact soil, tools, and setup that guarantees your first plants survive (and thrive).",
    color: "bg-primary/20",
    icon: Sprout,
  },
  {
    week: 2,
    title: "Space Multiplication System",
    description: "Turn 2 square feet into a 20-plant garden using our vertical growing hacks that apartment dwellers are raving about.",
    color: "bg-accent/20",
    icon: Leaf,
  },
  {
    week: 3,
    title: "The $200/Month Grocery Hack",
    description: "Grow the exact herbs and vegetables that will slash your grocery bill while upgrading your meals to restaurant quality.",
    color: "bg-chart-3/20",
    icon: Flower,
  },
  {
    week: 4,
    title: "The 5-Minute Maintenance Method",
    description: "My 'set and forget' watering system that keeps plants healthy even when you travel for weeks (no plant-sitters needed).",
    color: "bg-chart-4/20",
    icon: Droplets,
  },
  {
    week: 5,
    title: "Year-Round Growth Secrets",
    description: "The little-known lighting trick that lets you harvest fresh greens in winter while your neighbors eat wilted store produce.",
    color: "bg-secondary/20",
    icon: Sun,
  },
  {
    week: 6,
    title: "Emergency Plant Rescue Protocol",
    description: "Never lose another plant. The exact steps to diagnose and fix any problem before it kills your garden (works 95% of the time).",
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
            The Fastest Way to Go From Plant Killer to Plant Whisperer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Follow our proven 6-week system that&apos;s already helped 200+ urban dwellers grow fresh food 
            in spaces as small as a fire escape (even with zero gardening experience).
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