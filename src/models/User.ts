import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  twitterId: {
    type: String,
    required:true
  },
  provider:{
    type:String,
    required:true,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  password:{
    type:String
  },
  location: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  banner_image: {
    type: String,
  },
  bio: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  followers: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  following: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  follower_count: {
    type: Number,
    default: 0,
  },
  following_count: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
  liked_tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
  saved_tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
  user_type: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let User: any;

if (mongoose.modelNames().includes("User")) {
    User = mongoose.model("User");
  } else {
    User = mongoose.model("User", userSchema);
}

export default User;
