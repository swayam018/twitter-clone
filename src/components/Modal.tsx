import React from 'react';
import { RxCross2 } from 'react-icons/rx';

function Modal({ showModal, onClose }: any) {
  return (
    <>
      {showModal && (
        <div className='w-full h-screen backdrop:bg-transparent backdrop-blur-0 flex justify-center items-center absolute'>
          <div className='w-[598px] bg-black aspect-square rounded-2xl relative'>
            <span
              className='absolute px-1 text-lg rounded-full py-1 left-4 top-4 cursor-pointer text-white font-extrabold hover:bg-gray-400'
              onClick={()=>onClose(true)}>
              <RxCross2 />
            </span> 
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
