import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CursorHighlight } from '@/components/ui/cursor-highlight';
import CreativeFooter from '@/components/CreativeFooter';

export const metadata: Metadata = {
  title: 'Urban Gardening Courses | Learn Container & Vertical Gardening | Sproutly',
  description: 'Explore our expert-led urban gardening courses. Learn container gardening, vertical gardens, herb growing, and small space techniques. 4-6 week courses for all skill levels.',
  keywords: 'urban gardening courses, container gardening course, vertical gardening course, herb garden course, online gardening classes, small space gardening',
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Urban Gardening Courses | Sproutly',
    description: 'Explore our expert-led urban gardening courses. Learn container gardening, vertical gardens, and small space techniques.',
    url: 'https://sproutly.site/courses',
    images: [
      {
        url: '/featured-course.jpg',
        width: 1200,
        height: 630,
        alt: 'Sproutly urban gardening course overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Gardening Courses | Sproutly',
    description: 'Explore our expert-led urban gardening courses. Learn container gardening, vertical gardens, and small space techniques.',
    images: ['/featured-course.jpg'],
  },
};

export default function CoursesPage() {
  const courses = [
    {
      id: 'urban-gardening',
      title: 'Urban Gardening Essentials',
      description: 'Learn how to grow plants in limited urban spaces using containers, vertical gardens, and more.',
      duration: '6 weeks',
      level: 'Beginner',
      image: '/featured-course.jpg'
    },
    {
      id: 'herb-garden',
      title: 'Culinary Herb Garden',
      description: 'Grow your own culinary herbs at home and learn how to use them in your cooking.',
      duration: '4 weeks',
      level: 'Beginner',
      image: '/project-herbs.jpg'
    },
    {
      id: 'container-gardening',
      title: 'Container Gardening Mastery',
      description: 'Master the art of growing plants in containers on balconies, patios, and small spaces.',
      duration: '5 weeks',
      level: 'Intermediate',
      image: '/project-containers.jpg'
    },
    {
      id: 'vertical-gardening',
      title: 'Vertical Garden Design',
      description: 'Learn how to create beautiful vertical gardens that maximize space and create stunning visual impact.',
      duration: '6 weeks',
      level: 'Intermediate',
      image: '/project-vertical.jpg'
    }
  ];

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="py-20 pt-32 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium px-4 py-2 bg-accent/10 rounded-full mb-4">
                Our Courses
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Gardening with Sproutly</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our expert-led courses and transform your space with the beauty and bounty of plants. 
                From beginners to advanced gardeners, we have something for everyone.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {courses.map((course, i) => (
              <ScrollReveal key={course.id} delay={i * 0.1}>
                <CursorHighlight>
                  <Link href={`/courses/${course.id}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <div className="relative h-64 overflow-hidden">
                        <Image 
                          src={course.image || "/project-herbs.jpg"} 
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-center">
                            <span className="bg-primary/90 text-white text-sm px-3 py-1 rounded-full">
                              {course.duration}
                            </span>
                            <span className="bg-white/90 text-gray-800 text-sm px-3 py-1 rounded-full">
                              {course.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {course.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Learn more
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                          <span className="text-accent font-bold">
                            Enroll Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CursorHighlight>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CreativeFooter />
    </main>
  );
} 