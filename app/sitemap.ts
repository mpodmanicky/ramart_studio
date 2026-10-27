import type { MetadataRoute } from 'next'
import { getProjects, getPosts } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ramartstudio.sk'

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/atelier`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic projects
  try {
    const projects = await getProjects()
    for (const project of projects) {
      if (project.slug) {
        routes.push({
          url: `${baseUrl}/projekty/${project.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        })
      }
    }
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error)
  }

  // Dynamic blog posts
  try {
    const posts = await getPosts()
    for (const post of posts) {
      if (post.slug) {
        routes.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      }
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
  }

  return routes
}
