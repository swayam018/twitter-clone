import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import User from "@/models/User";
import { connects } from "@/dbConfig/dbConfig";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import FacebookProvider, {
  FacebookProfile,
} from "next-auth/providers/facebook";

export const options: any = {
  providers: [
    GithubProvider<GithubProfile>({
      async profile(profile) {
        try {
          await connects();
          const userExist = await User.findOne({ email: profile.email });
          if (!userExist) {
            const twitterId = profile.email!.split("@")[0];
            const newUser = await new User({
              name: profile.name,
              email: profile.email,
              twitterId: twitterId,
              provider: "Github",
              isVerified: true,
            });
            await newUser.save();
            return {id:newUser._id.toString()  , email: newUser.email,name:newUser.name,image:newUser.profile_image,username:newUser.twitterId};
          }
          return {id:userExist._id.toString()  ,email:userExist.email,name:userExist.name,image:userExist.image,username:userExist.twitterId};
        } catch (error: any) {
          console.log("here is the error", error.message);
          return error.message;
        }
      },
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    FacebookProvider<FacebookProfile>({
      async profile(profile) {
        try {
          await connects();
          const userExist = await User.findOne({ email: profile.email });
          if (!userExist) {
            const twitterId = profile.email!.split("@")[0];
            const newUser = await new User({
              name: profile.name,
              email: profile.email,
              twitterId: twitterId,
              provider: "facebook",
            });
            await newUser.save();
            return {id:newUser._id.toString()  , email: newUser.email,name:newUser.name,image:newUser.profile_image,username:newUser.twitterId};
          }
          return {id:userExist._id.toString()  ,email:userExist.email,name:userExist.name,image:userExist.image,username:userExist.twitterId};
        } catch (error: any) {
          console.log("here is the error", error.message);
          return error.message;
        }
      },
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        try {
          await connects();
          const userExist = await User.findOne({ email: credentials?.email });
          if (!userExist) {
            return null; 
          }
          const comparePass = await bcrypt.compare(
            credentials?.password!,
            userExist.password
          );
          if (!comparePass) {
            return null; 
          }
          const { _id, email, name, image, twitterId } = userExist.toObject();
          return { id: _id.toString(), email, name, image, username: twitterId };
        } catch (error) {
          console.log("something went wrong while signing in", error);
          return null; 
        }
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy:"jwt"
  },
  callbacks: {
    async jwt({ token,account,user }: any) {
      if(account?.provider){
        token.provider = account?.provider
      }
      if(user){
        return {...token,email:user.email,id:user.id,name:user.name,image:user.image,username:user.username}
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.provider = token.provider;
        session.user.id=token.id;
        session.user.email=token.email;
        session.user.name=token.name;
        session.user.image=token.image;
        session.user.username=token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
