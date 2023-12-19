"use client"
import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CgPoll } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import Link from 'next/link';

function PostInput() {

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    return (
        <div className=' px-4 mt-4 flex flex-row '>
            <div className='  w-20 pt-4'>
                <Link href={'/profile'} className=" rounded-full bg-slate-400/20 px-5 py-4" ></Link>
            </div>
            <div className=' w-full '>
                <div className=' flex flex-col justify-start border-b border-gray-500 pb-4 flex-1'>
                    <textarea placeholder='What is happening?!' maxLength={250} minLength={1} className='outline-none bg-black text-slate-50 text-xl break-all resize-none w-full max-h-[500px] ' onChange={handleInputChange} />
                    <div className=' text-primary flex gap-2 font-semibold items-center'><FaGlobeAmericas />Everyone can reply</div>
                </div>
                <div className=' flex-row flex mx-2 py-2 items-center' >
                    <div className=' text-primary flex gap-1 flex-1'>
                        <div className='icons'><CiImageOn /></div>
                        <div className='icons'><MdOutlineGifBox /></div>
                        <div className='icons'><CgPoll /></div>
                        <div className='icons'><BsEmojiSmile /></div>
                        <div className='icons'><LuCalendarClock /></div>
                        <div className='icons'><IoLocationOutline /></div>
                    </div>
                    <button type="submit" className=" bg-primary py-2 px-5 text-lg  rounded-full">Post</button>
                </div>
            </div>
        </div   >
    )
}

export default PostInput