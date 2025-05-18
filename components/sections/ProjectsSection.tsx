"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Herb Garden",
    description: "Create a compact herb garden perfect for kitchen windowsills or small balconies.",
    image: "/hero-garden-3.jpg",
    difficulty: "Beginner",
    time: "2-3 hours",
  },
  {
    id: 2,
    title: "Vertical Garden Wall",
    description: "Build a space-saving vertical garden wall for apartments and small spaces.",
    image: "/project-vertical.jpg",
    difficulty: "Intermediate",
    time: "4-6 hours",
  },
  {
    id: 3,
    title: "Self-Watering Containers",
    description: "Craft self-watering containers that make maintenance easier for busy urban gardeners.",
    image: "/project-containers.jpg",
    difficulty: "Intermediate",
    time: "3-4 hours",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4"
          >
            Hands-On Learning
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            These practical projects are integrated throughout the course to help you 
            apply your knowledge and create beautiful, functional gardens.
          </motion.p>
        </div>
        
        <div ref={ref} className="mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group rounded-xl overflow-hidden bg-background border border-primary/10 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold rounded-full px-3 py-1">
                      {project.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Time:</span> {project.time}
                    </span>
                    <button 
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      aria-label={`Learn more about ${project.title}`}
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Start Creating Your Garden
          </a>
        </motion.div>
      </div>
    </section>
  );
} 