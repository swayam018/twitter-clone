import Link from 'next/link'
import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { CgPoll } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";
function Posts() {
    return (
        <div className='flex flex-row py-4 px-4 gap-4 border-t border-gray-400'>
            <div className=''>
                <Link href={'/profile'}>
                    <div className='px-5 py-4 bg-slate-400/20  rounded-full'>
                        ad
                    </div>
                </Link>
            </div>
            <div className=' w-full'>
                <div className=' flex flex-row justify-between w-full items-center h-fit'>
                    <div className='flex flex-row'>
                        <div>Trininty1x </div>
                        <div>usernameislong </div>
                        <div>aks 34,4242 </div>
                    </div>
                    <div>
                        <FiMoreHorizontal />
                    </div>
                </div>

                <div >
                    <pre>sjafk fsafasf
                        fsf
                        asljfka
                        faskfl</pre>
                    jsakfja
                    skjsl
                </div>

                <div className=' flex flex-row justify-between w-full items-center mt-2'>
                    <div className=' text-gray-400  hover:text-primary flex items-center gap-1 '>
                        <div className='px-2 py-2 rounded-full text-xl hover:bg-primary/20 '> <BiMessageRounded /></div>
                        <span>10</span>
                    </div>
                    <div className=' text-gray-400 hover:text-green-400 flex items-center '>
                        <div className='px-2 py-2 rounded-full text-xl hover:bg-green-400/20  '><FaRetweet /></div>
                        <span>10</span>
                    </div>
                    <div className=' text-gray-400 hover:text-red-400 flex items-center ' >
                        <div className='px-2 py-2 rounded-full text-xl hover:bg-red-400/20  '><GrFavorite /></div>
                        <span>10</span>
                    </div>
                    <div className=' text-gray-400 hover:bg-primary/20 hover:text-primary items-center text-xl flex px-2 py-2 rounded-full'>
                        <CgPoll />
                    </div>
                    <div className='text-gray-400 items-center text-xl flex '>
                        <div className='hover:bg-primary/20 hover:text-primary flex px-2 py-2 rounded-full'>
                            <IoBookmarkOutline />
                        </div>
                        <div className='hover:bg-primary/20 hover:text-primary flex px-2 py-2 rounded-full'>
                            <FiUpload />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Posts