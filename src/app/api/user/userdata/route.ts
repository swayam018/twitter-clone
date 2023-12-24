import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { TuserSchema } from "../../../../../type";

export async function GET(request:NextRequest){
    try {
        connects();
        const pathname = request.nextUrl.pathname;
        const mail = pathname.toString;
        const email =mail;
        if(email === undefined){
            return NextResponse.json({message:"user does not exist",status:401});
        }
        const userExist:TuserSchema = await User.findOne({email});
        if(!userExist) {
            return NextResponse.json({message:"user does not exist",status:401});
        }
        const user  = {
            user_id: userExist?._id,
            twitter_id: userExist.twitterId,
            profile_image:userExist.profile_image,
            name:userExist.name
        }
        return NextResponse.json({message:"user found",user});
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({message:"error occured"})
    }
}