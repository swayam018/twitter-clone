// app/(auth)/layout.tsx
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const sessionData = async ()=>{
    const session= await getServerSession(options);
    return session;
  }
  const session = sessionData();
  if (!session) {
    return redirect('/login'); // Redirect to login if not authenticated
  }
  return children;
}
