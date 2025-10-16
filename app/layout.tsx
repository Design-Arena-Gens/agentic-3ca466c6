import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sunny Dogs — Hot Dog Cart',
    template: '%s — Sunny Dogs',
  },
  description: 'Gourmet street hot dogs with a smile. Find our cart, see the menu, and book events.',
  metadataBase: new URL('https://agentic-3ca466c6.vercel.app'),
  keywords: ['hot dog', 'street food', 'cart', 'catering', 'events', 'food truck'],
  openGraph: {
    title: 'Sunny Dogs — Hot Dog Cart',
    description: 'Gourmet street hot dogs with a smile.',
    url: 'https://agentic-3ca466c6.vercel.app',
    siteName: 'Sunny Dogs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunny Dogs — Hot Dog Cart',
    description: 'Gourmet street hot dogs with a smile.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
