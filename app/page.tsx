import HomePage from '@/components/HomePage'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <main >
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <HomePage />
    </main>
  )
}
