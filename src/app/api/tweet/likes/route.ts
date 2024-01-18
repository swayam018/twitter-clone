import { connects } from "@/dbConfig/dbConfig";
import Tweet from "@/models/Tweet";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { tweet_id, user_id } = await request.json();
    connects();
    const isTweetExist = await Tweet.findOne({ _id: tweet_id });
    const LikeUser = await User.findOne({_id:user_id});
    if (!isTweetExist) {
      return NextResponse.json({ message: "Tweet is not valid" });
    }
    var isLiked = false;
    await isTweetExist.tweet_liked.map((liked: any) => {
      if (liked.toString() === user_id) {
        isLiked = true;
      }
    });
    if (isLiked) {
      const LikedPerson = await isTweetExist.tweet_liked.filter((liked_users: any) => liked_users.toString() !== user_id );
      isTweetExist.tweet_liked = LikedPerson;
      const tweetLike = await User.liked_tweets.filter((liked_users: any) => liked_users.toString() !== tweet_id );
      LikeUser.liked_tweets=tweetLike;
      isTweetExist.save();
      LikeUser.save();
      return NextResponse.json({ message: "Tweet is disliked successfully" });
    }
    await isTweetExist.tweet_liked.push(user_id);
    await LikeUser.liked_tweets.push(tweet_id);
    await LikeUser.save();
    await isTweetExist.save();
    return NextResponse.json({ message: "Tweet is liked successfully" });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: "Tweet is liked failed" });
  }
}
