"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbitProps {
  className?: string;
  speed?: number;
  size?: number;
  children?: React.ReactNode;
  color?: string;
  elements?: number;
  minSize?: number;
  maxSize?: number;
}

// Predefined positions for better SSR hydration
const predefinedElements = [
  { size: 25, delay: 0.2, duration: 15, opacity: 0.5, offsetX: 30, offsetY: 40 },
  { size: 35, delay: 0.5, duration: 18, opacity: 0.6, offsetX: -20, offsetY: -30 },
  { size: 20, delay: 0.8, duration: 20, opacity: 0.4, offsetX: 40, offsetY: -20 },
  { size: 40, delay: 1.2, duration: 22, opacity: 0.5, offsetX: -40, offsetY: 10 },
  { size: 30, delay: 1.5, duration: 25, opacity: 0.7, offsetX: 10, offsetY: 30 },
  { size: 22, delay: 0.4, duration: 19, opacity: 0.5, offsetX: -15, offsetY: -40 },
  { size: 28, delay: 0.9, duration: 21, opacity: 0.6, offsetX: 25, offsetY: 0 },
  { size: 32, delay: 1.3, duration: 23, opacity: 0.4, offsetX: 0, offsetY: -25 },
];

export function FloatingOrbit({
  className,
  speed = 20,
  size = 300,
  children,
  color = "primary",
  elements = 5,
  minSize = 16,
  maxSize = 48
}: FloatingOrbitProps) {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use the predefined elements array based on the elements prop
  const orbitElements = predefinedElements.slice(0, elements).map(element => {
    // Scale the predefined values to match the props
    const scaleFactor = size / 300;
    return {
      ...element,
      size: Math.min(Math.max(element.size * scaleFactor, minSize), maxSize),
      offsetX: element.offsetX * scaleFactor,
      offsetY: element.offsetY * scaleFactor,
      duration: element.duration * (speed / 20)
    };
  });
  
  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    pink: "bg-pink-500"
  };
  
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;
  
  return (
    <div 
      ref={orbitRef}
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      {mounted && orbitElements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${colorClass} filter blur-sm`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: element.opacity,
            scale: 1,
            x: [element.offsetX - 10, element.offsetX + 10, element.offsetX],
            y: [element.offsetY + 10, element.offsetY - 10, element.offsetY],
          }}
          transition={{
            delay: element.delay,
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: element.size,
            height: element.size,
            left: `calc(50% - ${element.size / 2}px)`,
            top: `calc(50% - ${element.size / 2}px)`,
          }}
        />
      ))}
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </div>
    </div>
  );
} 