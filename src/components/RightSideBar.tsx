import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";

async function RightSideBar() {

  return (
    <div className=' w-[350px] pl-4 flex flex-col gap-4 max-[1070px]:w-[280px] max-[1025px]:hidden relative'>
     <div className=' w-full sticky top-0 bg-black py-4 z-40'>
     <div className=' w-full flex-row flex gap-4 items-center justify-start py-2 bg-gray-500/40 px-4 rounded-full sticky top-0 bg-black'>
        <IoSearchOutline />
        <input type='text' placeholder='Search' className=' outline-none bg-transparent text-lg  ' />
      </div>
     </div>
      <div className=' w-full flex-col flex gap-4 items-start justify-start py-2 bg-gray-500/40 px-4 rounded-lg '>
        <h1>Subscribe to Premium</h1>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button type="button" className=" bg-primary1 py-2 text-lg px-5 rounded-full ">Subscribe</button>
      </div>

        <div className=' w-full flex-col flex gap-4 items-start justify-start py-2 bg-gray-500/40 px-4 rounded-lg '> {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className='flex flex-row items-start'>
            <div>
              <div>Sports Trending</div>
              <div>Siraj</div>
              <div>Trending with 24.75cr ,Chinaswamy</div>
            </div>
            <div>
              <FiMoreHorizontal />
            </div>
          </div>
        ))}
        </div>
        <div className='sticky top-20 '> <div className=' w-full flex-col flex gap-4 items-start justify-start py-2 bg-gray-500/40 px-4 rounded-lg'>
          <h1>who to follow</h1>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar