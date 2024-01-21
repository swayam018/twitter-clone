import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {userName,postId}= await request.json();
        console.log(userName,postId);

        const postDetails = await User.findOne({twitterId:userName}).populate('tweets')
        return NextResponse.json({postDetails:postDetails})
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.error();
    }
}