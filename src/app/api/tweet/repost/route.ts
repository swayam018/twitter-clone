import { connects } from "@/dbConfig/dbConfig";
import Tweet from "@/models/Tweet";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest  ){
    try {
        const {tweet_id,user_id} = await request.json();
        connects();
        const isTweetExist = await Tweet.findOne({_id:tweet_id});
        if(!isTweetExist){
            return NextResponse.json({message:"Tweet is not valid"});
        }
        var isLiked = false;
        await isTweetExist.retweet.map((isLiked:any)=>{
            if(isLiked.toString() ===user_id){
                isLiked = true;
            }
        })
        if(isLiked){
            const retweetPerson = await isTweetExist.retweet.filter((retweetpost:any)=>retweetpost.toString() !== user_id);
            isTweetExist.retweet=retweetPerson;
            isTweetExist.save();
            return NextResponse.json({message:"Tweet is not valid"});
        }
        await isTweetExist.retweet.push(user_id);
        await isTweetExist.save();
        return NextResponse.json({message:"Tweet is reposted successfully"});
    } catch (error:any) {
        console.log(error.message);
    }

}