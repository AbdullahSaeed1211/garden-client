"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Formatted testimonials for the AnimatedTestimonials component
const animatedTestimonials = [
  {
    quote: "I killed 17 plants before finding Sproutly. Now I harvest $150 worth of herbs and greens every month from my 4x4 fire escape. The 'unkillable setup' really works!",
    name: "Sarah Johnson",
    designation: "Software Engineer, Brooklyn",
    src: "/avatars/user1.png",
  },
  {
    quote: "Week 2's space hack blew my mind. I went from 3 struggling plants to 28 thriving ones in the same 6 square feet. My tiny balcony now feeds my family of 4.",
    name: "Michael Chen",
    designation: "Dad of 2, San Francisco",
    src: "/avatars/user2.png",
  },
  {
    quote: "The 5-minute maintenance system changed everything. I travel for work 2 weeks a month and my plants still look perfect when I return. Zero stress, maximum harvest.",
    name: "Emma Rodriguez",
    designation: "Marketing Consultant, Chicago",
    src: "/avatars/user3.png",
  },
  {
    quote: "I was spending $300/month on organic herbs. Now I grow better quality herbs for $15/month in my kitchen window. ROI in 3 weeks!",
    name: "David Kim",
    designation: "Chef, Los Angeles",
    src: "/avatars/user4.png",
  },
  {
    quote: "The winter lighting trick is pure genius. While my neighbors buy wilted $8 kale, I'm harvesting fresh greens in January from my apartment. Mind = blown.",
    name: "Lisa Morgan",
    designation: "Teacher, Minneapolis",
    src: "/avatars/user5.png",
  },
  {
    quote: "Day 1: Complete plant newbie. Week 6: Growing tomatoes in January in my closet. The emergency rescue protocol saved 5 plants I thought were dead.",
    name: "James Wilson",
    designation: "Accountant, Seattle",
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
            Why 200+ City Dwellers Trust Our System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Real results from real people who went from &quot;black thumb&quot; to growing their own food in tiny spaces.
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