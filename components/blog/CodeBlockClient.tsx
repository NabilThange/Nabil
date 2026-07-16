"use client"

import dynamic from "next/dynamic"
import { CodeBlockProps } from "./CodeBlock"

// Client-side wrapper for CodeBlock to avoid SSR hydration issues with Shiki
const CodeBlockClient = dynamic<CodeBlockProps>(
  () => import("./CodeBlock").then(mod => mod.CodeBlock),
  {
    ssr: false,
    loading: () => (
      <pre className="animate-pulse bg-muted/50 rounded-lg p-4 min-h-[100px] overflow-x-auto" />
    ),
  }
)

export { CodeBlockClient }