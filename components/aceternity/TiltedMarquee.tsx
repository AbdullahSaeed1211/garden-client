"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

interface TiltedMarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
  bgColor?: string;
  textColor?: string;
  direction?: "left" | "right";
  skewAngle?: number;
  size?: "default" | "large" | "xlarge";
}

export function TiltedMarquee({
  items,
  className = "",
  speed = 40,
  bgColor = "from-primary/80 to-primary/50",
  textColor = "text-primary-foreground",
  direction = "left",
  skewAngle = -5,
  size = "large"
}: TiltedMarqueeProps) {
  return (
    <div className={cn("relative w-full py-16 overflow-hidden", className)}>
      {/* Skewed container */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${bgColor} -z-10`} 
        style={{ transform: `skewY(${skewAngle}deg)` }}
      ></div>
      
      {/* Marquee content - not skewed */}
      <div className="container mx-auto px-4 py-6">
        <Marquee speed={speed} direction={direction} pauseOnHover={true} size={size}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`mx-10 px-12 py-6 rounded-full bg-white/15 backdrop-blur-sm ${textColor} font-bold text-2xl md:text-3xl tracking-wide hover:bg-white/25 transition-all duration-300 shadow-lg transform hover:scale-105`}
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
} 