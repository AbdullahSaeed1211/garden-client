"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  skew?: number;
  size?: "default" | "large" | "xlarge";
}

export function Marquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = false,
  className,
  skew = 0,
  size = "default"
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [duplicates, setDuplicates] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);

  // Calculate the duration based on content width and speed
  const getDuration = () => {
    if (!contentWidth) return 0;
    // Adjust speed factor to make it smoother
    return contentWidth / (speed * 0.1);
  };

  // Measure the container and content width
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.offsetWidth);

        // Calculate how many duplicates we need to fill the container
        // and ensure continuous flow (always at least 2)
        const newDuplicates = Math.max(2, Math.ceil((containerRef.current.offsetWidth * 2) / contentRef.current.offsetWidth));
        setDuplicates(newDuplicates);
        setIsInitialized(true);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  // Animation properties based on direction
  const getAnimationProps = () => {
    const distance = contentWidth;
    const initialX = direction === "left" ? 0 : -distance;
    const animateX = direction === "left" ? -distance : 0;

    return {
      initial: { x: initialX },
      animate: { x: animateX },
      transition: {
        duration: getDuration(),
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 0,
      },
    };
  };

  const animationControls = getAnimationProps();
  
  const sizeClasses = {
    default: "py-2",
    large: "py-6",
    xlarge: "py-10"
  };

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden whitespace-nowrap relative", sizeClasses[size], className)}
      style={skew ? { transform: `skewY(${skew}deg)` } : undefined}
    >
      {isInitialized && (
        <div className="flex">
          {/* Multiple duplicates create the continuous effect */}
          {Array.from({ length: duplicates }).map((_, i) => (
            <motion.div
              key={i}
              ref={i === 0 ? contentRef : undefined}
              className={cn(
                "flex whitespace-nowrap will-change-transform",
                pauseOnHover && "hover:[animation-play-state:paused]"
              )}
              {...animationControls}
            >
              {children}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
} 