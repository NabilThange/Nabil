"use client"

import { useEffect, useState } from "react"
import type { Project } from "./InfiniteGallery"

interface CursorFollowerProps {
    hoveredProject: Project | null
}

export default function CursorFollower({ hoveredProject }: CursorFollowerProps) {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check mobile
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if (isMobile) return

        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [])

    // Delay visibility slightly to avoid flicker or handle smooth entry
    useEffect(() => {
        if (hoveredProject && !isMobile) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [hoveredProject, isMobile])

    if (isMobile) return null

    return (
        <div
            className={`fixed pointer-events-none z-[100] transition-opacity duration-300 ease-out flex flex-col gap-1 items-start ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(15px, 15px)", // 15px right and down
            }}
        >
            <div className="backdrop-blur-md bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-lg shadow-2xl">
                <p className="text-white font-medium whitespace-nowrap text-sm tracking-wide">
                    {hoveredProject?.title}
                </p>
            </div>
        </div>
    )
}
