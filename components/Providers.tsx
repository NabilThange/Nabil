"use client"

import React, { useEffect } from "react"
import { SoundProvider, useSound } from "@/context/SoundContext"

function GlobalClickSound() {
    const { soundEnabled } = useSound()

    useEffect(() => {
        const handleClick = () => {
            if (soundEnabled) {
                const audio = new Audio("/click.mp3")
                audio.volume = 0.5
                audio.currentTime = 0
                audio.play().catch((e) => console.error("Audio play failed", e))
            }
        }

        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [soundEnabled])

    return null
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SoundProvider>
            <GlobalClickSound />
            {children}
        </SoundProvider>
    )
}
