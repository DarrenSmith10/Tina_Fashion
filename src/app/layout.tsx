import '../styles/globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
// Update the import path if Navbar is located elsewhere, e.g.:
import { Navbar } from '../components/Navbar'
// Or create the Navbar component at src/components/Navbar.tsx if it doesn't exist.

// Optional: SEO metadata
export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Creative portfolio built with Next.js 15 and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        
      </body>
    </html>
  )
  
}
