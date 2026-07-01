"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react'

// Dynamically import PDFViewer with no SSR
const PDFViewer = dynamic(() => import('./PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="animate-pulse text-muted-foreground">
        Loading PDF viewer...
      </div>
    </div>
  ),
})

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 2.0))
  }

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5))
  }

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

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-4 border border-border rounded-lg bg-card">
          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className="p-2 border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm px-3 py-1 bg-muted rounded">
              Page {pageNumber} of {numPages || '—'}
            </span>
            <button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className="p-2 border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm px-3 py-1 bg-muted rounded min-w-[4rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 2.0}
              className="p-2 border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download="Nabil_Thange_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="border border-border rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="flex justify-center overflow-x-auto">
            <PDFViewer
              scale={scale}
              pageNumber={pageNumber}
              onLoadSuccess={onDocumentLoadSuccess}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            For best experience, download the PDF or view on desktop.
          </p>
          <p className="mt-2">
            Last updated: February 2026
          </p>
        </div>

        {/* Alternative Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/about"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Learn more about my background
            </p>
          </a>
          <a
            href="/gallery"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              View my projects and work
            </p>
          </a>
          <a
            href="/contact"
            className="p-6 border border-border rounded-lg hover:border-muted-foreground transition-colors text-center"
          >
            <h3 className="font-medium mb-2">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Get in touch for opportunities
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
