import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
  tweet_content: {
    type: String,
    required: true,
  },
  twitterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  username:{
    type:String,
    ref:"User",
  },
  name:{
    type:String,
    ref:"User",
  },
  tweet_image: {
    type: String,
  },
  like_count:{
    type:Number,
    default:0,
  },
  retweet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tweet_liked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tweet_saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdTime:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let Tweet: any;

if (mongoose.modelNames().includes("Tweet")) {
  Tweet = mongoose.model("Tweet");
} else {
  Tweet = mongoose.model("Tweet", tweetSchema);
}

export default Tweet;
