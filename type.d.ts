export type TuserSchema={
    name?:string,
    email?:string,
    twitterId?:string,
    location?:string,
    profile_image?:string,
    banner_image?:string,
    bio?:string,
    birthday?:Date,
    followers?:string,
    following?:string,
    follower_count?:number,
    following_count?:number,
    role?:string,
    tweets?:[string],
    liked_tweet?:[string],
    saved_tweet?:[string],
    createdAt?:Date
}