import type React from "react"
import type { Metadata } from "next"
import { Geist, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { generateDefaultMetadata, siteConfig, getSocialProfileURLs } from "@/components/SEOManager"
import StructuredData, { createPersonSchema, createWebSiteSchema } from "@/components/StructuredData"
import { Providers } from "@/components/Providers"
import ClickSpark from "@/components/ClickSpark"
import TargetCursor from "@/components/TargetCursor"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
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
    knowsAbout: [
      "Python",
      "Java",
      "C Programming",
      "JavaScript",
      "TypeScript",
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Three.js",
      "Generative AI",
      "Machine Learning",
      "Artificial Intelligence",
      "Artificial Neural Networks",
      "Random Forest",
      "Data Analysis",
      "LLaMA",
      "AI Prompting",
      "Voice AI",
      "OpenAI",
      "LangChain",
      "Groq",
      "UI/UX Design",
      "Figma",
      "Canva",
      "AutoCAD",
      "Blender",
      "Framer",
      "Creative Web Design",
      "SQL",
      "Microsoft SQL Server",
      "Docker",
      "Supabase",
      "Git",
      "GitHub",
      "No-Code Development",
      "Low-Code Development",
      "Unity",
      "Meta XR",
      "API Integration",
      "Hackathon Development",
      "Product Development",
    ],
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
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect hints for critical origins - speeds up font and asset loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://nabil-thange.vercel.app" crossOrigin="anonymous" />

        {/* Preload critical fonts - improves LCP */}
        <link rel="preload" as="font" type="font/woff2" href="/_next/static/media/caa3a2e1cccd8315-s.p.3b6cae6d.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/_next/static/media/0c89a48fa5027cee-s.p.4564287c.woff2" crossOrigin="anonymous" />

        {/* Structured Data for SEO/AEO/GEO */}
        <StructuredData data={knowledgeGraph} />

        {/* RSS Feed for AI discovery and content syndication */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Nabil Thange Blog RSS Feed"
          href="https://nabil-thange.vercel.app/feed.xml"
        />

        {/* AI Discovery Resources - Meta tags and links for AI crawlers */}
        <link rel="ai-policy" href="/.well-known/ai-policy.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Information" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs Full Information" />
        <link rel="alternate" type="text/plain" href="/about.txt" title="About Information" />
        <link rel="alternate" type="text/plain" href="/humans.txt" title="Humans Information" />

        <meta name="llms-txt" content="/llms.txt" />
        <meta name="llms-full-txt" content="/llms-full.txt" />
        <meta name="ai-policy" content="/.well-known/ai-policy.txt" />
        <meta name="about-txt" content="/about.txt" />
        <meta name="humans-txt" content="/humans.txt" />

        {/* Viewport optimization for mobile-first indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Security headers via meta tags (supplements HTTP headers) */}
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <TargetCursor />
          <ClickSpark
            sparkColor="#ffffff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {/* Add main landmark for accessibility */}
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </ClickSpark>
        </Providers>
      </body>
    </html>
  )
}
