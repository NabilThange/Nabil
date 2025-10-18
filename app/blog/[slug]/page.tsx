import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/components/SEOManager"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "Nabil Thange", "Blog", "Web Development"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://nabil-thange.vercel.app/blog/${post.slug}`,
      siteName: "Nabil Thange Portfolio",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      authors: ["Nabil Thange"],
      tags: post.tags,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@THEONLYNABIL",
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://nabil-thange.vercel.app/blog/${post.slug}`,
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
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://nabil-thange.vercel.app/blog/${slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Nabil Thange",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Nabil Thange",
      url: siteConfig.url,
    },
    keywords: post.tags.join(", "),
    articleBody: post.content,
  }

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nabil-thange.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://nabil-thange.vercel.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://nabil-thange.vercel.app/blog/${slug}` },
    ],
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <main className="min-h-screen relative">
        {/* Navigation */}
        <nav className="fixed top-8 left-8 z-10">
          <Link
            href="/blog"
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
            <span className="text-sm">Back to Blog</span>
          </Link>
        </nav>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          {/* Header */}
          <header className="space-y-6 sm:space-y-8 pb-12 border-b border-border">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none py-12">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl sm:text-5xl font-light tracking-tight mt-12 mb-6" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-10 mb-5" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight mt-8 mb-4" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-foreground hover:text-muted-foreground underline transition-colors duration-300"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6" {...props} />
                ),
                li: ({ node, ...props }) => <li className="text-base sm:text-lg leading-relaxed" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-border pl-4 italic text-muted-foreground my-6"
                    {...props}
                  />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code
                      className="px-2 py-1 bg-muted text-foreground rounded text-sm font-mono"
                      {...props}
                    />
                  ) : (
                    <code
                      className="block p-4 bg-muted text-foreground rounded-lg overflow-x-auto text-sm font-mono my-6"
                      {...props}
                    />
                  ),
                strong: ({ node, ...props }) => <strong className="text-foreground font-medium" {...props} />,
                em: ({ node, ...props }) => <em className="text-foreground italic" {...props} />,
                hr: ({ node, ...props }) => <hr className="border-border my-12" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="pt-12 border-t border-border space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="group px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm inline-flex items-center gap-2 justify-center"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>All Posts</span>
              </Link>
              <Link
                href="/"
                className="group px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm inline-flex items-center gap-2 justify-center"
              >
                <span>Back to Home</span>
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

            <div className="text-sm text-muted-foreground">
              <p>
                Written by{" "}
                <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors">
                  Nabil Thange
                </Link>{" "}
                • {post.date}
              </p>
            </div>
          </footer>
        </article>
      </main>
    </>
  )
}
