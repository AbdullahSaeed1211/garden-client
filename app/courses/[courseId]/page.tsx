import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CursorHighlight } from '@/components/ui/cursor-highlight';
import CourseRibbons from '@/components/CourseRibbons';
import CreativeFooter from '@/components/CreativeFooter';

// Define the course data (in a real app, this would come from a database)
const courses = {
  'urban-gardening': {
    title: 'Urban Gardening Essentials',
    description: 'Learn how to grow plants in limited urban spaces using containers, vertical gardens, and more.',
    duration: '6 weeks',
    level: 'Beginner',
    image: '/featured-course.jpg',
    instructor: 'Urvashi',
    price: '$199',
    schedule: 'Mondays and Wednesdays, 7-8:30 PM',
    startDate: 'June 15, 2023',
    syllabus: [
      { week: 1, title: 'Introduction to Urban Gardening', topics: ['Understanding urban spaces', 'Challenges and opportunities', 'Planning your garden'] },
      { week: 2, title: 'Container Gardening', topics: ['Choosing the right containers', 'Soil mixes for containers', 'Container-friendly plants'] },
      { week: 3, title: 'Vertical Gardens', topics: ['Vertical garden structures', 'Plants for vertical gardens', 'DIY vertical garden projects'] },
      { week: 4, title: 'Small Space Vegetables', topics: ['Growing vegetables in limited space', 'Succession planting', 'High-yield crops for small spaces'] },
      { week: 5, title: 'Herbs and Microgreens', topics: ['Indoor herb gardens', 'Growing microgreens', 'Harvesting and using herbs'] },
      { week: 6, title: 'Maintenance and Troubleshooting', topics: ['Watering systems for urban gardens', 'Pest management in the city', 'Seasonal care'] },
    ]
  },
  'herb-garden': {
    title: 'Culinary Herb Garden',
    description: 'Grow your own culinary herbs at home and learn how to use them in your cooking.',
    duration: '4 weeks',
    level: 'Beginner',
    image: '/project-herbs.jpg',
    instructor: 'Urvashi',
    price: '$149',
    schedule: 'Tuesdays and Thursdays, 6-7:30 PM',
    startDate: 'July 1, 2023',
    syllabus: [
      { week: 1, title: 'Getting Started with Herbs', topics: ['Herb garden planning', 'Essential culinary herbs', 'Indoor vs outdoor herbs'] },
      { week: 2, title: 'Growing Techniques', topics: ['Soil and container needs', 'Propagation methods', 'Light and water requirements'] },
      { week: 3, title: 'Harvesting and Preserving', topics: ['When and how to harvest', 'Drying herbs', 'Freezing and other preservation methods'] },
      { week: 4, title: 'Cooking with Fresh Herbs', topics: ['Herb pairing guide', 'Recipes featuring fresh herbs', 'Creating herb-infused oils and vinegars'] },
    ]
  },
  'container-gardening': {
    title: 'Container Gardening Mastery',
    description: 'Master the art of growing plants in containers on balconies, patios, and small spaces.',
    duration: '5 weeks',
    level: 'Intermediate',
    image: '/project-containers.jpg',
    instructor: 'Urvashi',
    price: '$179',
    schedule: 'Saturdays, 10 AM - 12 PM',
    startDate: 'June 3, 2023',
    syllabus: [
      { week: 1, title: 'Container Selection and Preparation', topics: ['Types of containers', 'Drainage solutions', 'Container materials'] },
      { week: 2, title: 'Soil Science for Containers', topics: ['Creating custom soil mixes', 'Fertilization strategies', 'pH management'] },
      { week: 3, title: 'Plant Selection', topics: ['Best plants for containers', 'Companion planting', 'Root development'] },
      { week: 4, title: 'Design Principles', topics: ['Color and texture combinations', 'Seasonal displays', 'Thriller, filler, spiller technique'] },
      { week: 5, title: 'Long-term Care', topics: ['Repotting techniques', 'Overwintering container plants', 'Troubleshooting common issues'] },
    ]
  },
  'vertical-gardening': {
    title: 'Vertical Garden Design',
    description: 'Learn how to create beautiful vertical gardens that maximize space and create stunning visual impact.',
    duration: '6 weeks',
    level: 'Intermediate',
    image: '/project-vertical.jpg',
    instructor: 'Urvashi',
    price: '$199',
    schedule: 'Fridays, 5-7 PM',
    startDate: 'July 7, 2023',
    syllabus: [
      { week: 1, title: 'Vertical Garden Fundamentals', topics: ['Types of vertical gardens', 'Site assessment', 'Planning your vertical space'] },
      { week: 2, title: 'Structures and Systems', topics: ['Wall-mounted systems', 'Freestanding structures', 'DIY options'] },
      { week: 3, title: 'Plant Selection', topics: ['Plants that thrive vertically', 'Root systems for vertical growth', 'Creating visual impact'] },
      { week: 4, title: 'Installation Techniques', topics: ['Mounting and securing', 'Irrigation solutions', 'Weight considerations'] },
      { week: 5, title: 'Living Walls', topics: ['Interior living walls', 'Exterior living walls', 'Moss and succulent walls'] },
      { week: 6, title: 'Maintenance', topics: ['Seasonal maintenance', 'Replacement strategies', 'Troubleshooting'] },
    ]
  }
};

type CourseParams = {
  params: {
    courseId: string;
  };
};

export default function CoursePage({ params }: CourseParams) {
  const { courseId } = params;
  const course = courses[courseId as keyof typeof courses];
  
  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="pt-20 pb-12 px-4">
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
                
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8">
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
                      <h1 className="text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
                    </div>
                  </div>
                </div>
                
                <div className="-mx-4 my-12">
                  <CourseRibbons />
                </div>
                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-700 mb-6 text-lg">{course.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
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
                  
                  <h2 className="text-2xl font-bold mb-4 mt-12">Course Curriculum</h2>
                  <div className="space-y-4">
                    {course.syllabus.map((week) => (
                      <div key={week.week} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex justify-between items-center">
                          <h3 className="font-semibold">Week {week.week}: {week.title}</h3>
                        </div>
                        <div className="p-4">
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {week.topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
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
                      <button className="w-full bg-primary text-white font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors mb-4">
                        Enroll Now
                      </button>
                      <p className="text-gray-500 text-sm mb-6">Enrollment closes in 7 days</p>
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
                        <span>Hands-on projects with feedback</span>
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
                        <h4 className="font-semibold">{course.instructor}</h4>
                        <p className="text-sm text-gray-600">Master Gardener</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      With over 10 years of experience in urban gardening, {course.instructor} specializes in helping city dwellers 
                      create thriving garden spaces regardless of size constraints.
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