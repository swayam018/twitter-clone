import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
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
type TItem = {
  title: string;
  icon: string;
};

const NavigationItems = [
    {title:"Twitter",icon:FaXTwitter},
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
    <aside className=" w-72 h-full flex flex-col bg-black space-y-2">
        <div>

      {NavigationItems.map((items: any, index) => (
        <div
          key={index}
          className="flex flex-row w-fit gap-5 items-center hover:bg-gray-700/40 py-[10px] text-2xl  rounded-full mx-4 font-semibold justify-start px-5"
        >
          <div>
             <items.icon />
          </div>
          {items.title==="Twitter"?"":<div>{items.title}</div>}
        </div>
      ))}
        </div>
      <button type="button" className=" bg-primary py-[10px] text-2xl mx-4 w-52 rounded-full">Post</button>

    </aside>
  );
}

export default LeftSideBar;
