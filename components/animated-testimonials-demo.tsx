"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I was always intimidated by gardening in my small apartment, but Sproutly's courses gave me the confidence to start. Now my balcony is thriving with herbs and vegetables!",
      name: "Sarah Chen",
      designation: "Urban Apartment Gardener",
      src: "/testimonial1.jpg",
    },
    {
      quote:
        "The container gardening course was exactly what I needed. I've transformed my patio into a productive garden space that also looks beautiful. Highly recommend!",
      name: "Michael Rodriguez",
      designation: "Container Garden Enthusiast",
      src: "/testimonial2.jpg",
    },
    {
      quote:
        "As someone with no prior gardening experience, I was amazed at how accessible Sproutly made everything. Their step-by-step guidance helped me avoid common mistakes.",
      name: "Emily Watson",
      designation: "First-time Gardener",
      src: "/testimonial3.jpg",
    },
    {
      quote:
        "The vertical gardening techniques I learned completely transformed my small outdoor space. Now I'm growing more in a 3x3 space than I ever thought possible!",
      name: "James Kim",
      designation: "Vertical Garden Specialist",
      src: "/testimonial4.jpg",
    },
    {
      quote:
        "The community aspect of Sproutly is what sets it apart. Being able to connect with fellow urban gardeners has provided ongoing support and inspiration.",
      name: "Lisa Thompson",
      designation: "Community Garden Organizer",
      src: "/instructor.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
} 