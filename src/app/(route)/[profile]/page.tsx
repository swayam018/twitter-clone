import LeftSideBar from '@/components/LeftSideBar'
import Profile from '@/components/Profile'

import RightSideBar from '@/components/RightSideBar'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link'
import Posts from '@/components/Posts'

const ProfilePage = () => {
  const username = "afsafas";
  return (
    <div className=' text-white bg-black w-[598px] relative border-l border-r  border-gray-500 max-[725px]:w-fit max-[482px]:border-none  '>
      <header className=' sticky top-0 backdrop-blur-sm backdrop-saturate-200 bg-black/80  w-full z-50 '>
        <nav className='flex flex-row h-[53px] items-center gap-10 w-fit pl-8 pb-1'>
          <div className=' text-2xl'>
            <IoMdArrowBack />
          </div>
          <div className=' flex flex-col  text-lg'>
            <span className=' font-semibold tracking-widest '>fullName</span>
            <span className=' text-sm'>post number</span>
          </div>
        </nav>
      </header>
      <Profile />
      <div className=' text-white bg-black w-[598px] relative border-r border-gray-500 pt-5  '>
        <nav className=' flex w-full border-b border-gray-500'>
          <Link href={`/${username}`} className={`feedhead  `}><span className=' h-full border-b-4 border-primary py-2 px-2.5 font-bold '>Posts</span></Link>
          <Link href={`/${username}/replies`} className={`feedhead`}><span>Replies</span></Link>
          <Link href={`/${username}/media`} className={`feedhead `}><span>Media</span></Link>
          <Link href={`/${username}/likes`} className={`feedhead `}><span>Likes</span></Link>
        </nav>
        <Posts />
      </div>
    </div>
  )
}

export default ProfilePage