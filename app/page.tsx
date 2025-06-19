import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CourseSection from "@/components/sections/CourseSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
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
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Sproutly Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We&apos;re not just another gardening course. We&apos;re the proven system that turns complete beginners 
              into confident urban farmers in just 6 weeks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven System</h3>
              <p className="text-gray-600">200+ students successfully growing food in tiny spaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Results</h3>
              <p className="text-gray-600">Start harvesting fresh herbs and greens within 2-3 weeks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Money-Back Guarantee</h3>
              <p className="text-gray-600">If you don&apos;t save $200+ in groceries, we&apos;ll refund you</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Gardening Tips</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover expert advice and practical tips to help you grow a thriving urban garden.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Link href="/blog/10-best-plants-small-urban-spaces" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Plant Selection
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    10 Best Plants for Small Urban Spaces
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover low-maintenance plants perfect for apartments and balconies.
                  </p>
                  <span className="text-primary font-medium">Read more →</span>
                </div>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link href="/blog/container-gardening-complete-guide" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Container Gardening
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Container Gardening Complete Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about growing plants in containers.
                  </p>
                  <span className="text-primary font-medium">Read more →</span>
                </div>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <Link href="/blog/vertical-garden-design-ideas" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Vertical Gardening
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Vertical Garden Design Ideas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Creative solutions for maximizing growing space with vertical gardens.
                  </p>
                  <span className="text-primary font-medium">Read more →</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <div id="faq">
        <FAQSection />
      </div>
      <SignupSection />
      <CreativeFooter />
    </main>
  );
}
