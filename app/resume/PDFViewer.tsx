"use client"

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import './resume-pdf.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  scale: number
  pageNumber: number
  onLoadSuccess: ({ numPages }: { numPages: number }) => void
}

export default function PDFViewer({ scale, pageNumber, onLoadSuccess }: PDFViewerProps) {
  const [error, setError] = useState<string | null>(null)

  return (
    <Document
      file="/resume.pdf"
      onLoadSuccess={onLoadSuccess}
      onLoadError={(error) => {
        console.error('PDF Load Error:', error)
        setError(error.message || 'Unknown error')
      }}
      loading={
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="animate-pulse text-muted-foreground">
            Loading resume...
          </div>
        </div>
      }
      error={
        <div className="flex flex-col items-center justify-center min-h-[600px] p-8">
          <p className="text-red-500 mb-4">Failed to load PDF</p>
          {error && (
            <p className="text-xs text-muted-foreground mb-4 font-mono bg-muted p-2 rounded">
              Error: {error}
            </p>
          )}
          <p className="text-sm text-muted-foreground mb-4">
            Please download the resume instead
          </p>
          <a
            href="/resume.pdf"
            download="Nabil_Thange_Resume.pdf"
            className="px-4 py-2 bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
      }
    >
      <Page
        pageNumber={pageNumber}
        scale={scale}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        className="mx-auto"
      />
    </Document>
  )
}
