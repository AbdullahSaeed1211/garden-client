import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import CreativeFooter from '@/components/CreativeFooter';

export const metadata: Metadata = {
  title: '10 Best Plants for Small Urban Spaces | Container Gardening Guide | Sproutly',
  description: 'Discover the top 10 plants perfect for small urban spaces. These easy-to-grow varieties thrive in containers, balconies, and tiny gardens with maximum harvests.',
  keywords: '10 best plants urban spaces, small space gardening plants, container gardening plants, urban gardening, apartment plants, balcony garden plants',
  alternates: {
    canonical: '/blog/10-best-plants-small-urban-spaces',
  },
  openGraph: {
    title: '10 Best Plants for Small Urban Spaces',
    description: 'Perfect plants for tiny gardens and container growing',
    type: 'article',
    publishedTime: '2024-01-18T10:00:00.000Z',
    authors: ['Olivia Green'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Best Plants for Small Urban Spaces | Sproutly',
    description: 'Discover the best low-maintenance plants perfect for apartments, balconies, and small urban spaces.',
    images: ['/hero-garden-2.jpg'],
  },
};

const plants = [
  {
    name: "Cherry Tomatoes",
    space: "1-2 sq ft",
    harvestTime: "60-80 days",
    difficulty: "Easy",
    yield: "2-4 lbs per plant",
    container: "5-7 gallon pot",
    icon: "🍅"
  },
  {
    name: "Lettuce & Leafy Greens",
    space: "0.5-1 sq ft",
    harvestTime: "30-45 days",
    difficulty: "Very Easy",
    yield: "4-6 oz per plant",
    container: "6-8 inch deep",
    icon: "🥬"
  },
  {
    name: "Herbs (Basil, Cilantro)",
    space: "0.25-0.5 sq ft",
    harvestTime: "20-40 days",
    difficulty: "Easy",
    yield: "Continuous harvest",
    container: "4-6 inch pot",
    icon: "🌿"
  },
  {
    name: "Radishes",
    space: "0.1 sq ft",
    harvestTime: "25-30 days",
    difficulty: "Very Easy",
    yield: "1-2 oz per plant",
    container: "6-8 inch deep",
    icon: "🥕"
  },
  {
    name: "Bush Beans",
    space: "0.5 sq ft",
    harvestTime: "50-60 days",
    difficulty: "Easy",
    yield: "0.5-1 lb per plant",
    container: "8-12 inch deep",
    icon: "🫘"
  },
  {
    name: "Strawberries",
    space: "0.5-1 sq ft",
    harvestTime: "60-90 days",
    difficulty: "Medium",
    yield: "0.5-1 lb per plant",
    container: "6-8 inch hanging",
    icon: "🍓"
  },
  {
    name: "Peppers",
    space: "1-2 sq ft",
    harvestTime: "70-90 days",
    difficulty: "Medium",
    yield: "1-2 lbs per plant",
    container: "3-5 gallon pot",
    icon: "🌶️"
  },
  {
    name: "Green Onions",
    space: "0.1 sq ft",
    harvestTime: "21-30 days",
    difficulty: "Very Easy",
    yield: "Continuous harvest",
    container: "4-6 inch deep",
    icon: "🧅"
  },
  {
    name: "Carrots (Mini)",
    space: "0.25 sq ft",
    harvestTime: "60-70 days",
    difficulty: "Easy",
    yield: "1-2 oz per plant",
    container: "8-10 inch deep",
    icon: "🥕"
  },
  {
    name: "Microgreens",
    space: "0.1 sq ft",
    harvestTime: "7-14 days",
    difficulty: "Very Easy",
    yield: "1-2 oz per tray",
    container: "Shallow tray",
    icon: "🌱"
  }
];

export default function BestPlantsPage() {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Best Plants for Small Urban Spaces",
    "description": "Discover the best low-maintenance plants perfect for apartments, balconies, and small urban spaces. Expert tips for beginner urban gardeners.",
    "image": "https://sproutly.site/hero-garden-2.jpg",
    "author": {
      "@type": "Person",
      "name": "Olivia Green"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sproutly",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sproutly.site/logo.svg"
      }
    },
    "datePublished": "2024-01-15T10:00:00.000Z",
    "dateModified": "2024-01-15T10:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sproutly.site/blog/10-best-plants-small-urban-spaces"
    }
  };

  return (
    <main className="min-h-screen relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb 
              items={[
                { label: 'Blog', href: '/blog' },
                { label: '10 Best Plants for Small Urban Spaces' }
              ]}
              className="mb-8 justify-center"
            />
            
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Plant Selection Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              10 Best Plants for Small Urban Spaces
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Perfect plants that thrive in containers, balconies, and tiny gardens with maximum harvests from minimum space
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10">
                  <Image 
                    src="/instructor.jpg" 
                    alt="Olivia Green"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">By Olivia Green</span>
              </div>
              <span>•</span>
              <time dateTime="2024-01-18">January 18, 2024</time>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>🌿</span>
                <span className="font-medium">Plant Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-green-50 border-y border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Plant Selection Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Fastest Growing</h3>
                <p className="text-gray-600 text-sm">Microgreens (7-14 days), Radishes (25-30 days), Green onions (21-30 days)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-lg mb-2">Highest Yields</h3>
                <p className="text-gray-600 text-sm">Cherry tomatoes (2-4 lbs), Peppers (1-2 lbs), Bush beans (0.5-1 lb)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-lg mb-2">Easiest for Beginners</h3>
                <p className="text-gray-600 text-sm">Lettuce, Radishes, Microgreens, Green onions, Herbs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-xl max-w-none mb-16">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-100">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Why These Plants Are Perfect for Urban Spaces</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  After helping hundreds of urban dwellers start their container gardens, I&apos;ve identified the plants that consistently deliver the best results in small spaces. These 10 varieties are chosen for their compact growth habits, high yields, and forgiving nature for beginners.
                </p>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-xl mb-3">What Makes These Plants Special:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Thrive in containers 5 gallons or smaller</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Produce significant yields in small spaces</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Tolerate partial shade conditions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Perfect for beginners and experts alike</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plant Cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">The Top 10 Urban Garden Champions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plants.map((plant, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                          {plant.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{plant.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="bg-white/20 px-2 py-1 rounded text-sm">{plant.difficulty}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-600 text-sm mb-1">Space Needed</h4>
                          <p className="font-bold text-gray-900">{plant.space}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-600 text-sm mb-1">Harvest Time</h4>
                          <p className="font-bold text-gray-900">{plant.harvestTime}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-600 text-sm mb-1">Expected Yield</h4>
                          <p className="font-bold text-gray-900">{plant.yield}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-600 text-sm mb-1">Container Size</h4>
                          <p className="font-bold text-gray-900">{plant.container}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-gray-700">
                          {index === 0 && "Choose determinate varieties for containers. Support with tomato cages for best yields."}
                          {index === 1 && "Plant every 2 weeks for continuous harvests. Cut outer leaves, keep center growing."}
                          {index === 2 && "Pinch flowers to encourage leaf growth. Harvest frequently for tender leaves."}
                          {index === 3 && "Perfect for succession planting. Sow new seeds every week for constant supply."}
                          {index === 4 && "Bush varieties don't need support. Plant 4-6 seeds per container for best results."}
                          {index === 5 && "Hanging baskets work great. Remove runners to focus energy on fruit production."}
                          {index === 6 && "Start from transplants for faster results. Provide afternoon shade in hot climates."}
                          {index === 7 && "Regrow from kitchen scraps! Place root ends in water to restart growth."}
                          {index === 8 && "Choose short varieties like Paris Market. Deep containers prevent forking."}
                          {index === 9 && "Harvest when 1-2 inches tall. One seeding provides 2-3 harvests."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 30-Day Quick Start Plan */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
                  <h2 className="text-3xl font-bold mb-4">30-Day Quick Start Plan</h2>
                  <p className="text-blue-100 text-lg">
                    Follow this proven timeline to have fresh food growing within a month
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-8">
                    {[
                      {
                        week: "Week 1",
                        title: "Planning & Setup",
                        color: "bg-green-50 border-green-200",
                        tasks: [
                          "Choose 3-5 containers (start small!)",
                          "Purchase quality potting mix",
                          "Select 2-3 fast-growing plants (lettuce, radishes, herbs)",
                          "Set up your growing space"
                        ]
                      },
                      {
                        week: "Week 2", 
                        title: "First Planting",
                        color: "bg-blue-50 border-blue-200",
                        tasks: [
                          "Plant your first containers",
                          "Start microgreens for 7-day harvest",
                          "Set up watering routine",
                          "Begin daily observation habit"
                        ]
                      },
                      {
                        week: "Week 3",
                        title: "Expansion & Care",
                        color: "bg-purple-50 border-purple-200",
                        tasks: [
                          "Plant second round of quick crops",
                          "Add slow-growing plants (tomatoes, peppers)",
                          "First microgreen harvest!",
                          "Monitor and adjust watering"
                        ]
                      },
                      {
                        week: "Week 4",
                        title: "First Harvests",
                        color: "bg-orange-50 border-orange-200",
                        tasks: [
                          "Harvest radishes and baby greens",
                          "Start succession planting",
                          "Plan next month's expansion",
                          "Celebrate your success! 🎉"
                        ]
                      }
                    ].map((phase, index) => (
                      <div key={index} className={`border ${phase.color} rounded-xl p-6`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{phase.week}: {phase.title}</h3>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Space Optimization Tips */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Maximize Your Small Space</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">🏗️</span>
                    Vertical Growing Strategies
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Stack containers with the heaviest at bottom
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Use hanging baskets for trailing plants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Install wall-mounted planters for herbs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Create tiered shelving systems
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">📏</span>
                    Container Combinations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Plant lettuce around tomato bases
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Grow herbs in strawberry tower pockets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Interplant radishes with slower crops
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Use windowsill space for microgreens
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ROI Calculation */}
            <div className="bg-gradient-to-br from-primary/10 to-green-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Your Garden Investment Returns</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50-100</div>
                  <h3 className="font-bold mb-2">Initial Investment</h3>
                  <p className="text-gray-600 text-sm">Containers, soil, seeds, basic tools</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$200-400</div>
                  <h3 className="font-bold mb-2">Annual Harvest Value</h3>
                  <p className="text-gray-600 text-sm">Fresh organic produce at grocery prices</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">300-400%</div>
                  <h3 className="font-bold mb-2">Return on Investment</h3>
                  <p className="text-gray-600 text-sm">Plus health benefits and satisfaction!</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Urban Garden?</h2>
              <p className="text-xl mb-6 text-green-100">
                These 10 plants are your gateway to fresh, homegrown food in any small space. Start with just 2-3 varieties and expand as you gain confidence.
              </p>
              <Link 
                href="/courses/container-gardening" 
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Complete Growing Guide
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Continue Your Learning Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/container-gardening-complete-guide" 
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-primary/80">
                    Container Gardening Complete Guide
                  </h3>
                  <p className="text-gray-600">Master the fundamentals of growing in containers</p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                <Link 
                  href="/blog/urban-gardening-tools-beginners" 
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-primary/80">
                    Essential Urban Gardening Tools
                  </h3>
                  <p className="text-gray-600">Everything you need to start your urban garden</p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CreativeFooter />
    </main>
  );
} 