import FeedPage from '@/components/FeedPage'
import Join from '@/components/Join'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' flex bg-black items-center justify-center text-white w-full'>
      <div className=' flex w-[1240px] h-full relative justify-center'>
        <LeftSideBar />
        <FeedPage />
        <RightSideBar/>
      </div>
    </main>
  )
}
