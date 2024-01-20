import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    connects();
    const reqData = await request.json();
    const pageType = reqData.pageType;
    const userName = reqData.userName;

    const user= await User.findOne({twitterId:userName});
    if(!user){
     return NextResponse.json({message: "User not found",status:404})
    }
    if(pageType==="posts"){
       const tweets = await User.findOne({ twitterId: userName }).populate('tweets');
       return NextResponse.json({tweets: tweets.tweets});
    }
    // else  if(pageType==="replies"){
    //     const tweets = await User.findOne({ twitterId: userName }).populate('comment_tweets');
    //     return NextResponse.json({tweets: tweets.tweets});
    //  }
     else  if(pageType==="likes"){
        const tweets = await User.findOne({ twitterId: userName }).populate('liked_tweets');
        return NextResponse.json({tweets: tweets.liked_tweets});
     }
    //  else if(pageType === "media"){
        
    //  }
     return NextResponse.json({message: "User not found",status:404})
}