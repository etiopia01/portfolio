import HomePage from '@/components/HomePage'
import NavBar from '@/components/NavBar'
import SocialBar from '@/components/SocialBar'



export default function Home() {
  return (
    <main className='h-full'>
      <NavBar/>
      <HomePage />
      
      <SocialBar/>
    </main>
  )
}
