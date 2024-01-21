import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    connects();
    const reqData = await request.json();
    const currentUser = reqData.cuser;
    const FollowingUser = reqData.followingUser;

    console.log(currentUser,FollowingUser)
    const isUser = await User.findOne({ _id: currentUser });
    const followedUser = await User.findOne({ _id: FollowingUser});

    // console.log(isUser,followedUser)

    //is currentuser is already following user
    var isFollowing = false;
    await isUser.following.map((followings: any) => {
      console.log(followings);
        if (followings.toString()=== FollowingUser) {
        isFollowing = true;
      }
    });

    console.log("hello world");
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
  } catch (er: any) {
    console.log(er.message);
    return NextResponse.error();
  }
}
