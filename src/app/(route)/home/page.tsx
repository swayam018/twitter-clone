import FeedPage from '@/components/FeedPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options';
// import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

async function  HomePage() {
  // const router = useRouter();
  const session =  await getServerSession(options);
   if(!session){
    redirect('/login')
   }
  return (
        <FeedPage />
  )
}

export default HomePage