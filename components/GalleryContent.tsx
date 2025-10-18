"use client"

import InfiniteGallery from "@/components/InfiniteGallery"
import { ChevronLeft } from "lucide-react"

export default function GalleryContent() {
  const handleBack = () => {
    window.history.back()
  }

  const sampleImages = [
    { src: "/1.webp", alt: "Gitskinz — GitHub README generator", link: "https://gitskinz.netlify.app/" },
    { src: "/2.webp", alt: "Shopwiz — Conversational shopping assistant", link: "https://shopwz.vercel.app/" },
    { src: "/3.webp", alt: "Techwiser — Tech blog UI", link: "https://techwiser.vercel.app/" },
    { src: "/4.webp", alt: "HungryzHub — Food delivery concept", link: "https://hungryzhub.vercel.app/" },
    { src: "/5.webp", alt: "Studenza — Student portal", link: "https://clgsphere.vercel.app/" },
    { src: "/6.webp", alt: "NutriSnap — AI nutrition tracking", link: "https://nutrisnapp-ai.vercel.app/" },
    { src: "/7.webp", alt: "SnippetSphere — Code snippets app", link: "https://snippetsphere.vercel.app/" },
    { src: "/8.webp", alt: "Techwiser CMS — Content management", link: "https://techwisercms.vercel.app/" },
    { src: "/9.webp", alt: "Musty MU — Music UI", link: "https://musty-mu.vercel.app/" },
    { src: "/10.webp", alt: "NbAIl — Voice-controlled AI assistant", link: "https://nbail-v4.vercel.app/" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/60 hover:text-white/90"
        aria-label="Go back"
      >
        <ChevronLeft size={20} />
      </button>

      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
          <span className="italic">I create;</span> therefore I am
        </h1>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className=" opacity-60">Click to uncover the journey</p>
      </div>
    </main>
  )
}
