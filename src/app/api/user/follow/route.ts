import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    connects();
    const reqData = await request.json();
    const currentUser = reqData.fuser;
    const FollowingUser = reqData.followingUser;

    const isUser = await User.findOne({ _id: currentUser });
    const followedUser = await User.findOne({ _id: FollowingUser});

    //is currentuser is already following user
    var isFollowing = false;
    await isUser.following.map((following: any) => {
        if (following.toString()=== FollowingUser) {
        isFollowing = true;
      }
    });

    if (isFollowing) {
      const cUser = await isUser.following.filter(
        (isfollowing: any) => isfollowing.toString() !== FollowingUser,
      );
      const FollowedUser = await followedUser.followers.filter(
        (isfollowing: any) => isfollowing.toString() !== currentUser,
      );
      followedUser.followers = FollowedUser;
      followedUser.save();
      isUser.following = cUser;
      isUser.save();
      return NextResponse.json({ message: "User is unfollowed now" });
    }

    //adding following and followers into database
    await isUser.following.push(FollowingUser);
    await followedUser.followers.push(currentUser);
    await followedUser.save();
    await isUser.save();
    return NextResponse.json({ message: "follwing the user now" });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: "error occured" });
  }
}
