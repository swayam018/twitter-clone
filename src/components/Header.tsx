import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
function Header() {
  return (
    <header className=' sticky top-0 backdrop-blur-sm backdrop-saturate-200 border-b border-gray-500 bg-black/80 '>
        <nav className='flex flex-row h-[53px]'>
            <div className=' flex-1 text-center hover:bg-gray-700/40 flex items-center justify-center font-semibold '>For you</div>
            <div className=' flex-1 hover:bg-gray-700/40 flex items-center justify-center font-semibold'>Following</div>
            <div className=' flex-none hover:bg-gray-700/40 w-10 flex items-center justify-center '><IoSettingsOutline/></div>
        </nav>
    </header>
  )
}

export default Header