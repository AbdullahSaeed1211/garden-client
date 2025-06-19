import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CreativeFooter from '@/components/CreativeFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Urban Gardening Blog | Tips, Guides & Expert Advice | Sproutly',
  description: 'Expert urban gardening advice, container gardening tips, and step-by-step guides for growing food in small spaces. Start your urban garden today.',
  keywords: 'urban gardening blog, container gardening tips, small space gardening, apartment gardening, urban farming',
  openGraph: {
    title: 'Urban Gardening Blog | Expert Tips & Guides',
    description: 'Expert advice for growing food in small urban spaces',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'container-gardening-complete-guide',
    title: 'Container Gardening Complete Guide: From Beginner to Expert',
    excerpt: 'Master the art of growing abundant food in any space with our comprehensive container gardening system. Learn container selection, soil preparation, and planting techniques.',
    readTime: '12 min read',
    date: 'January 20, 2024',
    category: 'Complete Guides',
    featured: true,
    tags: ['Container Gardening', 'Beginner Guide', 'Urban Growing']
  },
  {
    slug: '10-best-plants-small-urban-spaces',
    title: '10 Best Plants for Small Urban Spaces',
    excerpt: 'Discover the perfect plants that thrive in apartments, balconies, and tiny gardens. Get maximum harvests from minimum space with these proven winners.',
    readTime: '8 min read',
    date: 'January 18, 2024',
    category: 'Plant Selection',
    featured: true,
    tags: ['Plant Selection', 'Small Spaces', 'Beginner']
  },
  {
    slug: 'vertical-garden-design-ideas',
    title: 'Vertical Garden Design Ideas: 15 Space-Saving Solutions',
    excerpt: 'Transform any wall into a productive garden with these creative vertical growing systems. Perfect for balconies, patios, and small yards.',
    readTime: '10 min read',
    date: 'January 15, 2024',
    category: 'Design & Planning',
    featured: true,
    tags: ['Vertical Growing', 'Design', 'Space Saving']
  },
  {
    slug: 'urban-gardening-tools-beginners',
    title: 'Urban Gardening Tools for Beginners: Essential Equipment Guide',
    excerpt: 'Everything you need to start your urban garden without breaking the bank. From must-have basics to nice-to-have upgrades.',
    readTime: '7 min read',
    date: 'January 12, 2024',
    category: 'Tools & Equipment',
    featured: false,
    tags: ['Tools', 'Equipment', 'Beginner']
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen relative bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-blue-100/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Fresh Content Weekly
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Urban Gardening Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert tips, step-by-step guides, and proven strategies for growing abundant food in small urban spaces
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <span className="font-medium">Weekly Tips</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Expert Guides</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏙️</span>
                <span className="font-medium">Urban Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Complete Guides", icon: "📖", count: "4", color: "bg-blue-500" },
                { name: "Plant Selection", icon: "🌿", count: "6", color: "bg-green-500" },
                { name: "Design & Planning", icon: "📐", count: "3", color: "bg-purple-500" },
                { name: "Tools & Equipment", icon: "🛠️", count: "5", color: "bg-orange-500" }
              ].map((category, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform`}>
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} articles</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600">Our most comprehensive guides to get you started</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
                      {/* Featured Badge */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-green-600 p-6 text-white">
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                              ⭐ Featured
                            </span>
                          </div>
                          <div className="mb-3">
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <time dateTime={post.date}>{post.date}</time>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <div className="mt-4 flex items-center text-primary font-medium">
                          Read Article
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                <p className="text-lg text-gray-600">Fresh insights and practical tips for urban gardeners</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                        <div className="mb-3">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <time dateTime={post.date}>{post.date}</time>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <div className="flex items-center text-primary font-medium">
                          Read Article
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Get Weekly Urban Gardening Tips</h2>
              <p className="text-xl mb-8 text-green-100">
                Join 1,000+ urban gardeners getting expert tips, seasonal guides, and exclusive growing secrets delivered to their inbox every Tuesday.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/50"
                  />
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-green-100 mt-3">
                  Free forever. Unsubscribe anytime. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreativeFooter />
    </main>
  );
}