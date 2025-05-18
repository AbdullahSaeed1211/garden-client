import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CourseSection from "@/components/sections/CourseSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SignupSection from "@/components/sections/SignupSection";
import { GardenInspiration } from "@/components/aceternity/GardenInspiration";
import { GardenTipsMarquee } from "@/components/aceternity/GardenTipsMarquee";
import { AnimatedFeatures } from "@/components/aceternity/AnimatedFeatures";
import { FeaturedCourse } from "@/components/aceternity/FeaturedCourse";
import { TitledMarquee } from "@/components/aceternity/TitledMarquee";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import CreativeFooter from "@/components/CreativeFooter";

// Garden tips for the static cards
const staticGardeningTips = [
  {
    title: "Water deeply but infrequently",
    description: "to encourage root growth and drought tolerance.",
    category: "Watering Wisdom",
    tag: "Essential Garden Tip"
  },
  {
    title: "Use companion planting",
    description: "to naturally deter pests and maximize space in small gardens.",
    category: "Smart Planting",
    tag: "Space Optimization"
  },
  {
    title: "Add compost regularly",
    description: "to improve soil structure and provide nutrients for your plants.",
    category: "Soil Health",
    tag: "Organic Gardening"
  }
];

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AnimatedFeatures />
      <CourseSection />
      <GardenInspiration />
      <TitledMarquee 
        title="Learn, Grow, Thrive" 
        items={["Urban Gardening", "Herb Gardens", "Vertical Growing", "Container Gardens", "Balcony Gardening", "Indoor Plants", "Community Gardens", "Organic Produce"]} 
      />
      <GridPattern className="absolute inset-0 -z-10" />
      <ProjectsSection />
      <FeaturedCourse />
      <div className="relative">
        <GardenTipsMarquee />
        
        {/* Static Gardening Tips Cards Section */}
        <section className="py-10 px-4 relative z-10 bg-white -mt-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staticGardeningTips.slice(0, 3).map((tip, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <span className="text-primary text-2xl">
                          {i === 0 ? "💧" : i === 1 ? "🌿" : "♻️"}
                        </span>
                      </div>
                      <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {tip.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                    <div className="mt-6 pt-4 border-t border-green-100">
                      <span className="text-xs text-gray-500 font-medium">{tip.tag}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <TestimonialsSection />
      <SignupSection />
      <CreativeFooter />
    </main>
  );
}
