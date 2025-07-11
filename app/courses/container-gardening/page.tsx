import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CursorHighlight } from '@/components/ui/cursor-highlight';
import EnrollButton from '@/components/EnrollButton';
import CreativeFooter from '@/components/CreativeFooter';

export const metadata: Metadata = {
  title: 'Container Gardening Mastery Course | Balcony & Patio Gardens | Sproutly',
  description: 'Master container gardening in 5 weeks! Perfect for balconies, patios, and small spaces. Learn plant selection, soil, drainage, and design. Intermediate level.',
  keywords: 'container gardening course, balcony gardening, patio gardening, small space gardening, pot gardening, container plants',
  alternates: {
    canonical: '/courses/container-gardening',
  },
  openGraph: {
    title: 'Container Gardening Mastery Course | Sproutly',
    description: 'Master container gardening in 5 weeks! Perfect for balconies, patios, and small spaces. Learn plant selection, soil, drainage, and design.',
    url: 'https://sproutly.site/courses/container-gardening',
    images: [
      {
        url: '/project-containers.jpg',
        width: 1200,
        height: 630,
        alt: 'Container Gardening Mastery Course by Sproutly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Container Gardening Mastery Course | Sproutly',
    description: 'Master container gardening in 5 weeks! Perfect for balconies, patios, and small spaces.',
    images: ['/project-containers.jpg'],
  },
};

export default function ContainerGardeningPage() {
  const course = {
    title: 'Container Gardening Mastery',
    description: 'Master the art of growing plants in containers on balconies, patios, and small spaces.',
    duration: '5 weeks',
    level: 'Intermediate',
    image: '/project-containers.jpg',
    instructor: 'Sophia',
    price: '$179',
    schedule: 'Wednesdays and Saturdays, 5-6:30 PM',
    startDate: 'August 5, 2023',
  };

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="py-20 pt-32 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <ScrollReveal>
                <nav className="flex mb-6 text-sm text-gray-500">
                  <Link href="/" className="hover:text-primary">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/courses" className="hover:text-primary">Courses</Link>
                  <span className="mx-2">/</span>
                  <span className="text-gray-800">{course.title}</span>
                </nav>
                
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex gap-3 mb-3">
                        <span className="bg-primary/90 text-white text-sm px-3 py-1 rounded-full">
                          {course.duration}
                        </span>
                        <span className="bg-white/90 text-gray-800 text-sm px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
                    </div>
                  </div>
                </div>
                

                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-700 mb-6 text-lg">{course.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-500 mb-1">Duration</h3>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-500 mb-1">Instructor</h3>
                      <p className="font-semibold">{course.instructor}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-500 mb-1">Schedule</h3>
                      <p className="font-semibold text-sm">{course.schedule}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-500 mb-1">Start Date</h3>
                      <p className="font-semibold">{course.startDate}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <CursorHighlight>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{course.price}</h3>
                      <EnrollButton className="w-full bg-primary text-white font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors mb-4">
                        Enroll Now
                      </EnrollButton>
                      <p className="text-gray-500 text-sm mb-6">Enrollment closes in 14 days</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Full access to all {course.duration} of content</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Live sessions with instructor {course.instructor}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Container and soil selection guide</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Lifetime access to recordings</span>
                      </div>
                    </div>
                  </div>
                </CursorHighlight>
                
                <CursorHighlight>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-xl font-bold mb-4">Meet Your Instructor</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image 
                          src="/instructor.jpg" 
                          alt="Instructor" 
                          width={64} 
                          height={64} 
                          className="object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{course.instructor}</p>
                        <p className="text-sm text-gray-600">Container Garden Designer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Specializes in urban container gardening with over 8 years of experience designing beautiful and productive container gardens for homes and businesses.
                    </p>
                  </div>
                </CursorHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreativeFooter />
    </main>
  );
} 