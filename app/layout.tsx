import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { generateDefaultMetadata, siteConfig, getSocialProfileURLs } from "@/components/SEOManager"
import StructuredData, { createPersonSchema, createWebSiteSchema } from "@/components/StructuredData"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

// Comprehensive SEO metadata for optimal discoverability across search engines and AI platforms
export const metadata: Metadata = generateDefaultMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Person/ProfilePage schema for portfolio owner (GEO optimization)
  const personSchema = createPersonSchema({
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.png`, // Profile image
    jobTitle: "Full-Stack Developer & Creative Technologist",
    description: siteConfig.description,
    socialProfiles: getSocialProfileURLs(),
  })

  // WebSite schema for search functionality and site-wide data
  const websiteSchema = createWebSiteSchema({
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  })

  // Combined knowledge graph for enhanced AI crawler understanding
  const knowledgeGraph = {
    '@context': 'https://schema.org',
    '@graph': [personSchema, websiteSchema],
  }

  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {/* Structured Data for SEO/AEO/GEO */}
        <StructuredData data={knowledgeGraph} />
        
        {/* RSS Feed for AI discovery and content syndication */}
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="Nabil Thange Blog RSS Feed" 
          href="https://nabil-thange.vercel.app/feed.xml" 
        />
        
        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="google-site-verification" content="ECVhL-uOKKAR4INSHOcwPxBFg9lULvqSJD2qwx4viTQ" />
        
        {/* Viewport optimization for mobile-first indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
