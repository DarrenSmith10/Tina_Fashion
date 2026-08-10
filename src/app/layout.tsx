import '../styles/globals.css'
import { Lora } from 'next/font/google'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
// Update the import path if Navbar is located elsewhere, e.g.:
import { Navbar } from '../components/Navbar'
// Or create the Navbar component at src/components/Navbar.tsx if it doesn't exist.

//add the Lora font to your project
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}); // Specify the weights
  


// Optional: SEO metadata
export const metadata: Metadata = {
  title: 'Justina Smith',
  description: 'Fashion designer and textile artist.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  )
  
}
