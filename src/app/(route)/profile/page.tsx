// Import necessary dependencies
"use client"
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { SiGithub } from 'react-icons/si';

function ProfilePage() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session?.user!.name}!</p>
          <button type="button" onClick={() => signOut()} className="bg-red-500">
            Sign out
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => signIn('github')}
          className="w-fit items-center flex gap-4 flex-row px-5 bg-gray-950 text-xl text-slate-50 py-2 rounded-full"
        >
          <span>
            <SiGithub />
          </span>
          <span>Sign in with Github</span>
        </button>
      )}
    </div>
  );
}

export default ProfilePage;
