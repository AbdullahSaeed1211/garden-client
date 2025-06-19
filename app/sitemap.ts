import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sproutly.site'
  
  // Static pages
  const routes = [
    '',
    '/courses',
    '/courses/urban-gardening',
    '/courses/herb-garden',
    '/courses/container-gardening',
    '/courses/vertical-gardening',
    '/blog',
    '/blog/10-best-plants-small-urban-spaces',
    '/blog/container-gardening-complete-guide',
    '/blog/vertical-garden-design-ideas',
    '/blog/urban-gardening-tools-beginners',
    '/blog/growing-herbs-indoors-year-round',
    '/blog/balcony-garden-setup-guide',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/courses' ? 0.8 : 0.6,
  }))
} 