"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CgPoll } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

function PostInput() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: any) => {
        setFiles(e.target.files);
        // console.log('Selected File:', selectedFile);
    };

    useEffect(() => {
        if (!files) return;
        let tmp = [];
        for (let i = 0; i < files?.length; i++) {
            tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);

        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i]);
            };
        }
    }, [files]);

    return (
        <div className=' px-4 mt-4 flex flex-row max-sm:px-2  '>
            <div className='pr-4 max-md:pr-2'>
                <Link href={'/profile'}>
                    <div className=' bg-slate-400/20  rounded-full'>
                        <div className=' w-10 h-10'></div>
                    </div>
                </Link>
            </div>
            <div className=' w-full '>
                <div className=' flex flex-col justify-start border-b border-gray-500 pb-4 flex-1'>
                    <textarea placeholder='What is happening?!' maxLength={250} minLength={1} className='outline-none bg-black text-slate-50 text-xl break-all resize-none w-full max-h-[500px] ' onChange={handleInputChange} />
                    {previews &&
                        previews.map((pic, index) => {
                            return (
                                <span key={index}>
                                    <Image src={pic} alt="sfaaf" width={100} height={100} />
                                </span>
                            )
                        })}
                    <div className=' text-primary flex gap-2 font-semibold items-center mt-2'><FaGlobeAmericas />Everyone can reply</div>
                </div>
                <div className=' flex-row flex mx-2 py-2 items-center' >
                    <div className=' text-primary flex gap-1 flex-1 max-[407px]:gap-0 '>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <div className='icons' onClick={handleButtonClick}><CiImageOn /></div>
                        <div className='icons'><MdOutlineGifBox /></div>
                        <div className='icons max-sm:hidden'><CgPoll /></div>
                        <div className='icons'><BsEmojiSmile /></div>
                        <div className='icons max-sm:hidden'><LuCalendarClock /></div>
                        <div className='icons'><IoLocationOutline /></div>
                    </div>
                    <button type="submit" className=" bg-primary py-2 px-5 text-lg  rounded-full">Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostInput