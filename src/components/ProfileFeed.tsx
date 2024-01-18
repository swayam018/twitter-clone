"use client"
import React, { useRef, useState } from 'react'
import Posts from './Posts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const feedData = async (tabValue:string,userdata:any) => {
    try {
        const postData = await axios.post('/api/user/profilefeed',{pageType:tabValue,userName:userdata.twitterId}).then((resp:any)=> resp);
        return postData.data;
    }
    catch (error: any) {
        console.log(error.message);
        return null;
    }
}


function ProfileFeed({ userdata }: any) {
    const [tabValue, setTabValue] = useState("posts");
    const showTabValue = useRef([]);
    const data = useQuery({
        queryKey: ["feedPosts", userdata.twitterId,tabValue],
        queryFn: () => feedData(tabValue,userdata)
    })
    if (tabValue === "posts" || tabValue==='likes') {
        if(data.data){
            showTabValue.current=data.data?.tweets;
            console.log(showTabValue.current);
        }
    }
    return (
        <div className=' text-white bg-black w-[598px] relative border-r border-gray-500 pt-5  '>
            <nav className=' flex w-full border-b border-gray-500'>
                <button className={`feedhead  `} onClick={() => setTabValue("posts")}><span className={` h-full  py-2 px-2.5 font-bold ${tabValue === "posts" ? "border-b-4 border-primary1" : ""} `}>Posts</span></button>
                <button className={`feedhead  `} onClick={() => setTabValue("replies")}><span className={` h-full  py-2 px-2.5 font-bold ${tabValue === "replies" ? "border-b-4 border-primary1" : ""} `}>Replies</span></button>
                <button className={`feedhead `} onClick={() => setTabValue("likes")}><span className={` h-full  py-2 px-2.5 font-bold ${tabValue === "likes" ? "border-b-4 border-primary1" : ""} `}>Likes</span></button>
                <button className={`feedhead  `} onClick={() => setTabValue("media")}><span className={` h-full  py-2 px-2.5 font-bold ${tabValue === "media" ? "border-b-4 border-primary1" : ""}`} >Media</span></button>
            </nav>

            {tabValue === "posts" && showTabValue.current.length>0  && (
                <>
                   {showTabValue.current.map((post: any) => {
                        return <React.Fragment key={post._id}>
                            <Posts post={post} />
                        </React.Fragment>
                    })}
                </>
            )}
            {tabValue === "replies" && showTabValue.current.length>0  && (
                <>
                  {showTabValue.current.map((post: any) => {
                        return <React.Fragment key={post._id}>
                            <Posts post={post} />
                        </React.Fragment>
                    })}
                </>
            )}
          
            {tabValue === "media" && showTabValue.current.length>0  && (
                <>
                    {showTabValue.current.map((post: any) => {
                        return <React.Fragment key={post._id}>
                            <Posts post={post} />
                        </React.Fragment>
                    })}
                </>
            )}

        </div>
    )
}
export default ProfileFeed