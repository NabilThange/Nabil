import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-posts'

/**
 * Dynamic Sitemap Generation
 * 
 * Automatically generates sitemap.xml with all routes for optimal crawling
 * by search engines and AI platforms. Updates on every build.
 * 
 * Priority levels:
 * - 1.0: Homepage (highest priority)
 * - 0.9: Gallery/Portfolio pages
 * - 0.8: About/Contact pages
 * - 0.7: Blog posts
 * - 0.6: Other pages
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nabil-thange.vercel.app'
  const currentDate = new Date()
  
  // Static routes
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9, // About page - high priority for SEO/GEO
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8, // Contact page - important for conversions
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9, // Portfolio showcase
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8, // Blog hub page
    },
  ]
  
  // Dynamic blog post routes
  const blogPosts = getAllBlogPosts()
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  
  // Example for projects:
  // const projects = await getAllProjects()
  // const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: new Date(project.updatedAt),
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // }))
  
  return [
    ...staticPages,
    ...blogPostPages,
    // ...projectPages, // Uncomment when individual project pages are added
  ]
}
