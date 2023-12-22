import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { connects } from "@/dbConfig/dbConfig";

export async function POST(request:NextRequest){
   try {
       const { email,password,username ,name} = await request.json();
       await connects();
    const userExist = await User.findOne({email});
    if(userExist){
        return NextResponse.json({message:"User is already exists"});
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    const twitterId = email.split("@")[0]
    
    const newUser = await new User({
        name:name,
        email:email,
        password:hashPassword,
        twitterId:username || twitterId,
        provider:"credentials"
    }) 
    await newUser.save();

    return NextResponse.json({message:"User is created successfully",status:200});
   } catch (error:any) {
    console.log("while creating user failed",error.message);
    return NextResponse.json({message:"Something went wrong while creating",status:400});
   }
}