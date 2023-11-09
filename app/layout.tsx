import type { Metadata } from 'next'

import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["sans-serif"]
})




export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-slate-800 h-full relative`}>{children}</body>
    </html>
  )
}
