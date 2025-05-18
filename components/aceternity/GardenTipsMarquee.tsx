"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const gardeningTips = [
  "Water deeply but less frequently to encourage strong roots 💧",
  "Plant native species to support local ecosystems 🌿",
  "Start small and expand your garden gradually 🌱",
  "Rotate crops annually to prevent soil depletion 🔄",
  "Use organic mulch to retain soil moisture 🍂",
  "Companion planting can reduce pest problems naturally 🐞",
  "Test your soil before adding amendments 🧪",
  "Save seeds from your best-performing plants 🌻",
  "Start a compost pile for free garden fertilizer ♻️",
  "Prune flowering plants after they bloom ✂️",
  "Choose the right plant for the right place 🌿",
  "Harvest herbs in the morning for best flavor 🌄",
  "Use natural pest deterrents like neem oil 🛡️",
  "Group plants with similar water needs together 💦",
];

export function GardenTipsMarquee() {
  return (
    <section className="py-4 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto mb-4">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-block text-primary font-medium px-4 py-2 bg-primary/10 rounded-full mb-2">
              Expert Knowledge
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Pro Gardening Tips
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Proven techniques and advice from our garden experts to help your plants thrive in any urban space.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Single, wider, and slower marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <Marquee 
          speed={25} 
          pauseOnHover={true} 
          size="xlarge" 
          skew={-1}
          direction="left"
          className="py-3"
        >
          {gardeningTips.map((tip, i) => (
            <motion.div
              key={i}
              className="mx-10 flex items-center rounded-2xl bg-white backdrop-blur-sm px-10 py-6 shadow-lg border-2 border-primary/20 transform hover:scale-105 transition-all duration-300 min-w-[450px]"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mr-6 flex-shrink-0">
                <span className="text-3xl">{tip.includes("💧") ? "💧" : tip.includes("🌿") ? "🌿" : tip.includes("🌱") ? "🌱" : "🌻"}</span>
              </div>
              <p className="text-xl font-medium text-gray-800 flex-1">{tip}</p>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
} 