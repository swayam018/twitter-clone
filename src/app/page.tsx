import Join from '@/components/Join'
import LeftSideBar from '@/components/LeftSideBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' flex flex-row max-w-80 bg-black text-slate-50'>
      <LeftSideBar/>
    </main>
  )
}
