"use client"
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { BsBalloon } from "react-icons/bs";
import { RiLinkM } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { usePathname } from 'next/navigation';

function Profile() {
  
  return (
    <div className='text-white bg-black w-[598px] relative border-r border-gray-500 '>
      <div>
        <div className=' w-full h-52 bg-gray-800'>
        </div>
      </div>
      <div>
        <div className=' h-fit w-full relative px-8'>
          <div className=' w-32 h-32 rounded-full border-4 border-black absolute inset-x-10 inset-y-[-70px] bg-gray-800'>
          </div>
          <div className=' h-16 py-4 flex justify-end items-start'>
            <button className=' border border-white hover:bg-slate-800 px-4 py-2 rounded-full'>Edit profile</button>
            {/* <button className=' bg-white text-black font-semibold hover:bg-slate-100/80 px-4 py-2 rounded-full'>Edit profile</button> */}
          </div>
          <div className=' h-full flex flex-col gap-4 pt-2'>
            <div className=''>
              <h1 className=' text-xl font-semibold tracking-widest'>UserName</h1>
              <span>@twitterid</span>
            </div>
            <div className=' h-fit w-full text-base font-thin'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ducimus nobis vitae. Deserunt earum nisi reiciendis laudantium quibusdam numquam exercitationem?
            </div>
            <div className=' flex flex-wrap justify-start leading-2 text-gray-500'>
              <span className='usertag'><IoLocationOutline />loaction</span>
              <span className='usertag'><RiLinkM />websitedomain</span>
              <span className='usertag'><CgCalendarDates />joined data</span>
              <span className='usertag'><BsBalloon />birth date</span>
              <span className='usertag'><MdOutlineWorkOutline />interested topic</span>
            </div>
            <div className=' flex gap-4'>
              <span>following number</span>
              <span>follower number</span>
            </div>
            <div>
              Followed by someone anyone
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Profile