import Profile from '@/components/Profile'
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
    </div>
  )
}

export default ProfilePage