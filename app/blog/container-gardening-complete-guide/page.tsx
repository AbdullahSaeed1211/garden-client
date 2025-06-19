import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import CreativeFooter from '@/components/CreativeFooter';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Container Gardening Complete Guide | Growing Food in Pots | Sproutly',
  description: 'Master container gardening with our complete guide. Learn container selection, soil preparation, planting techniques, and maintenance for maximum harvests.',
  keywords: 'container gardening, pot gardening, urban gardening, patio gardening, small space gardening, apartment gardening',
  openGraph: {
    title: 'Container Gardening Complete Guide',
    description: 'Everything you need to know about growing food in containers',
    type: 'article',
    publishedTime: '2024-01-20T10:00:00.000Z',
    authors: ['Olivia Green'],
  },
};

export default function ContainerGardeningPage() {
  return (
    <main className="min-h-screen relative bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb 
              items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Container Gardening Complete Guide' }
              ]}
              className="mb-8 justify-center"
            />
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Complete Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Container Gardening Complete Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              From beginner to expert: Master the art of growing abundant food in any space with our comprehensive container gardening system
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
              <time dateTime="2024-01-20">January 20, 2024</time>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>⭐</span>
                <span className="font-medium">Expert Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What You&apos;ll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Container Selection & Setup",
                "Soil & Nutrition Mastery", 
                "Planting Techniques",
                "Watering & Irrigation",
                "Problem Solving",
                "Seasonal Management"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
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
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Container Gardening is Perfect for Urban Dwellers</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After teaching container gardening to hundreds of urban dwellers, I&apos;ve seen firsthand how this 
                  method can transform anyone into a successful food grower, regardless of their space limitations 
                  or experience level.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: "📏", title: "Space Efficiency", desc: "Grow 10x more food per square foot than traditional gardens" },
                  { icon: "🎯", title: "Complete Control", desc: "Perfect soil, drainage, and pest management" },
                  { icon: "🚀", title: "Mobility", desc: "Move plants to optimize light and protect from weather" },
                  { icon: "🌡️", title: "Season Extension", desc: "Bring tender plants indoors during winter" },
                  { icon: "🚫", title: "No Weeding", desc: "Save hours of maintenance time" },
                  { icon: "📈", title: "Better Yields", desc: "Focused nutrition and care leads to healthier plants" }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl">{advantage.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Container Selection Section */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
                  <h2 className="text-3xl font-bold mb-4">Container Selection: The Foundation of Success</h2>
                  <p className="text-blue-100 text-lg">
                    Choosing the right container is arguably the most important decision you&apos;ll make. The wrong 
                    container can doom even the healthiest plants to failure.
                  </p>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Size Guidelines by Plant Type</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <span>📏</span> Quick Reference Container Sizes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { plant: "Herbs", size: "6-8 inch pots (1-2 gallons)" },
                        { plant: "Lettuce/Greens", size: "6-8 inches deep, any width" },
                        { plant: "Radishes/Carrots", size: "8-12 inches deep" },
                        { plant: "Tomatoes", size: "5-7 gallon containers minimum" },
                        { plant: "Peppers", size: "3-5 gallon containers" },
                        { plant: "Beans/Peas", size: "2-3 gallons, 12+ inches deep" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-semibold text-blue-800">{item.plant}:</span>
                          <span className="text-blue-700">{item.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-6">Material Comparison</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Plastic Containers",
                        pros: "Lightweight, retain moisture well, affordable, durable",
                        cons: "Can overheat in sun, may contain chemicals",
                        bestFor: "Beginners, frequently moved plants, budget gardens",
                        color: "green"
                      },
                      {
                        title: "Terra Cotta/Clay", 
                        pros: "Breathable, natural temperature regulation, attractive",
                        cons: "Heavy, break easily, dry out quickly",
                        bestFor: "Herbs, Mediterranean plants, permanent locations",
                        color: "orange"
                      },
                      {
                        title: "Fabric Pots",
                        pros: "Excellent drainage, root pruning, collapsible storage", 
                        cons: "Dry out quickly, shorter lifespan",
                        bestFor: "Root vegetables, temporary gardens, indoor growing",
                        color: "purple"
                      },
                      {
                        title: "Wood Planters",
                        pros: "Insulates roots, attractive, customizable size",
                        cons: "Eventually rots, heavy, expensive", 
                        bestFor: "Permanent installations, large plants, aesthetic gardens",
                        color: "amber"
                      }
                                         ].map((material, index) => {
                       const colorClasses: Record<string, string> = {
                         green: "border-green-400 bg-green-50",
                         orange: "border-orange-400 bg-orange-50", 
                         purple: "border-purple-400 bg-purple-50",
                         amber: "border-amber-400 bg-amber-50"
                       };
                       return (
                         <div key={index} className={`border-l-4 ${colorClasses[material.color]} p-6 rounded-r-xl`}>
                           <h4 className="font-bold text-lg mb-4">{material.title}</h4>
                           <div className="space-y-3 text-sm">
                             <div>
                               <span className="font-semibold text-green-700">Pros: </span>
                               <span className="text-gray-700">{material.pros}</span>
                             </div>
                             <div>
                               <span className="font-semibold text-red-700">Cons: </span>
                               <span className="text-gray-700">{material.cons}</span>
                             </div>
                             <div>
                               <span className="font-semibold text-blue-700">Best for: </span>
                               <span className="text-gray-700">{material.bestFor}</span>
                             </div>
                           </div>
                         </div>
                       );
                     })}
                  </div>
                </div>
              </div>
            </div>

            {/* Soil Section */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
                  <h2 className="text-3xl font-bold mb-4">Soil: The Secret to Container Success</h2>
                  <p className="text-green-100 text-lg">
                    Regular garden soil is death to container plants. It&apos;s too heavy, doesn&apos;t drain well, 
                    and compacts easily. Here&apos;s what to use instead.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <span>🌱</span> Olivia&apos;s Ultimate Container Mix
                    </h4>
                    <p className="text-green-700 mb-4">This recipe has produced record yields for my students:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      {[
                        "40% high-quality compost",
                        "30% coconut coir or peat moss", 
                        "20% perlite",
                        "10% vermiculite",
                        "1 cup kelp meal per 5 gallons",
                        "½ cup rock dust per 5 gallons"
                      ].map((ingredient, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg text-sm font-medium text-green-800">
                          {ingredient}
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold">💰 Cost: About 60% of premium store-bought mixes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue with remaining sections in similar styling pattern... */}
            <div className="prose prose-lg max-w-none">
              {/* Rest of the content with improved styling */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Planting Techniques for Maximum Success</h2>
                
                <h3 className="text-2xl font-bold mb-4">Spacing Rules That Actually Work</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Forget what the seed packet says - container spacing is different because of the controlled 
                  environment and superior soil.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-4">Intensive Spacing Guidelines</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { crop: "Lettuce", spacing: "4 inches apart (vs. 6-8 in ground)" },
                      { crop: "Carrots", spacing: "2 inches apart (vs. 3 in ground)" },
                      { crop: "Radishes", spacing: "1 inch apart (vs. 2 in ground)" },
                      { crop: "Bush beans", spacing: "4 inches apart (vs. 6 in ground)" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-semibold text-yellow-800">{item.crop}:</span>
                        <span className="text-yellow-700">{item.spacing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Succession Planting Strategy</h3>
                <p className="text-lg text-gray-700 mb-4">Keep harvests coming with this proven schedule:</p>
                                 <div className="space-y-4 mb-8">
                   {[
                     { period: "Fast crops (14-30 days)", schedule: "Plant every 2 weeks", bgClass: "bg-green-50", borderClass: "border-green-200", iconClass: "bg-green-500" },
                     { period: "Medium crops (30-60 days)", schedule: "Plant every 3-4 weeks", bgClass: "bg-blue-50", borderClass: "border-blue-200", iconClass: "bg-blue-500" },
                     { period: "Long crops (60+ days)", schedule: "Plant 2-3 times per season", bgClass: "bg-purple-50", borderClass: "border-purple-200", iconClass: "bg-purple-500" }
                   ].map((item, index) => (
                     <div key={index} className={`${item.bgClass} border ${item.borderClass} rounded-lg p-4`}>
                       <div className="flex items-center gap-4">
                         <div className={`w-8 h-8 ${item.iconClass} text-white rounded-full flex items-center justify-center font-bold`}>
                           {index + 1}
                         </div>
                         <div>
                           <span className="font-bold text-gray-900">{item.period}: </span>
                           <span className="text-gray-700">{item.schedule}</span>
                         </div>
                       </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Action Plan Section */}
              <div className="bg-gradient-to-br from-primary/10 to-green-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Your Container Garden Action Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                      Week 1: Planning and Setup
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Assess your space and light conditions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Choose 3-5 containers to start
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Purchase quality potting mix
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Select easy-to-grow crops (lettuce, herbs, radishes)
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                      Week 2: Planting and Systems
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Plant your first containers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Set up watering schedule
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Install any support structures
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Begin daily observation routine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Container Garden?</h2>
                <p className="text-xl mb-6 text-green-100">
                  Container gardening is the fastest way to start growing your own food, regardless of your space 
                  or experience level. With the techniques in this guide, you&apos;ll be harvesting fresh food within 
                  weeks and saving hundreds of dollars on groceries within your first year.
                </p>
                <Link 
                  href="/courses/container-gardening" 
                  className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Our Container Gardening Course
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Pro Tip */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌱</span> Pro Tip
                </h3>
                <p className="text-green-700">
                  Start small and master the basics before expanding. It&apos;s better to have 5 thriving containers 
                  than 20 struggling ones. Focus on consistent watering and feeding first - everything else 
                  builds from there.
                </p>
              </div>

              {/* Related Articles */}
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Continue Your Learning Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link 
                    href="/blog/10-best-plants-small-urban-spaces" 
                    className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
                  >
                    <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-primary/80">
                      10 Best Plants for Small Urban Spaces
                    </h3>
                    <p className="text-gray-600">Perfect plants to start your container garden</p>
                    <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/blog/vertical-garden-design-ideas" 
                    className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors"
                  >
                    <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-primary/80">
                      Vertical Garden Design Ideas
                    </h3>
                    <p className="text-gray-600">Maximize your container garden with vertical growing</p>
                    <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CreativeFooter />
    </main>
  );
}