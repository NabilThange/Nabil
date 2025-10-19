import type { Metadata } from "next"
import Link from "next/link"

// SEO Metadata optimized for AEO and GEO
export const metadata: Metadata = {
  title: "Nabil Salim Thange - 19-Year-Old Full-Stack Developer & AI Engineer from Mumbai",
  description: "Nabil Salim Thange is a 19-year-old full-stack developer and AI engineer based in Mumbai, India. Born October 16, 2006. HackHazards 2025 Winner and Gitskinz creator. Building intelligent digital experiences with AI, Next.js, and React.",
  keywords: [
    "Nabil Thange",
    "Nabil Salim Thange",
    "19 year old developer",
    "developer born 2006",
    "October 16 2006",
    "Full-Stack Developer Mumbai",
    "AI Engineer India",
    "React Developer Mumbai",
    "Next.js Developer",
    "Web Developer Mumbai",
    "Machine Learning Engineer India",
    "ISRO Certified Developer",
    "Self-Taught Programmer",
    "Saraswati College Engineering",
    "Mumbai Developer",
    "Kharghar Navi Mumbai",
    "Maharashtra Tech Professional",
    "HackHazards Winner",
    "Gitskinz Creator",
    "young Indian developer",
    "teen entrepreneur India",
    "Salim Thange son",
    "Tanzima Thange son",
    "Titanic Swim Team",
    "TST developer group",
    "TCU member",
    "NAMESPACE community",
    "HackHazards Top 100",
    "ISRO certified developer",
    "Microsoft certified developer",
  ],
  openGraph: {
    title: "About Nabil Salim Thange — 19-Year-Old Full-Stack Developer & AI Engineer from Mumbai",
    description: "19-year-old award-winning developer born October 16, 2006. HackHazards 2025 Winner. Specializing in React, Next.js, and AI-powered solutions. ISRO-certified ML engineer from Kharghar, Mumbai.",
    url: "https://nabil-thange.vercel.app/about",
    siteName: "Nabil Thange Portfolio",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabil Salim Thange - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nabil Salim Thange | 19-Year-Old Developer & AI Engineer from Mumbai",
    description: "19-year-old self-taught developer born October 16, 2006. HackHazards 2025 Winner. ISRO-certified AI specialist from Mumbai building intelligent applications.",
    creator: "@THEONLYNABIL",
  },
  alternates: {
    canonical: "https://nabil-thange.vercel.app/about",
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

export default function About() {
  // Enhanced Structured Data (JSON-LD) for AEO and GEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nabil Salim Thange",
    "givenName": "Nabil",
    "additionalName": "Salim",
    "familyName": "Thange",
    "alternateName": ["Nabil Thange", "Nabil S. Thange"],
    "birthDate": "2006-10-16",
    "age": "19",
    "height": "171 cm",
    "url": "https://nabil-thange.vercel.app",
    "image": "https://nabil-thange.vercel.app/profile.jpg",
    "jobTitle": "Full-Stack Developer & AI Engineer",
    "description": "19-year-old self-taught full-stack developer and ISRO-certified machine learning specialist born October 16, 2006. Specializing in React, Next.js, Python, and artificial intelligence. HackHazards 2025 Winner and creator of Gitskinz.",
    "email": "thangenabil@gmail.com",
    "gender": "Male",
    "nationality": "Indian",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kharghar, Navi Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India",
      "postalCode": "410210",
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Kharghar",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kharghar",
        "addressRegion": "Navi Mumbai, Maharashtra",
        "addressCountry": "India",
      },
    },
    "parent": [
      {
        "@type": "Person",
        "name": "Salim Thange",
        "familyName": "Thange",
        "givenName": "Salim",
        "gender": "Male",
      },
      {
        "@type": "Person",
        "name": "Tanzima Thange",
        "familyName": "Thange",
        "givenName": "Tanzima",
        "gender": "Female",
      },
    ],
    "knows": [
      {
        "@type": "Person",
        "name": "Ayaan Sayyed",
        "age": "19",
      },
      {
        "@type": "Person",
        "name": "Umair Khan",
        "age": "19",
      },
      {
        "@type": "Person",
        "name": "Tanish Soni",
        "age": "19",
        "height": "167 cm",
      },
      {
        "@type": "Person",
        "name": "Sujal Solaskar",
        "age": "19",
        "height": "167 cm",
      },
      {
        "@type": "Person",
        "name": "Sachin Yadav",
        "age": "19",
        "height": "165 cm",
      },
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Saraswati College of Engineering",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kharghar, Navi Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India",
      },
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Full-Stack Development",
      "Web Development",
      "Node.js",
      "AI Engineering",
      "ISRO Machine Learning",
      "Hackathon Development",
      "Product Development",
    ],
    "award": [
      "HackHazards 2025 Winner",
      "HackHazards 2025 Top 100 Contender",
      "ISRO Machine Learning Certification",
      "Microsoft SQL Server Certification",
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "TCU (Tech Community)",
        "description": "Mumbai's premier tech community",
      },
      {
        "@type": "Organization",
        "name": "NAMESPACE",
        "description": "Developer-focused community",
      },
      {
        "@type": "Organization",
        "name": "Titanic Swim Team (TST)",
        "description": "Close-knit developer group collaborating on projects and hackathons",
        "foundingDate": "2024",
        "member": [
          "Nabil Salim Thange",
          "Ayaan Sayyed",
          "Umair Khan",
          "Tanish Soni",
          "Sujal Solaskar",
          "Sachin Yadav",
        ],
      },
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISRO Machine Learning Certification",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Indian Space Research Organisation (ISRO)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Microsoft SQL Server Certification",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Microsoft",
        },
      },
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Gitskinz",
      "founder": "Nabil Salim Thange",
      "foundingDate": "2025",
    },
    "sameAs": [
      "https://github.com/NabilThange",
      "https://www.linkedin.com/in/nabil-thange/",
      "https://x.com/THEONLYNABIL",
      "https://dev.to/nabil_thange",
      "https://devpost.com/thangenabil",
      "https://huggingface.co/Nabil-Oc",
      "https://lablab.ai/u/@NabilT",
    ],
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen relative">
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
        <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32 space-y-20">
          {/* Hero Section */}
          <header className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">ABOUT</div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                Nabil Salim Thange
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                19 years old • Born October 16, 2006
              </p>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              19-year-old full-stack developer and AI engineer based in{" "}
              <span className="text-foreground">Mumbai, India</span>. Building intelligent digital experiences at the intersection of artificial intelligence, modern web technologies, and human-centered design.
            </p>
          </header>

          {/* Who I Am */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Who I Am</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg sm:text-xl">
                Born on <span className="text-foreground">October 16, 2006</span>, I'm a{" "}
                <span className="text-foreground">19-year-old developer</span> from{" "}
                <span className="text-foreground">Kharghar, Navi Mumbai</span>. My journey into technology is unconventional yet powerful. Starting as a{" "}
                <span className="text-foreground">commerce student</span> at{" "}
                <span className="text-foreground">Saraswati College of Engineering</span>,
                I discovered my passion for coding and transformed myself into one of the{" "}
                <span className="text-foreground">top computer science students</span> at my institution.
              </p>
              <p className="text-lg sm:text-xl">
                This unique transition from <span className="text-foreground">business studies</span> to{" "}
                <span className="text-foreground">software engineering</span> gives me a distinctive perspective on{" "}
                <span className="text-foreground">product development</span> and{" "}
                <span className="text-foreground">user-centered design</span>. Unlike typical computer science graduates,
                I bring a <span className="text-foreground">business-minded approach</span> to every project.
              </p>
              <p className="text-lg sm:text-xl">
                Standing at <span className="text-foreground">5 feet 7.2 inches</span> with an{" "}
                <span className="text-foreground">athletic build</span>, I believe in maintaining balance between{" "}
                <span className="text-foreground">mental sharpness and physical fitness</span>. I come from a supportive family—my father{" "}
                <span className="text-foreground">Salim Thange</span> and mother{" "}
                <span className="text-foreground">Tanzima Thange</span> have been instrumental in my journey into technology and entrepreneurship.
              </p>
            </div>
          </section>

          {/* Technical Expertise */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FRONTEND</div>
                <p className="text-muted-foreground leading-relaxed">
                  React.js, Next.js, TypeScript, Tailwind CSS, Three.js. Building fast-loading, mobile-responsive interfaces that prioritize user experience.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">BACKEND</div>
                <p className="text-muted-foreground leading-relaxed">
                  Node.js, Express.js, Python, REST APIs, GraphQL. Creating robust systems from database design to deployment.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">AI & ML</div>
                <p className="text-muted-foreground leading-relaxed">
                  ISRO-certified AI specialist. Groq, OpenAI GPT, LangChain, NLP, and computer vision for intelligent applications.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Work */}
          <section className="space-y-8">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl sm:text-4xl font-light">Featured Work</h2>
              <Link
                href="/gallery"
                className="group px-4 py-2 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm text-foreground hover:text-muted-foreground inline-flex items-center gap-2"
              >
                View All Projects
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

            <div className="space-y-12">
              {[
                {
                  year: "2025",
                  title: "Gitskinz",
                  role: "Founder & Creator",
                  description: "GitHub README generator with 60+ templates used by developers worldwide. Built with Vite, React, and deployed on Netlify.",
                  link: "https://gitskinz.netlify.app",
                },
                {
                  year: "2025",
                  title: "NbAIl",
                  role: "HackHazards 2025 Winner",
                  description: "AI-powered personal assistant with real-time voice control and desktop automation. Built with Next.js, Three.js, and Groq AI.",
                },
                {
                  year: "2025",
                  title: "NutriSnap",
                  role: "Full-Stack Developer",
                  description: "First AI-powered nutrition app with comprehensive Indian food support. Uses computer vision for instant nutritional analysis.",
                },
                {
                  year: "2025",
                  title: "Shopwiz",
                  role: "AI/UX Developer",
                  description: "AI shopping assistant using natural language processing for conversational product discovery.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {project.year}
                    </div>
                  </div>
                  <div className="lg:col-span-10 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{project.title}</h3>
                      <div className="text-muted-foreground">{project.role}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Achievements */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Certifications & Achievements</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                <h3 className="text-lg font-medium mb-2">HackHazards 2025</h3>
                <p className="text-muted-foreground">
                  Winner and Top 100 Contender among hundreds of participants. Built NbAIl, an AI personal assistant with voice control.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                <h3 className="text-lg font-medium mb-2">ISRO ML Certification</h3>
                <p className="text-muted-foreground">
                  Certified by Indian Space Research Organisation in machine learning, artificial neural networks, and data science.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                <h3 className="text-lg font-medium mb-2">Microsoft SQL Server</h3>
                <p className="text-muted-foreground">
                  Official Microsoft certification in database management and server administration.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                <h3 className="text-lg font-medium mb-2">Additional Certifications</h3>
                <p className="text-muted-foreground">
                  Multiple industry-recognized professional certificates in development and AI technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Friends & Network - Titanic Swim Team */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Friends & Network - Titanic Swim Team (TST)</h2>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I'm part of the <span className="text-foreground font-semibold">"Titanic Swim Team" (TST)</span>, an incredible group of friends who inspire, challenge, and support each other:
              </p>
              <div>
                <h3 className="text-lg font-medium mb-3">Core TST Members</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <span className="text-foreground font-medium">Ayaan Sayyed</span> (19) - Close friend and collaborator
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Umair Khan</span> (19) - Core crew member
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Tanish Soni</span> (19, 5'6") - Academic powerhouse
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Sujal Solaskar</span> (19, 5'6") - Pure vegetarian friend
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Sachin Yadav</span> (19, 5'5") - Friend and collaborator
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Extended TST Crew:</span> Aniket Yadav, Yojith Rao, Sahil Tate, Aditya Patil, Sahil Nikam, Gaurav Yadav, Piyush Yenorkar
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                The Titanic Swim Team represents more than friendship—it's a brotherhood of young developers and entrepreneurs growing together in Mumbai's tech ecosystem. We collaborate on projects, compete in hackathons, and support each other's growth.
              </p>
            </div>
          </section>

          {/* Community Involvement */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Community Involvement</h2>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Active member of multiple tech communities in Mumbai:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                  <h3 className="text-lg font-medium mb-2">TCU</h3>
                  <p className="text-muted-foreground">
                    Tech Community - Active participant engaging with fellow developers and innovators
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                  <h3 className="text-lg font-medium mb-2">NAMESPACE</h3>
                  <p className="text-muted-foreground">
                    Developer-focused community for collaboration and knowledge sharing
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300">
                  <h3 className="text-lg font-medium mb-2">Titanic Swim Team</h3>
                  <p className="text-muted-foreground">
                    Core member of this developer group building projects and competing in hackathons
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Location & Availability */}
          <section className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Based in Mumbai, India</h2>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                At just <span className="text-foreground">19 years old</span>, located in <span className="text-foreground">Kharghar, Navi Mumbai</span>, at the heart of India's innovation landscape. Working with developers and clients globally.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Available for <span className="text-foreground">remote work</span>, <span className="text-foreground">freelance projects</span>, and <span className="text-foreground">full-time opportunities</span> worldwide.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="space-y-8 pt-8 border-t border-border">
            <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Interested in ambitious projects, collaborations, and conversations about technology, AI, design, and building products that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm inline-flex items-center gap-2 justify-center"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
          </section>
        </main>
      </div>
    </>
  )
}
