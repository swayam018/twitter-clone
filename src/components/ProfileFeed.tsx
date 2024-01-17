
"use client"
import React, { useState } from 'react'
import Link from 'next/link'


function ProfileFeed({userdata}:any) {
   const [tabValue,setTabValue]= useState("posts");
   if(tabValue==="posts"){

   }
    return (
        <div className=' text-white bg-black w-[598px] relative border-r border-gray-500 pt-5  '>
            <nav className=' flex w-full border-b border-gray-500'>
                <button className={`feedhead  `} onClick={()=>setTabValue("posts")}><span className=' h-full border-b-4 border-primary1 py-2 px-2.5 font-bold '>Posts</span></button>
                <button className={`feedhead  `} onClick={()=>setTabValue("replies")}><span className=' h-full border-b-4 border-primary1 py-2 px-2.5 font-bold '>Replies</span></button>
                 <button className={`feedhead  `} onClick={()=>setTabValue("likes")}><span className=' h-full border-b-4 border-primary1 py-2 px-2.5 font-bold '>Likes</span></button>
                  <button className={`feedhead  `} onClick={()=>setTabValue("media")}><span className=' h-full border-b-4 border-primary1 py-2 px-2.5 font-bold '>Media</span></button>
            </nav>
        </div>
    )
}
export default ProfileFeed