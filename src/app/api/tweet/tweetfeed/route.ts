import { connects } from "@/dbConfig/dbConfig";
import Tweet from "@/models/Tweet";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
   try{
    connects();
    const allTweets = await Tweet.find({});
    return NextResponse.json({message:"All Tweets",allTweets});
   }
   catch(error:any){
    console.log(error.message);
    return NextResponse.json({message:error.message,status:505});
   }
}