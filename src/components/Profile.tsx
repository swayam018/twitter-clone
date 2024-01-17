"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { BsBalloon } from "react-icons/bs";
import { RiLinkM } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useMutation, useQueryClient, } from '@tanstack/react-query'
import axios from 'axios';
import Link from 'next/link';

type TSession = {
  email: string;
  id: string;
  name: string;
  provider: string;
  username: string
}

function Profile({ profile }: any) {
  const [isFollowing, setIsfollowing] = useState(false);
  const [isSession, setSession] = useState(false);
  const [login, setLogin] = useState(true);
  const isUser = useRef(false);
  const { data: session }: any = useSession();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (session) {
      setSession(true)
      if (profile._id === session?.user?.id) {
        console.log("this is called again");
        isUser.current = true;
      }
      profile.followers.map((followersid: any) => { 
        if (followersid.toString() === session.user?.id) {
          console.log("running time")
          setIsfollowing(true)
        }
      })
    }
  }, [])

  const editProfileHandler = () => { }
  const followandunfollowHandler = useMutation({
    mutationFn: async () => {
      await axios.post('/api/user/follow', { followingUser: profile._id, cuser: session?.user?.id }).then((response) => response.data).catch((error: any) => {
        if (session) {
          if (profile._id === session?.user?.id) {
            console.log("this is called again");
            isUser.current = true;
          }
          profile.followers.map((followersid: any) => {
            if (followersid.toString() === session.user?.id) {
              setIsfollowing(true);
            }
          })
        }
      })
    }
  });

  return (
    <div className='text-white bg-black w-[598px] relative border-r border-gray-500 '>
      {!login && (
        <div className=' w-full h-full bg-black/80 absolute z-50 flex justify-center items-center'>
          <div className='w-80 h-52 bg-gray-800 rounded-lg flex flex-col gap-5 justify-center items-center relative'>
            <div className=' absolute top-4 right-4 bg-gray-400 rounded-full px-2 cursor-pointer' onClick={() => setLogin(true)}>X</div>
            <h1 >If You Want to Follow</h1>
            <div>Please Signin</div>
            <Link href={'/login'} className=" text-white text-lg px-4 py-2 rounded-full font-semibold text-center bg-primary1 " >Sign in</Link>
          </div>
        </div>
      )}
      <div>
        <div className=' w-full h-52 bg-gray-800'>
          <Image src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} width={400} height={128} alt='profile image' className=' overflow-hidden w-full h-52 object-cover' />
        </div>
        <div className='text-white bg-black w-[598px] relative border-r border-gray-500 '>
          <div>
            <div className=' w-full h-52 bg-gray-800'>
              <Image src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} width={400} height={128} alt='profile image' className=' overflow-hidden w-full h-52 object-cover' />
            </div>
          </div>
          <div>
            <div className=' h-fit w-full relative px-8'>
              <div className=' w-32 h-32 rounded-full border-4 border-black absolute inset-x-10 inset-y-[-70px] overflow-hidden'>
                <Image src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} width={128} height={128} alt='profile image' className=' overflow-hidden' />
              </div>
              <div className=' h-16 py-4 flex justify-end items-start'>
                {isUser.current ? <button className=' border border-white hover:bg-slate-800 px-4 py-2 rounded-full' onClick={editProfileHandler}>Edit profile </button> : isFollowing ? <button className=' bg-primary1 text-black font-semibold hover:bg-slate-100/80 px-4 py-2 rounded-full' onClick={() => followandunfollowHandler.mutate()}>UnFollow</button> : <button className=' bg-primary1 text-black font-semibold hover:bg-slate-100/80 px-4 py-2 rounded-full' onClick={() => followandunfollowHandler.mutate()}>Follow</button>}
              </div>
              <div className=' h-full flex flex-col gap-4 pt-2'>
                <div className=''>
                  <h1 className=' text-2xl font-semibold tracking-widest'> {profile.name} </h1>
                  <span>@{profile.twitterId}</span>
                </div>
                <div className=' h-fit w-full text-base font-thin'>
                  {profile.bio}
                </div>
                <div className=' flex flex-wrap justify-start leading-2 text-gray-500'>
                  {profile.location && (
                    <span className='usertag'><IoLocationOutline />{profile.location}</span>
                  )}
                  {/* <span className='usertag'><RiLinkM />websitedomain</span> */}
                  {/* <span className='usertag'><CgCalendarDates /> Joined on {profile.createdTime.split(',')[0]}</span> */}
                  {profile.birthday && <span className='usertag'><BsBalloon />{profile.birthday}</span>}
                  {/* <span className='usertag'><MdOutlineWorkOutline />interested topic</span> */}
                </div>
                <div className=' flex gap-4'>
                  <div className=' flex gap-2 items-center'>
                    <span className=' font-bold text-xl '>{profile.following.length}</span>
                    <span className=' font-thin text-base'>Following</span>
                  </div>
                  <div className=' h-fit w-full text-base font-thin'>
                    {profile.bio}
                  </div>
                  <div className=' flex flex-wrap justify-start leading-2 text-gray-500'>
                    {profile.location && (
                      <span className='usertag'><IoLocationOutline />{profile.location}</span>
                    )}
                    <span className='usertag'><RiLinkM />websitedomain</span>
                    <span className='usertag'><CgCalendarDates /> Joined on {profile.createdTime.split(',')[0]}</span>
                    {profile.birthday && <span className='usertag'><BsBalloon />{profile.birthday}</span>}
                    <span className='usertag'><MdOutlineWorkOutline />interested topic</span>
                  </div>
                  <div className=' flex gap-4'>
                    <div className=' flex gap-2 items-center'>
                      <span className=' font-bold text-xl '>{profile.following.length}</span>
                      <span className=' font-thin text-base'>Following</span>
                    </div>
                    <div className=' flex gap-2 items-center'>
                      <span className=' font-bold text-xl '>{profile.followers.length}</span>
                      <span className=' font-thin text-base'>Followers</span>
                    </div>
                  </div>
                  <div>
                    Followed by someone anyone
                    <div className=' flex gap-2 items-center'>
                      <span className=' font-bold text-xl '>{profile.followers.length}</span>
                      <span className=' font-thin text-base'>Followers</span>
                    </div>
                  </div>
                  <div>
                    Followed by someone anyone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;