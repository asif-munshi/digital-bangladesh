import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Layout/Navbar'
import TRPCTanstackProvider from './providers/TanstackProvider'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Digital Marketplace',
  description: 'Created by Asif Munshi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <TRPCTanstackProvider>
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
          </TRPCTanstackProvider>
        </main>
      </body>
    </html>
  )
}
