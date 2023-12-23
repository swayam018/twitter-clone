import BottomBar from '@/components/BottomBar'
import FeedPage from '@/components/FeedPage'
import Join from '@/components/Join'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>Landing page
       <Link href={'/login'}>Login</Link>
    </div>
  )
}
