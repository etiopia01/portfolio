import type { Metadata } from 'next'

import './globals.css'
import { Lora } from 'next/font/google'
import NavBar from '@/components/NavBar'
import SocialBar from '@/components/SocialBar'

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["sans-serif"]
})




export const metadata: Metadata = {
  title: 'Very very cool Portfolio',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${lora.className} bg-main-bg background h-full relative flex flex-col justify-center items-center`}>{children}</body>
      
    </html>
  )
}
