import Join from '@/components/Join'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation';

export default async function Home() {
  const session:any = await getServerSession(options);
  if(session){
    redirect('/home');
  }
  return (
    <div>
      <Join/>
    </div>
  ) 
}
