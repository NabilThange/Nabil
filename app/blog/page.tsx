import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"

// SEO Metadata optimized for AEO and GEO
export const metadata: Metadata = {
  title: "Blog — Recent Thoughts by Nabil Thange",
  description:
    "Read recent thoughts from Nabil Thange — Full-stack developer and AI engineer based in Mumbai, India. Articles on AI, product development, hackathons, and learning.",
  keywords: [
    "Nabil Thange Blog",
    "Web Development Blog",
    "AI Product Development",
    "Hackathons",
    "Next.js Articles",
    "React Developer Blog",
    "Mumbai Developer Blog",
  ],
  openGraph: {
    title: "Blog — Recent Thoughts by Nabil Thange",
    description:
      "Essays and notes on AI, building products, hackathons, and the journey as a self-taught developer from Mumbai, India.",
    url: "https://nabil-thange.vercel.app/blog",
    siteName: "Nabil Thange Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabil Thange — Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Recent Thoughts by Nabil Thange",
    description: "Articles on AI, product development, and learning by Nabil Thange.",
    creator: "@THEONLYNABIL",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://nabil-thange.vercel.app/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogPage() {
  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nabil-thange.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://nabil-thange.vercel.app/blog" },
    ],
  }

  // WebPage structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog — Recent Thoughts",
    url: "https://nabil-thange.vercel.app/blog",
    description:
      "Recent thoughts and essays by Nabil Thange on AI, web development, hackathons, and building products.",
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c") }}
      />

      <main className="min-h-screen relative">
        {/* Navigation */}
        <nav className="fixed top-8 left-8 z-10">
          <Link
            href="/"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back</span>
          </Link>
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          {/* Header */}
          <header className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">BLOG</div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">Recent Thoughts</h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Ideas on AI, product development, hackathons, and learning — from Mumbai, India.
            </p>
          </header>

          {/* Posts */}
          <section className="mt-12 sm:mt-16">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                          <span>Read more</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
