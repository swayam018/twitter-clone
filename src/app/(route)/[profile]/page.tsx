import LeftSideBar from '@/components/LeftSideBar'
import Profile from '@/components/Profile'
import ProfileFeed from '@/components/ProfileFeed'
import RightSideBar from '@/components/RightSideBar'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const ProfilePage = () => {
  return (
    <div  className=' text-white bg-black w-[598px] relative border-l border-r  border-gray-500 max-[725px]:w-fit max-[482px]:border-none  '>
       <header className=' sticky top-0 backdrop-blur-sm backdrop-saturate-200 bg-black/80  w-full z-50 '>
        <nav className='flex flex-row h-[53px] items-center gap-10 w-fit pl-8 pb-1'>
          <div className=' text-2xl'>
          <IoMdArrowBack/>
          </div>
          <div className=' flex flex-col  text-lg'>
            <span className=' font-semibold tracking-widest '>fullName</span>
            <span className=' text-sm'>post number</span>
          </div>
        </nav>
      </header>
      <Profile/>
      <ProfileFeed/>
    </div>
  )
}

export default ProfilePage