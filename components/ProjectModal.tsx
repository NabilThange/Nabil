"use client"

import { X, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import type { Project } from "./InfiniteGallery"

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShow(true)
            document.body.style.overflow = "hidden"
        } else {
            // Delay unmounting for fade out
            const timer = setTimeout(() => setShow(false), 300)
            document.body.style.overflow = ""
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!show && !isOpen) return null

    // Ensure we render something to animate out even if project is null during close
    if (!project && !show) return null

    return (
        <div
            className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white/80 hover:text-white transition-colors z-20"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {project && (
                    <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                        {/* Image Section */}
                        <div className="relative w-full aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden">
                            {/* Fallback styling for images */}
                            <img
                                src={project.src}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <h2 className="text-2xl md:text-3xl font-serif text-white font-medium">
                                        {project.title}
                                    </h2>
                                    {project.year && (
                                        <span className="text-zinc-500 font-mono text-sm border border-zinc-800 px-2 py-1 rounded">
                                            {project.year}
                                        </span>
                                    )}
                                </div>

                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>

                            <div className="pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
                                >
                                    Visit Project <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
