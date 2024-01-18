// app/(routes)/layout.tsx
import LeftSideBar from '@/components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex bg-black items-center justify-center text-white w-full'>
      <div className='flex w-[1240px] h-full relative justify-center'>
        <LeftSideBar />
        {children} 
        <RightSideBar />
      </div>
    </div>
  );
}
