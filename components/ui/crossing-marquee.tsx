"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CrossingMarqueeProps {
  ribbons: {
    text: string;
    color: string;
    angle: number;
    speed: number;
    reverse?: boolean;
    thickness?: string;
  }[];
  className?: string;
}

export function CrossingMarquee({ ribbons, className }: CrossingMarqueeProps) {
  return (
    <div className={cn("relative flex flex-col items-center justify-center py-16 overflow-hidden", className)}>
      {ribbons.map((ribbon, index) => (
        <motion.div
          key={index}
          className="absolute w-[200%] left-[-50%] whitespace-nowrap flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: ribbon.color,
            transform: `rotate(${ribbon.angle}deg)`,
            zIndex: 10 + index,
            top: `${25 + (index * 25)}%`,
            opacity: 0.9,
            height: ribbon.thickness || "80px",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
          initial={{ x: ribbon.reverse ? "50%" : "-50%" }}
          animate={{ x: ribbon.reverse ? "-50%" : "50%" }}
          transition={{
            duration: ribbon.speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <div className="flex items-center justify-center space-x-4 px-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <span className="text-white font-bold text-lg md:text-2xl whitespace-nowrap">
                  {ribbon.text}
                </span>
                <span className="text-white">★</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 