import { MetadataRoute } from 'next'

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
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9, // Portfolio showcase
    },
  ]
  
  // Future: Add dynamic routes here
  // Example for blog posts:
  // const posts = await getAllPosts()
  // const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }))
  
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
    // ...blogPages, // Uncomment when blog is added
    // ...projectPages, // Uncomment when individual project pages are added
  ]
}
