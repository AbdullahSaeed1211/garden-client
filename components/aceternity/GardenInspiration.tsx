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
          <HerbIcon className="h-10 w-10 mb-2 text-white opacity-80" />
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
          <FlutteringLeafIcon className="h-10 w-10 mb-2 text-white opacity-80" />
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
          <CloverIcon className="h-10 w-10 mb-2 text-white opacity-80" />
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
        <MapleLeafIcon className="h-20 w-20 text-purple-800/70 group-hover:scale-110 transition-all duration-300" />
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
        <WaterDropIcon className="h-20 w-20 text-blue-800/70 group-hover:scale-110 transition-all duration-300" />
        <div className="mt-4 text-center">
          <span className="text-sm font-bold bg-blue-800/20 text-blue-800 px-3 py-1 rounded-full">Eco-Friendly</span>
        </div>
      </div>
    ),
    className: "h-[300px]",
  },
];

// Icons
function MapleLeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L9.5 4.5L12 7L14.5 4.5L12 2Z"/>
      <path d="M4.5 9.5L7 12L4.5 14.5L2 12L4.5 9.5Z"/>
      <path d="M19.5 9.5L17 12L19.5 14.5L22 12L19.5 9.5Z"/>
      <path d="M12 17L9.5 19.5L12 22L14.5 19.5L12 17Z"/>
      <path d="M12 7L7 12L12 17L17 12L12 7Z"/>
      <path d="M12 2L7 12L12 22L17 12L12 2Z"/>
    </svg>
  );
}

function CloverIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7C12 7 9.5 4.5 7 7S7 12 9.5 9.5 12 7 12 7z"/>
      <path d="M12 7C12 7 14.5 4.5 17 7s0 5-2.5 2.5S12 7 12 7z"/>
      <path d="M12 17C12 17 9.5 19.5 7 17s0-5 2.5-2.5 2.5 2.5 2.5 2.5z"/>
      <path d="M12 17c0 0 2.5 2.5 5 0s0-5-2.5-2.5-2.5 2.5-2.5 2.5z"/>
      <line x1="12" y1="7" x2="12" y2="17"/>
    </svg>
  );
}

function HerbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8 2 7 5 7 7c0 2 1 5 5 5s5-3 5-5c0-2-1-5-5-5z"/>
      <path d="M7 12c-2 0-3 1.5-3 3 0 1.5 1 3 3 3s3-1.5 3-3c0-1.5-1-3-3-3z"/>
      <path d="M17 12c-2 0-3 1.5-3 3 0 1.5 1 3 3 3s3-1.5 3-3c0-1.5-1-3-3-3z"/>
      <path d="M12 12v10"/>
      <path d="M7 15v7"/>
      <path d="M17 15v7"/>
    </svg>
  );
}

function FlutteringLeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3C4 7 4 13 8 18c4 5 10 5 14 1-4 0-8-2-10-5-2-3-2-7 0-10C14 1 17 0 21 0C17-1 12 0 8 3z"/>
      <path d="M12 19C8.5 17 6 14 5 10"/>
      <path d="M5 10C6 10.5 7 12 8 14.5"/>
    </svg>
  );
}

function WaterDropIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
} 