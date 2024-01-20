"use client"
import React from 'react'
import Posts from './Posts'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoadingScreen from './Loading'
import Errorpage from './Error'


const getTweets = async () => {
  try {
    const data = await axios.get('/api/tweet/tweetfeed');
    return data.data.allTweets;
  } catch (error: any) {
    return null;
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
    return <Errorpage />;
  }
  if (!query.data) {
    return null;
  }

  return (
      <div className=' border-b border-gray-400'>
      {query.data.length > 0 && query.data.map((post: any, index: any) => (
        <React.Fragment key={index}>
          <Posts post={post} />
        </React.Fragment>
      ))}
      </div>
  )
}

export default FeedPage