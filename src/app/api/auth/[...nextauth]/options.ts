import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import User from "@/models/User";
import { connects } from "@/dbConfig/dbConfig";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import FacebookProvider from "next-auth/providers/facebook";

export const options: any = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    FacebookProvider({
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
      async authorize(credentials) {
        try {
            console.log("credentials");
          await connects();
          const userExist = await User.findOne({ email: credentials?.email });
          if (!userExist) {
            return NextResponse.json({
              message: "email or password is incorrect",
            });
          }
          const comparePass = await bcrypt.compare(
            credentials?.password!,
            userExist.password
          );
          if (!comparePass) {
            return NextResponse.json({
              message: "email or password is incorrect",
            });
          }
          const user = userExist.select("email _id name twitterId");
          return user;
        } catch (error) {
          console.log("something wents wrong while signin", error);
        }
      },
    }),
  ],
  session: {
    stratedy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account.provider === "credentials") {
        // console.log("asfsfj");
       console.log(profile);
      }
      try {
        await connects();
        const userExist = await User.findOne({ email: profile.email });
        if (!userExist) {
          const twitterId = profile.email.split("@")[0];
          const newUser = await new User({
            name: profile.name,
            email: profile.email,
            twitterId: twitterId,
            provider: account.provider,
          });
          await newUser.save();
        }
        return true;
      } catch (error: any) {
        console.log("here is the error", error.message);
        return false;
      }
    },
  },
};
