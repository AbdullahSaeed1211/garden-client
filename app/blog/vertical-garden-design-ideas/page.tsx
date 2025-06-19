import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import CreativeFooter from '@/components/CreativeFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vertical Garden Design Ideas | Space-Saving Growing Solutions | Sproutly',
  description: '15 creative vertical garden ideas to maximize your growing space. From DIY systems to professional installations - transform any wall into a productive garden.',
  keywords: 'vertical gardening, living walls, space-saving gardens, vertical planters, wall gardens, tower gardens',
  openGraph: {
    title: 'Vertical Garden Design Ideas',
    description: 'Maximize your growing space with these creative vertical solutions',
    type: 'article',
    publishedTime: '2024-01-25T10:00:00.000Z',
    authors: ['Olivia Green'],
  },
};

export default function VerticalGardenPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <article className="py-20 pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Vertical Garden Design Ideas' }
            ]}
            className="mb-6"
          />
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              15 Vertical Garden Design Ideas That Actually Work
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>By Olivia Green</span>
              <span>•</span>
              <time dateTime="2024-01-25">January 25, 2024</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transform any wall, fence, or small space into a productive vertical garden with these 
              proven design ideas. From budget-friendly DIY projects to stunning living walls, 
              discover how to grow 4x more food in the same footprint.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Why Vertical Gardening is a Game-Changer</h2>
            <p>
              After helping hundreds of urban dwellers transform their small spaces, I&apos;ve discovered that 
              vertical gardening isn&apos;t just about saving space - it&apos;s about creating a completely new 
              way to think about growing food. You can potentially grow 4-6 times more food in the same 
              footprint while making maintenance easier and more enjoyable.
            </p>
            
            <h3>The Surprising Benefits</h3>
            <ul>
              <li><strong>Space multiplication:</strong> Turn 4 square feet into 24+ square feet of growing space</li>
              <li><strong>Ergonomic harvesting:</strong> No more bending - everything at eye level</li>
              <li><strong>Superior pest control:</strong> Elevated plants have fewer soil-borne issues</li>
              <li><strong>Improved air circulation:</strong> Better plant health and reduced disease</li>
              <li><strong>Water efficiency:</strong> Gravity-fed irrigation uses 40% less water</li>
              <li><strong>Living art:</strong> Create stunning green walls that increase property value</li>
            </ul>

            <h2>15 Vertical Garden Design Ideas That Actually Work</h2>
            
            <h3>1. The Pocket Garden Wall</h3>
            <p>
              <strong>Best for:</strong> Herbs, lettuce, strawberries<br/>
              <strong>Space needed:</strong> 6x8 feet of wall space<br/>
              <strong>Investment:</strong> $100-200
            </p>
            <p>
              Create a living wall using fabric pocket planters. Each pocket holds 2-3 plants, and a 
              6x8 wall can accommodate 40+ pockets. I&apos;ve seen students harvest $500+ worth of herbs 
              and greens annually from a single pocket wall.
            </p>
            <p><strong>Pro tip:</strong> Install a drip irrigation line along the top for automatic watering.</p>

            <h3>2. The Tower Garden System</h3>
            <p>
              <strong>Best for:</strong> Leafy greens, herbs, compact vegetables<br/>
              <strong>Space needed:</strong> 4 square feet floor space<br/>
              <strong>Investment:</strong> $200-400
            </p>
            <p>
              Stack growing containers in a tower configuration. A 6-foot tower can hold 30-50 plants 
              in just 4 square feet. Use PVC pipe with holes for a DIY version, or purchase commercial 
              systems for easier setup.
            </p>

            <h3>3. Hanging Basket Cascade</h3>
            <p>
              <strong>Best for:</strong> Trailing tomatoes, strawberries, herbs<br/>
              <strong>Space needed:</strong> Overhead structure<br/>
              <strong>Investment:</strong> $75-150
            </p>
            <p>
              Suspend multiple baskets at different heights to create a cascading garden. Perfect for 
              balconies with overhead beams or pergolas. Each basket can produce 2-5 pounds of food per season.
            </p>

            <h3>4. The Ladder Planter</h3>
            <p>
              <strong>Best for:</strong> Various container sizes<br/>
              <strong>Space needed:</strong> 3x6 feet<br/>
              <strong>Investment:</strong> $50-100
            </p>
            <p>
              Repurpose an old ladder or build a stepped structure. Each rung holds containers of 
              varying sizes. The stepped design ensures every plant gets adequate sunlight.
            </p>

            <h3>5. Living Fence System</h3>
            <p>
              <strong>Best for:</strong> Climbing vegetables, privacy screening<br/>
              <strong>Space needed:</strong> Linear fence line<br/>
              <strong>Investment:</strong> $3-5 per linear foot
            </p>
            <p>
              Transform ugly fences into productive growing space. Install horizontal wire or bamboo 
              supports for climbing plants. A 20-foot fence can produce 40+ pounds of beans or peas annually.
            </p>

            <h3>6. Tiered Container Garden</h3>
            <p>
              <strong>Best for:</strong> Mixed vegetables, succession planting<br/>
              <strong>Space needed:</strong> 6x8 feet<br/>
              <strong>Investment:</strong> $150-300
            </p>
            <p>
              Build or buy tiered stands that hold multiple containers at different levels. Perfect for 
              creating a &quot;gradient&quot; of plants from tall in back to short in front.
            </p>

            <h3>7. Window Box Stack</h3>
            <p>
              <strong>Best for:</strong> Apartments with limited outdoor space<br/>
              <strong>Space needed:</strong> Window area<br/>
              <strong>Investment:</strong> $40-80 per window
            </p>
            <p>
              Stack window boxes vertically using brackets. Each box can be planted with different crops 
              for continuous harvests. Perfect for herbs and microgreens.
            </p>

            <h3>8. Pallet Garden Transformation</h3>
            <p>
              <strong>Best for:</strong> Budget-conscious gardeners<br/>
              <strong>Space needed:</strong> 4x6 feet<br/>
              <strong>Investment:</strong> $20-40
            </p>
            <p>
              Convert shipping pallets into vertical planters. Line with landscape fabric, fill with 
              soil, and plant through the slats. One pallet can hold 15-20 plants.
            </p>

            <h3>9. Gutter Garden System</h3>
            <p>
              <strong>Best for:</strong> Lettuce, herbs, strawberries<br/>
              <strong>Space needed:</strong> Wall or fence mounting<br/>
              <strong>Investment:</strong> $5-10 per linear foot
            </p>
            <p>
              Mount rain gutters horizontally at different heights. Drill drainage holes and plant 
              directly in the gutters. Extremely cost-effective and space-efficient.
            </p>

            <h3>10. A-Frame Trellis Garden</h3>
            <p>
              <strong>Best for:</strong> Climbing vegetables<br/>
              <strong>Space needed:</strong> 8 feet long x 6 feet wide<br/>
              <strong>Investment:</strong> $75-125
            </p>
            <p>
              Build an A-frame structure with netting or wire mesh on both sides. Plant climbers at 
              the base - you can grow on both sides, doubling your yield in the same footprint.
            </p>

            <h3>11. Hydroponic Tower</h3>
            <p>
              <strong>Best for:</strong> Fast-growing greens, maximum yields<br/>
              <strong>Space needed:</strong> 3 square feet<br/>
              <strong>Investment:</strong> $300-600
            </p>
            <p>
              Combine vertical growing with hydroponic systems for incredible yields. Plants grow 50% 
              faster than soil, and you can harvest year-round.
            </p>

            <h3>12. Shoe Organizer Garden</h3>
            <p>
              <strong>Best for:</strong> Herbs, small vegetables, apartment living<br/>
              <strong>Space needed:</strong> Door or fence space<br/>
              <strong>Investment:</strong> $15-30
            </p>
            <p>
              Over-the-door shoe organizers make perfect mini planters. Each pocket holds one plant. 
              Perfect for renters who can&apos;t make permanent installations.
            </p>

            <h3>13. Living Wall Panels</h3>
            <p>
              <strong>Best for:</strong> Maximum visual impact, property value<br/>
              <strong>Space needed:</strong> Any wall surface<br/>
              <strong>Investment:</strong> $15-25 per square foot
            </p>
            <p>
              Modular panels that lock together to create custom living walls. Professional appearance 
              with built-in irrigation systems. Can increase property value by $5,000-15,000.
            </p>

            <h3>14. Spiral Herb Tower</h3>
            <p>
              <strong>Best for:</strong> Culinary herbs with different water needs<br/>
              <strong>Space needed:</strong> 6-foot diameter circle<br/>
              <strong>Investment:</strong> $100-200
            </p>
            <p>
              Build a spiral tower with different microclimates. Plant water-loving herbs at the bottom, 
              Mediterranean herbs at the top. One tower can supply a family&apos;s herb needs year-round.
            </p>

            <h3>15. Vertical Greenhouse</h3>
            <p>
              <strong>Best for:</strong> Year-round growing, extreme climates<br/>
              <strong>Space needed:</strong> 8x10 feet<br/>
              <strong>Investment:</strong> $500-1500
            </p>
            <p>
              Combine vertical growing with greenhouse protection. Multiple growing levels protected 
              from weather. Can extend growing season by 3-6 months and increase yields by 300%.
            </p>

            <h2>Plant Selection for Vertical Success</h2>
            
            <h3>Top Performers for Vertical Gardens</h3>
            <ul>
              <li><strong>Leafy Greens:</strong> Lettuce, spinach, kale, chard, arugula</li>
              <li><strong>Herbs:</strong> Basil, parsley, cilantro, oregano, thyme</li>
              <li><strong>Compact Vegetables:</strong> Cherry tomatoes, peppers, bush beans</li>
              <li><strong>Trailing Plants:</strong> Strawberries, cascading tomatoes, nasturtiums</li>
              <li><strong>Climbing Vegetables:</strong> Peas, pole beans, cucumbers, small melons</li>
              <li><strong>Microgreens:</strong> All varieties for quick, nutrient-dense harvests</li>
            </ul>

            <h3>Weight Considerations</h3>
            <p>
              Always calculate the weight of your vertical garden when fully watered:
            </p>
            <ul>
              <li><strong>Soil:</strong> 75-100 pounds per cubic foot when wet</li>
              <li><strong>Water:</strong> 8 pounds per gallon</li>
              <li><strong>Plants:</strong> 5-20 pounds depending on size</li>
              <li><strong>Structure:</strong> Variable by material</li>
            </ul>

            <h2>Irrigation Systems for Vertical Gardens</h2>
            
            <h3>Gravity-Fed Drip System</h3>
            <p>
              The most reliable and water-efficient method. Set up a reservoir above your garden 
              and use drip tubing to deliver water to each plant. Uses 40% less water than hand-watering.
            </p>

            <h3>Misting Systems</h3>
            <p>
              Perfect for leafy greens and herbs. Fine mist provides gentle, even watering without 
              disturbing young plants or washing away seeds.
            </p>

            <h3>Self-Watering Reservoirs</h3>
            <p>
              Each container has its own water reservoir. Plants draw water as needed through capillary 
              action. Perfect for vacation watering and consistent moisture.
            </p>

            <h2>Common Vertical Gardening Mistakes (And How to Avoid Them)</h2>
            
            <h3>Inadequate Support</h3>
            <p>
              <strong>Problem:</strong> Structures collapse under weight<br/>
              <strong>Solution:</strong> Always build for 2x the expected weight and use appropriate anchors
            </p>

            <h3>Poor Water Distribution</h3>
            <p>
              <strong>Problem:</strong> Top plants get too much water, bottom plants too little<br/>
              <strong>Solution:</strong> Use individual drip lines or self-watering containers
            </p>

            <h3>Ignoring Sun Patterns</h3>
            <p>
              <strong>Problem:</strong> Lower plants get shaded by upper ones<br/>
              <strong>Solution:</strong> Angle structures or use shorter plants on top
            </p>

            <h3>Overcrowding</h3>
            <p>
              <strong>Problem:</strong> Plants compete for light and nutrients<br/>
              <strong>Solution:</strong> Follow spacing guidelines even in vertical systems
            </p>

            <h2>Ready to Go Vertical?</h2>
            <p>
              Vertical gardening represents the future of urban food production. By thinking in three 
              dimensions, you can create incredibly productive gardens in the smallest spaces while 
              making maintenance easier and more enjoyable.
            </p>
            <p>
              Want detailed video tutorials and step-by-step plans for building these systems? Our{' '}
              <Link href="/courses/vertical-gardening" className="text-primary hover:underline font-medium">
                Vertical Gardening Mastery course
              </Link>{' '}
              includes complete construction guides, plant selection charts, and troubleshooting support 
              to ensure your vertical garden succeeds from day one.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Quick Start Tip</h3>
              <p className="text-green-700">
                Begin with a simple 3-tier ladder planter and 9 herb plants. Master this system before 
                expanding to more complex vertical gardens. Success builds confidence and expertise!
              </p>
            </div>

            <h2>Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Link href="/blog/container-gardening-complete-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-2">Container Gardening Complete Guide</h3>
                <p className="text-gray-600 text-sm">Master the fundamentals before going vertical</p>
              </Link>
              <Link href="/blog/10-best-plants-small-urban-spaces" className="block p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-2">10 Best Plants for Small Urban Spaces</h3>
                <p className="text-gray-600 text-sm">Perfect plants for your vertical garden</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CreativeFooter />
    </main>
  );
} 