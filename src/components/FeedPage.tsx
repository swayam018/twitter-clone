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
    const data = await axios.get('/api/tweet/tweetfeed');
    return data.data.allTweets;
  } catch (error: any) {
    console.log(error.message);
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
    // console.error('Error fetching tweets:', query.error);
    return <Errorpage />;
  }

  if (!query.data) {
    return null;
  }

  return (
     <>
      {query.data.length > 0 && query.data.map((post: any, index: any) => (
        <React.Fragment key={index}>
          <Posts post={post} />
        </React.Fragment>
      ))}
     </>
  )
}

export default FeedPage