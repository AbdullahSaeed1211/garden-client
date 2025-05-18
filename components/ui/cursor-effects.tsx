"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorEffectsProps {
  color?: string;
  size?: number;
  trailCount?: number;
  trailOpacity?: number;
  visibleOnMobile?: boolean;
}

export function CursorEffects({
  color = "#4CAF50",
  size = 20,
  trailCount = 10,
  trailOpacity = 0.4,
  visibleOnMobile = false
}: CursorEffectsProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true until we can check
  const [trail, setTrail] = useState<Array<{ x: number, y: number, opacity: number }>>([]);
  
  // Check if mobile - only runs on client
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Update cursor position and trail
  useEffect(() => {
    if ((isMobile && !visibleOnMobile) || typeof window === 'undefined') return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      
      setTrail(prevTrail => {
        // Add current position to beginning of trail array
        const newTrail = [
          { x: e.clientX, y: e.clientY, opacity: trailOpacity },
          ...prevTrail.slice(0, trailCount - 1)
        ];
        
        // Gradually reduce opacity for older trail elements
        return newTrail.map((point, index) => ({
          ...point,
          opacity: trailOpacity * (1 - index / trailCount)
        }));
      });
    };
    
    const activateCursor = () => setIsActive(true);
    const deactivateCursor = () => {
      // Small delay to prevent flickering when cursor moves between elements
      setTimeout(() => setIsActive(false), 100);
    };
    
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', activateCursor);
    document.addEventListener('mouseleave', deactivateCursor);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', activateCursor);
      document.removeEventListener('mouseleave', deactivateCursor);
    };
  }, [isMobile, trailCount, trailOpacity, visibleOnMobile]);
  
  // Don't render on mobile unless specified
  if (isMobile && !visibleOnMobile) return null;
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main cursor */}
      {isActive && (
        <motion.div
          className="fixed rounded-full pointer-events-none mix-blend-screen"
          style={{
            width: size,
            height: size,
            top: position.y - size / 2,
            left: position.x - size / 2,
            backgroundColor: color,
            filter: 'blur(2px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 0.6,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Cursor trail - only show if active and not on touch devices */}
      {isActive && !('ontouchstart' in window) && trail.map((point, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none mix-blend-screen"
          style={{
            width: size * (1 - i * 0.08),
            height: size * (1 - i * 0.08),
            top: point.y - (size * (1 - i * 0.08)) / 2,
            left: point.x - (size * (1 - i * 0.08)) / 2,
            backgroundColor: color,
            opacity: point.opacity,
            filter: 'blur(3px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: point.opacity }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
} 