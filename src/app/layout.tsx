import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import NetworkBackground from '@/components/NetworkBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santhi Sowjanya Chokka | Full Stack Developer',
  description: 'Portfolio of Santhi Sowjanya Chokka, a Full Stack Developer with expertise in React, Next.js, Python, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#050505] text-white antialiased min-h-screen flex flex-col relative`}>
        <NetworkBackground />
        <Navbar />
        <main className="flex-grow flex flex-col pt-20 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
