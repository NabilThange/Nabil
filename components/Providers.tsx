"use client"

import React from "react"
import { SoundProvider } from "@/context/SoundContext"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SoundProvider>
            {children}
        </SoundProvider>
    )
}
