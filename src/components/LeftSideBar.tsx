import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
// import { RiFileList2Line } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5"; //clicked value
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { LuSquareEqual } from "react-icons/lu";
import { BsSlashSquare } from "react-icons/bs";
import { GiFeather } from "react-icons/gi";
import Link from "next/link";
type TItem = {
    title: string;
    icon: string;
};

const NavigationItems = [
    { title: "home", icon: FaXTwitter },
    { title: "Home", icon: BiHomeCircle },
    { title: "Explore", icon: IoSearchOutline },
    { title: "Notifications", icon: GrNotification },
    { title: "Messages", icon: MdMailOutline },
    { title: "Grok", icon: BsSlashSquare },
    { title: "List", icon: LuSquareEqual },
    { title: "Communities", icon: IoPeopleOutline },
    { title: "Premium", icon: FaXTwitter },
    { title: "Profile", icon: FaRegUser },
    { title: "More", icon: CgMoreO },
];

function LeftSideBar() {
    return (
        <aside className=" w-72 h-screen flex flex-col bg-black max-xl:items-end max-xl:w-fit sticky top-0 overflow-auto max-[482px]:hidden">
            <div className="flex flex-col h-full justify-between max-xl:pt-2">
            <div className="flex flex-col h-full max-sm:gap-2">
                {NavigationItems.map((items: any, index) => (
                    <Link
                        href={`/${items?.title.toLowerCase()}`}
                        key={index}
                        className="flex flex-row w-fit gap-5 items-center hover:bg-gray-700/40 py-[10px] text-2xl  rounded-full mx-4 justify-start px-5 max-xl:px-4 max-xl:py-4 max-sm:text-xl max-sm:px-2 max-sm:py-2 max-sm:ml-4  max-sm:mr-2"
                    >
                        <div>
                            <items.icon />
                        </div>
                        <div className=" max-xl:hidden">
                            {items.title === "home" ? "" : <div>{items.title}</div>}
                        </div>
                    </Link>
                ))}
                <button type="button" className=" bg-primary py-[10px] text-2xl mx-4 w-52 rounded-full my-2 max-xl:hidden ">Post</button>
                <div className="hidden max-xl:inline bg-primary py-4 text-2xl ml-4 w-fit rounded-full my-2  hover:bg-primary/40 px-4 max-sm:text-xl max-sm:px-2 max-sm:py-2">
                    < GiFeather />
                </div>
                <div className='w-10 h-10 ml-4 mr-2 hidden max-xl:inline-block'>
                <Link href={'/profile'}>
                    <div className=' bg-slate-400/20  rounded-full'>
                        <div className=' w-10 h-10'></div>
                    </div>
                </Link>
            </div>
               </div>
                <div className=" flex flex-row mx-4 rounded-full hover:bg-gray-700/40 px-4  py-1 space-x-4 items-center justify-between max-xl:hidden ">
                    <div className=" flex flex-row space-x-4 items-center ">
                        <div className=" w-10 h-10 rounded-full bg-slate-500/20 " />
                        <div className=" flex  flex-col">
                            <span>Name</span>
                            <span>username</span>
                        </div>
                    </div>
                    <div>
                        <FiMoreHorizontal />
                    </div>
                </div>
                
            </div>
        </aside>
    );
}

export default LeftSideBar;
