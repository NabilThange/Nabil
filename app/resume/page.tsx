"use client"

import Link from "next/link"
import { Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer | React, Next.js & AI Specialist
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-6">
          <a
            href="/resume.pdf"
            download="Nabil_Thange_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer - Native Browser Viewer */}
        <div className="border border-border rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="800px"
            title="Resume PDF"
            className="w-full"
            style={{ border: "none", minHeight: "800px" }}
          />
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Using the browser's native PDF viewer for the best experience.
          </p>
          <p className="mt-2">
            Last updated: February 2026
          </p>
        </div>

        {/* Alternative Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/about"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Learn more about my background
            </p>
          </Link>
          <Link
            href="/gallery"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              View my projects and work
            </p>
          </Link>
          <Link
            href="/"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">Home</h3>
            <p className="text-sm text-muted-foreground">
              Back to homepage
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
