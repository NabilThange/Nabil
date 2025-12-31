"use client"

import { useRouter } from "next/navigation"
import TrueFocus from "@/components/ui/true-focus"
import Prism from "@/components/Prism"
import { useSound } from "@/context/SoundContext"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export default function IntroPage() {
  const router = useRouter()
  const { setSoundEnabled } = useSound()
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const audio = new Audio("/glitch.mp3")
    audio.volume = 0.5
    audio.play().catch((e) => console.log("Autoplay blocked:", e))
  }, [])

  const handleEnter = (sound: boolean) => {
    setSoundEnabled(sound)

    if (sound) {
      // Play sound immediately as feedback
      try {
        const audio = new Audio("/click.mp3")
        audio.volume = 0.5
        audio.play()
      } catch (e) {
        console.error("Failed to play sound", e)
      }
    }

    // Delay navigation slightly to allow sound to play
    setTimeout(() => {
      router.push("/home")
    }, 300)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>

      <div className="mb-12 relative z-10 w-full flex justify-center">
        <TrueFocus
          sentence="Nabil Thange"
          borderColor="#ffffff"
          glowColor="rgba(255, 255, 255, 0.6)"
          animationDuration={0.3}
          pauseBetweenAnimations={0.2}
          onFinish={() => setShowButtons(true)}
        />
      </div>

      <div
        className={cn(
          "flex gap-8 transition-opacity duration-1000 z-10",
          showButtons ? "opacity-100" : "opacity-0"
        )}
      >
        <button
          onClick={() => handleEnter(true)}
          className="cursor-target group relative px-6 py-3 font-semibold text-white border border-transparent hover:border-white transition-all duration-300"
        >
          Enter with sound <ArrowUpRight className="inline-block w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        <button
          onClick={() => handleEnter(false)}
          className="cursor-target px-6 py-3 font-semibold text-gray-500 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:w-0 after:h-[1px] after:bg-white hover:after:w-[calc(100%-48px)] after:transition-all after:duration-300"
        >
          Enter without sound
        </button>
      </div>
    </div>
  )
}
