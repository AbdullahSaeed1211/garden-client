"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Sproutly completely transformed my tiny balcony into a thriving garden space. The courses taught me exactly how to maximize every inch of space I have.",
    name: "Sarah Chen",
    title: "Urban Apartment Dweller",
  },
  {
    quote:
      "The herbs course was life-changing! I'm now growing all my cooking herbs at home, saving money and enjoying much fresher flavors in my dishes.",
    name: "Michael Rodriguez",
    title: "Home Chef Enthusiast",
  },
  {
    quote:
      "As a complete gardening novice, I was intimidated to start. Sproutly made it so approachable with step-by-step guidance that even I couldn't mess up!",
    name: "Emily Watson",
    title: "First-time Gardener",
  },
  {
    quote:
      "The vertical gardening techniques I learned helped me create a stunning living wall that's now the centerpiece of my home office.",
    name: "James Kim",
    title: "Design Enthusiast",
  },
  {
    quote:
      "What I love most about Sproutly is the community. Being able to share my progress and get feedback from fellow urban gardeners has been invaluable.",
    name: "Lisa Thompson",
    title: "Community Garden Organizer",
  },
]; 