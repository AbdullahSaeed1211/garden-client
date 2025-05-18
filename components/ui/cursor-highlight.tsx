"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface CursorHighlightProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  disable?: boolean;
}

export function CursorHighlight({ 
  children, 
  className, 
  color = "rgba(120, 185, 120, 0.15)", 
  size = 300,
  blur = 60,
  disable = false
}: CursorHighlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (disable) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const activateCursor = () => setIsActive(true);
    const deactivateCursor = () => setIsActive(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', activateCursor);
    window.addEventListener('mouseleave', deactivateCursor);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', activateCursor);
      window.removeEventListener('mouseleave', deactivateCursor);
    };
  }, [disable]);
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!disable && isActive && (
        <motion.div 
          className="pointer-events-none absolute -inset-px z-0 opacity-0"
          style={{
            opacity: isActive ? 1 : 0,
            background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent ${blur}%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 