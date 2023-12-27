import { connects } from "@/dbConfig/dbConfig";
import Tweet from "@/models/Tweet";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { tweet_id, user_id } = await request.json();
    connects();
    const isTweetExist = await Tweet.findOne({ _id: tweet_id });
    if (!isTweetExist) {
      return NextResponse.json({ message: "Tweet is not valid" });
    }
    var isLiked = false;
    await isTweetExist.tweet_liked.map((isliked: any) => {
      if (isliked.toString() === user_id) {
        isLiked = true;
      }
    });
    if (isLiked) {
      const LikedPerson = await isTweetExist.tweet_liked.filter((liked_users: any) => liked_users.toString() !== user_id );
      isTweetExist.tweet_liked = LikedPerson;
      isTweetExist.save();
      return NextResponse.json({ message: "Tweet is not valid" });
    }
    await isTweetExist.tweet_liked.push(user_id);
    await isTweetExist.save();
    return NextResponse.json({ message: "Tweet is liked successfully" });
  } catch (error: any) {
    console.log(error.message);
  }
}
