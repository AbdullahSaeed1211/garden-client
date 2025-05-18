"use client";

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

interface SignupFormProps {
  className?: string;
}

interface ConfettiOptions {
  spread: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

export default function SignupForm({ className }: SignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Check for reduced motion preference
  const prefersReducedMotion = useReducedMotion();
  
  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);
  
  // Animation variants with reduced motion support
  const formVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const successVariants = {
    hidden: { scale: prefersReducedMotion ? 1 : 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };
  
  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Show success state and trigger confetti
      setSuccess(true);
      
      // Only trigger confetti on non-touch devices and if reduced motion is not preferred
      if (!isTouchDevice && !prefersReducedMotion) {
        launchConfetti();
      }
      
      // Reset form
      setName('');
      setEmail('');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Confetti animation
  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107']
    };

    function fire(particleRatio: number, opts: ConfettiOptions) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };
  
  // Input animation variants - create empty variant for touch devices
  const inputAnimation: Variants = isTouchDevice 
    ? {} 
    : {
      focus: { scale: 1.02, boxShadow: "0 4px 20px rgba(120, 185, 120, 0.2)" },
      blur: { scale: 1, boxShadow: "none" },
    };
  
  // Button hover animation variants - create empty variant for touch devices
  const buttonAnimation: Variants = isTouchDevice 
    ? {} 
    : {
      hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(120, 185, 120, 0.4)" },
      tap: { scale: 0.95 },
    };
  
  return (
    <div className={cn("w-full max-w-md mx-auto rounded-2xl overflow-hidden", className)}>
      {!success ? (
        <motion.form 
          onSubmit={handleSubmit}
          className="p-4 sm:p-8 bg-white/90 backdrop-blur-lg border border-primary/20 rounded-2xl shadow-xl"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center"
            variants={itemVariants}
          >
            Join Our Garden Community
          </motion.h3>
          
          <div className="space-y-4 sm:space-y-5">
            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                Your Name
              </label>
              <motion.input
                whileFocus={!isTouchDevice ? "focus" : undefined}
                animate={!isTouchDevice ? "blur" : undefined}
                variants={inputAnimation}
                type="text"
                id="name"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <motion.input
                whileFocus={!isTouchDevice ? "focus" : undefined}
                animate={!isTouchDevice ? "blur" : undefined}
                variants={inputAnimation}
                type="email"
                id="email"
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            
            {error && (
              <motion.div 
                className="p-3 text-sm rounded-lg bg-red-50 text-red-600 border border-red-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}
            
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all relative overflow-hidden group disabled:opacity-70"
                whileHover={!isTouchDevice ? "hover" : undefined}
                whileTap={!isTouchDevice ? "tap" : undefined}
                variants={buttonAnimation}
              >
                <span className="relative z-10">
                  {loading ? 'Signing Up...' : 'Enroll in Course'}
                </span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 bg-[url('/leaf1.png')] bg-no-repeat bg-right-top opacity-0 group-hover:opacity-10 transition-opacity" />
                </span>
              </motion.button>
            </motion.div>
            
            <motion.p 
              className="text-xs text-gray-500 text-center mt-4"
              variants={itemVariants}
            >
              By signing up, you&apos;ll receive course updates and gardening tips. 
              We respect your privacy.
            </motion.p>
          </div>
        </motion.form>
      ) : (
        <motion.div
          className="p-4 sm:p-8 bg-white/90 backdrop-blur-lg border border-green-200 rounded-2xl shadow-xl text-center"
          variants={successVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">You&apos;re In!</h3>
          <p className="text-gray-600 mb-6">
            Thanks for signing up! Check your email for confirmation and course details.
          </p>
          <motion.button
            onClick={() => setSuccess(false)}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
            whileHover={!isTouchDevice ? { scale: 1.05 } : undefined}
            whileTap={!isTouchDevice ? { scale: 0.95 } : undefined}
          >
            Sign up another person
          </motion.button>
        </motion.div>
      )}
    </div>
  );
} 