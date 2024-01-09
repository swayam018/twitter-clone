import FeedPage from '@/components/FeedPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import axios from 'axios';
import {HoverCard, HoverCardTrigger, HoverCardContent} from '@/components/ui/hover-card';
async function  HomePage() {
  const session:any =  await getServerSession(options);
  
  return (
        <FeedPage  />
  )
}

export default HomePage