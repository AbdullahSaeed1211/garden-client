"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Formatted testimonials for the AnimatedTestimonials component
const animatedTestimonials = [
  {
    quote: "I was always intimidated by gardening in my small apartment, but Sproutly's courses gave me the confidence to start. Now my balcony is thriving with herbs and vegetables!",
    name: "Sarah Johnson",
    designation: "Urban Apartment Gardener",
    src: "/avatars/user1.png",
  },
  {
    quote: "The container gardening course was exactly what I needed. I've transformed my patio into a productive garden space that also looks beautiful. Highly recommend!",
    name: "Michael Chen",
    designation: "Container Garden Enthusiast",
    src: "/avatars/user2.png",
  },
  {
    quote: "As someone with no prior gardening experience, I was amazed at how accessible Sproutly made everything. Their step-by-step guidance helped me avoid common mistakes.",
    name: "Emma Rodriguez",
    designation: "First-time Gardener",
    src: "/avatars/user3.png",
  },
  {
    quote: "The vertical gardening techniques I learned completely transformed my small outdoor space. Now I'm growing more in a 3x3 space than I ever thought possible!",
    name: "David Kim",
    designation: "Vertical Garden Specialist",
    src: "/avatars/user4.png",
  },
  {
    quote: "The community aspect of Sproutly is what truly sets it apart. I've met so many other urban gardeners who share their knowledge and inspire me daily.",
    name: "Lisa Morgan",
    designation: "Community Garden Organizer",
    src: "/avatars/user5.png",
  },
  {
    quote: "I never thought I could grow my own food in my tiny balcony, but after taking the container gardening course, I'm harvesting fresh vegetables every week!",
    name: "James Wilson",
    designation: "Balcony Gardener",
    src: "/avatars/user6.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Community Voices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Hear from our community of urban gardeners who have transformed their spaces 
            through the knowledge and skills gained in our course.
          </motion.p>
        </div>
        
        {/* Animated Testimonials */}
        <div>
          <AnimatedTestimonials testimonials={animatedTestimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
} 