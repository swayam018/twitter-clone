"use client"
import React from 'react'
import Header from './Header'
import PostInput from './PostInput'
import Posts from './Posts'
import BottomBar from './BottomBar'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoadingScreen from './Loading'
import Errorpage from './Error'


const getTweets = async () => {
  try {
    const data = await axios.get('/api/tweet/tweetfeed')
    return data.data.allTweets;
  } catch (error: any) {
    console.log(error.message)
  }
}
function FeedPage() {

  const query = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets,
  });
  if (query.isLoading) {
    return <LoadingScreen />
  }

  if (query.error) {
    // console.error('Error fetching tweets:', query.error);
    return <Errorpage />;
  }

  if (!query.data) {
    return null;
  }

  return (
    <main className=' text-white bg-black w-[598px] relative border-l border-r border-gray-500 max-[725px]:w-fit max-[482px]:border-none '>
      <Header />
      <PostInput />
      <BottomBar />
      {query.data.length > 0 && query.data.map((post: any, index: any) => (
        <React.Fragment key={index}>
          <Posts post={post} />
        </React.Fragment>
      ))}
    </main>
  )
}

export default FeedPage