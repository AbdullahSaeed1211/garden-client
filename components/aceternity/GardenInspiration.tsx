"use client";

import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function GardenInspiration() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

interface BentoItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const items: BentoItem[] = [
  {
    title: "Urban Herb Gardens",
    description: "Transform small kitchen spaces into flourishing herb gardens that enhance your cooking.",
    header: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-green-500/20 to-green-800/30 rounded-xl overflow-hidden relative group">
        <Image
          src="/hero-garden-3.jpg"
          width={800}
          height={600}
          alt="Herb Garden"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <Image 
            src="/plants/colorful-herb.svg" 
            width={60} 
            height={60} 
            alt="Herb" 
            className="mb-2 drop-shadow-lg" 
          />
        </div>
      </div>
    ),
    className: "md:col-span-2 h-[300px]",
  },
  {
    title: "Vertical Growing",
    description: "Maximize your space by growing upward with vertical garden solutions.",
    header: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500/20 to-blue-800/30 rounded-xl overflow-hidden relative group">
        <Image
          src="/project-vertical.jpg"
          width={600}
          height={800}
          alt="Vertical Garden"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <Image 
            src="/plants/leaf-colorful.svg" 
            width={60} 
            height={60} 
            alt="Leaf" 
            className="mb-2 drop-shadow-lg" 
          />
        </div>
      </div>
    ),
    className: "md:row-span-2 h-[640px]",
  },
  {
    title: "Container Gardening",
    description: "Perfect for balconies and patios, learn container gardening techniques for successful growth.",
    header: (
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-yellow-500/20 to-amber-800/30 rounded-xl overflow-hidden relative group">
        <Image
          src="/project-containers.jpg"
          width={800}
          height={600}
          alt="Container Garden"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <Image 
            src="/plants/clover-colorful.svg" 
            width={60} 
            height={60} 
            alt="Clover" 
            className="mb-2 drop-shadow-lg" 
          />
        </div>
      </div>
    ),
    className: "md:col-span-2 h-[300px]",
  },
  {
    title: "Seasonal Planning",
    description: "Plan your garden through all four seasons with our comprehensive calendar guides.",
    header: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-purple-500/20 to-purple-800/30 rounded-xl p-6 group">
        <Image 
          src="/plants/maple-leaf-colorful.svg" 
          width={90} 
          height={90} 
          alt="Maple Leaf" 
          className="mb-2 drop-shadow-lg transition-all duration-300 group-hover:scale-110" 
        />
        <div className="mt-4 text-center">
          <span className="text-sm font-bold bg-purple-800/20 text-purple-800 px-3 py-1 rounded-full">All Seasons</span>
        </div>
      </div>
    ),
    className: "h-[300px]",
  },
  {
    title: "Water Conservation",
    description: "Eco-friendly watering techniques to maintain a beautiful garden while saving water.",
    header: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-blue-500/20 to-blue-800/30 rounded-xl p-6 group">
        <Image 
          src="/plants/water-drop-colorful.svg" 
          width={90} 
          height={90} 
          alt="Water Drop" 
          className="mb-2 drop-shadow-lg transition-all duration-300 group-hover:scale-110" 
        />
        <div className="mt-4 text-center">
          <span className="text-sm font-bold bg-blue-800/20 text-blue-800 px-3 py-1 rounded-full">Eco-Friendly</span>
        </div>
      </div>
    ),
    className: "h-[300px]",
  },
];

// We're removing these SVG icon functions since we're now using the colorful SVG images directly 