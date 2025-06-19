"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FloatingOrbit } from "@/components/ui/floating-orbit";
import { CursorHighlight } from "@/components/ui/cursor-highlight";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for animation purposes
    setTimeout(() => setLoaded(true), 500);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-[90vh] pt-24 pb-12 px-4 overflow-hidden flex flex-col justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50/60 via-white to-white" />
      
      {/* Animated orbit elements */}
      <div className="absolute top-20 left-10 -z-10 opacity-80">
        <FloatingOrbit size={200} elements={6} color="green" />
      </div>
      <div className="absolute bottom-40 right-10 -z-10 opacity-70">
        <FloatingOrbit size={150} elements={4} color="amber" />
      </div>
      
      {/* Decorative plants */}
      <motion.div 
        className="absolute -bottom-20 -left-10 w-48 h-48 opacity-70 -z-10 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: loaded ? 0.7 : 0, y: loaded ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image 
          src="/plants/hero-leaf1.svg" 
          alt="Decorative plant" 
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      
      <motion.div 
        className="absolute top-10 right-0 w-40 h-40 opacity-60 -z-10 hidden md:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: loaded ? 0.6 : 0, y: loaded ? 0 : -50 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image 
          src="/plants/hero-leaf2.svg" 
          alt="Decorative leaf" 
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      
      {/* Floating leaves with parallax effect */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-32 h-32 opacity-70 -z-10 hidden sm:block"
        style={{ y }}
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: loaded ? 0.7 : 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Image 
          src="/plants/hero-leaf3.svg" 
          alt="Decorative leaf" 
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      
      {/* Main hero content */}
      <div 
        ref={containerRef}
        className="container mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-6 z-10"
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CursorHighlight className="rounded-3xl p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-6">
                <motion.span 
                  className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full w-fit"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  6-Week Online Course
                </motion.span>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Turn Your Tiny Space Into a<br />
                  <span className="text-primary relative inline-block">
                    <span className="relative z-10">Food-Growing Goldmine</span>
                    <motion.span 
                      className="absolute bottom-0 left-0 h-3 bg-green-200 w-full -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Get fresh herbs, vegetables, and greens from your balcony, windowsill, or closet in just 6 weeks — 
                  even if you&apos;ve killed every plant you&apos;ve ever touched.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link 
                    href="#signup" 
                    className={cn(
                      "relative overflow-hidden bg-primary text-primary-foreground font-medium",
                      "rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all transform hover:scale-105 flex items-center justify-center",
                      "group shadow-lg shadow-primary/20"
                    )}
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute top-0 left-0 w-full h-full bg-[url('/plants/hero-leaf1.svg')] bg-no-repeat bg-right-top opacity-10" />
                  </Link>
                  
                  <Link 
                    href="#course" 
                    className="border border-primary/30 bg-white/80 backdrop-blur-sm text-primary hover:bg-primary/5 font-medium rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all flex items-center justify-center shadow-md"
                  >
                    View Curriculum
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                        <Image 
                          src={`/avatars/user${i}.png`}
                          alt="Student" 
                          width={40} 
                          height={40} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-bold text-gray-800">200+ students</span> already enrolled
                  </div>
                </motion.div>
              </div>
            </CursorHighlight>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 relative"
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              
              {/* Creative split hero image */}
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-8 h-full relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Urban Garden" 
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="col-span-4 h-full relative">
                  <Image 
                    src="/urbgard.jpg" 
                    alt="Urban Garden Plants" 
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative borders */}
              <div className="absolute inset-0 border-[4px] sm:border-[8px] border-white rounded-[1.5rem] sm:rounded-[2.5rem] opacity-40 pointer-events-none z-20" />
              <div className="absolute inset-0 border border-primary/20 rounded-[1.5rem] sm:rounded-[2.5rem] opacity-80 pointer-events-none z-20" />
            </div>
            
            {/* Instructor badge */}
            <motion.div 
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white shadow-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 z-30 border border-gray-100"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden border-2 border-primary/20">
                  <Image 
                    src="/instructor.jpg" 
                    alt="Olivia" 
                    width={60} 
                    height={60} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-base sm:text-lg">Olivia</p>
                  <p className="text-xs sm:text-sm text-gray-500">Master Gardener</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 