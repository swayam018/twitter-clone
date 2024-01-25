import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {userName,postId}= await request.json();
        const postDetails = await User.findOne({twitterId:userName}).populate('tweets');
        if(postDetails.length<=0){
            return NextResponse.error();
        }
        const postData = postDetails.tweets.filter((tweet:any)=> tweet._id.toString() === postId);
        return NextResponse.json({postDetails:postData})
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.error();
    }
}