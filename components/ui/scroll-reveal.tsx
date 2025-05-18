"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "full" | "auto";
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  width = "full",
  direction = "up",
  duration = 0.5,
  delay = 0,
  once = true,
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Set initial animation states based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 40, opacity: 0 };
      case "down":
        return { y: -40, opacity: 0 };
      case "left":
        return { x: 40, opacity: 0 };
      case "right":
        return { x: -40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  // Set animation target states based on direction
  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimatePosition());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing
      }}
      style={{ width: width === "full" ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}; 