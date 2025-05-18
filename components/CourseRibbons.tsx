"use client";

import React from "react";
import { CrossingMarquee } from "@/components/ui/crossing-marquee";

export default function CourseRibbons() {
  return (
    <div className="relative py-16 overflow-hidden h-[400px] md:h-[500px]">
      {/* Course ribbons that cross each other */}
      <CrossingMarquee 
        ribbons={[
          {
            text: "6 Weeks Duration ✦ Starts May 1, 2025 ✦ Learn at Your Own Pace ✦ Expert Instructor",
            color: "#16a34a", // Green (primary color)
            angle: -3,
            speed: 25, // Slower speed
            reverse: false,
            thickness: "120px" // Thicker ribbon
          },
          {
            text: "Lifetime Access ✦ 24/7 Support ✦ Community Garden Forum ✦ Live Q&A Sessions",
            color: "#0d9488", // Teal (accent color variant)
            angle: 1,
            speed: 30, // Slower speed
            reverse: true,
            thickness: "120px" // Thicker ribbon
          },
          {
            text: "Urban Gardening ✦ Container Plants ✦ Vertical Gardens ✦ Herb Growing ✦ Composting",
            color: "#16a34a", // Green (primary color)
            angle: -6, 
            speed: 28, // Slower speed
            reverse: false,
            thickness: "120px" // Thicker ribbon
          },
          {
            text: "Beginner Friendly ✦ Hands-on Projects ✦ Gardening Community ✦ Seasonal Guides",
            color: "#0d9488", // Teal (accent color variant)
            angle: 2,
            speed: 26, // Slower speed
            reverse: true,
            thickness: "120px" // Thicker ribbon
          },
        ]}
      />
    </div>
  );
} 