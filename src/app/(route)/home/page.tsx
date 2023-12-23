import FeedPage from '@/components/FeedPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { error } from 'console';

async function  HomePage() {
  const session:any =  await getServerSession(options);
  // console.log(session);
   if(!session){
    redirect('/login')
   }
  return (
        <FeedPage  />
  )
}

export default HomePage