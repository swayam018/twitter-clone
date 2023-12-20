import GithubProvider, { GithubProfile } from 'next-auth/providers/github';
import User from '@/models/User';
import { connects } from '@/dbConfig/dbConfig';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { TuserSchema} from '../../../../../type'
import { OAuthConfig } from 'next-auth/providers/oauth';
export const options = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    callbacks:{
        async signIn({profile}:any){
            console.log(profile);
            try {
                await connects();

                const userExist = await User.findOne({email:profile.email})
                if(!userExist){
                    const newUser = await User.create({
                        name:profile.name,
                        email:profile.email,
                    });
                }
                return true
            } catch (error) {
                console.log("here is the error");
                return false;
            }
        }
    }
}