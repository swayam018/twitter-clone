import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        connects();
        const reqData = await request.json();
        const uname = reqData.username;
        const userExist = await User.findOne({twitterId:uname});
        if(!userExist){
            return NextResponse.json({message:"User does not exist.",status:400});
        }
        const user = {
            _id:userExist._id,
            name:userExist.name,
            twitterId:userExist.twitterId,
            location:userExist.location,
            profile_image:userExist.profile_image,
            banner_image:userExist.banner_image,
            bio:userExist.bio,
            birthday:userExist.birthday,
            followers:userExist.followers,
            following:userExist.following,
            createdTime:userExist.createdTime,
            // tweets:userExist.tweets
        }

        return NextResponse.json({message:"user found",user,status:200});
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({message:"error occured"})
    }
}