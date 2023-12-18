import React from 'react'
import { BiHomeCircle } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { GrNotification } from "react-icons/gr";
type TItem = {
    title:string,
    icon:string
}

const NavigationItems = [{ title: "Home", icon: BiHomeCircle },
 { title: "Explore", icon: GrNotification },
  { title: "Notifications", icon: BiHomeCircle },
   {title:"Messages", icon: HiOutlineHashtag},
{title:"Bookmarks", icon: HiOutlineHashtag},{title:"Twiiter Blue", icon: HiOutlineHashtag},{title:"Profile", icon: HiOutlineHashtag},{title:"More", icon:HiOutlineHashtag}]

function LeftSideBar() {
    return (
        <aside className=' w-72 h-screen flex flex-col space-y-2 bg-gray-500'>
            {NavigationItems.map((items:any,index)=>(

                <div key={index} className='flex flex-row space-x-2 items-center bg-slate-500 hover:bg-black px-4 py-2 text-xl rounded-full mx-4'>
                    <items.icon/>
                    <span>{items.title}</span>
                </div>
            ))}
        </aside>
    )
}

export default LeftSideBar