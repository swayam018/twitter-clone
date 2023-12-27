import { connects } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import Tweet from "@/models/Tweet";


export async function POST(request:NextRequest){
    try {
        connects();
        const reqData = await request.json();
        const session = await getServerSession();
        if(reqData.user.email !== session?.user?.email){
            return NextResponse.json({message:"Session is invalid. Please login in again!.",status:400})
        }
        const email = reqData.user.email;
        const userExist = await User.findOne({email:email});
        if(!userExist){
            return NextResponse.json({message:"Session is invalid. Please login in again!.",status:400})
        }

        const newTweet = await new Tweet({
            tweet_content:reqData.text,
            twitterId:userExist._id,
            name:userExist.name,
            username:userExist.twitterId
        });
        
        await userExist.tweets.push(newTweet._id);
        await userExist.save();
        await newTweet.save();
        return NextResponse.json({message:"content post"});
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({message:"eroor occured"});
    }
}