"use client"
import axios from 'axios';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function PostPage() {
  const path = usePathname();
  const [postData,setPostData] = useState();
  const newPath =path.split('/')

  useEffect(()=>{
    const fetchData = async()=>{
      const postDetails = await axios.post('/api/tweet/postdetails',{userName:newPath[1],postId:newPath[3]}).then((resp)=>resp.data).catch((error)=>{console.log(error.message);return null});
      setPostData(postDetails);
    }
    fetchData();
  },[newPath])

  console.log(postData);
  return (
    <div
      className={` text-white bg-black w-[598px] relative border-l border-r  border-gray-500 max-[725px]:w-fit max-[482px]:border-none`}
    >
    </div>
  )
}

export default PostPage