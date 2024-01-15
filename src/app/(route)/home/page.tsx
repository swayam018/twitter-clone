import FeedPage from '@/components/FeedPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options';
import axios from 'axios';
import Header from '@/components/Header';
import PostInput from '@/components/PostInput';
import BottomBar from '@/components/BottomBar';
import { redirect } from 'next/navigation';
async function HomePage() {
  const session: any = await getServerSession(options);
  if(!session){
    redirect('/login');
  }
  return (
    <main className=' text-white bg-black w-[598px] relative border-l border-r border-gray-500 max-[725px]:w-fit max-[482px]:border-none '>
      <Header />
      <PostInput />
      <BottomBar />
      <FeedPage />
    </main>
  )
}

export default HomePage