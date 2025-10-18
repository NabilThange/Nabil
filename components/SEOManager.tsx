import { Metadata } from 'next';

/**
 * SEOManager - Centralized SEO configuration and metadata generator
 * 
 * Provides consistent metadata generation across all pages for optimal
 * SEO, AEO (AI Engine Optimization), and GEO (Generative Engine Optimization)
 */

export const siteConfig = {
  name: 'Nabil Thange',
  title: 'Nabil Thange - Full-Stack Developer & Creative Technologist',
  description: 'Full-stack developer specializing in Next.js, React, and modern web technologies. Creating innovative digital experiences with expertise in AI integration, responsive design, and performance optimization.',
  url: 'https://nabil-thange.vercel.app',
  ogImage: '/og-image.png', // TODO: Add actual OG image
  twitterHandle: '@THEONLYNABIL',
  // Google Search Console verification code
  // To get your code: https://search.google.com/search-console
  // Add your property, then copy ONLY the content value from the meta tag
  googleVerification: 'ECVhL-uOKKAR4INSHOcwPxBFg9lULvqSJD2qwx4viTQ',
  author: {
    name: 'Nabil Thange',
    email: 'thangenabil@gmail.com',
  },
  keywords: [
    'Full-Stack Developer',
    'Next.js Developer',
    'Nabil',
    'Nab',
    'Nabil Thange',
    'Thange',
    'nabil',
    'thange',
    'nabil thange',
    'React Developer',
    'Web Development',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'Portfolio',
    'Creative Technologist',
    'Software Engineer',
    'Web Designer',
  ],
  socialLinks: {
    github: 'https://github.com/NabilThange',
    linkedin: 'https://www.linkedin.com/in/nabil-thange/',
    twitter: 'https://x.com/THEONLYNABIL',
    devto: 'https://dev.to/nabil_thange',
    devpost: 'https://devpost.com/thangenabil',
    huggingface: 'https://huggingface.co/Nabil-Oc',
    instagram: 'https://www.instagram.com/nabil_thange/',
    lablab: 'https://lablab.ai/u/@NabilT',
  },
};

/**
 * Generate default metadata for pages
 */
export function generateDefaultMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Portfolio Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      creator: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    // Google Search Console verification
    verification: {
      google: siteConfig.googleVerification !== 'ECVhL-uOKKAR4INSHOcwPxBFg9lULvqSJD2qwx4viTQ' 
        ? siteConfig.googleVerification 
        : undefined,
    },
    ...overrides,
  };
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(config: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}): Metadata {
  const url = config.path ? `${siteConfig.url}${config.path}` : siteConfig.url;
  const image = config.image || siteConfig.ogImage;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: config.type || 'website',
      url,
      title: config.title,
      description: config.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
    ...(config.noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Generate JSON-LD breadcrumb data
 */
export function generateBreadcrumbData(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/**
 * Get social profile URLs for schema.org
 */
export function getSocialProfileURLs(): string[] {
  return Object.values(siteConfig.socialLinks).filter(Boolean);
}
