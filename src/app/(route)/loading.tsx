"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loadingData from '../../../public/loading.json';

function Loading() {
    return (
        <main className=' text-white bg-black w-[598px] relative border-l border-r border-gray-500 max-[725px]:w-fit max-[482px]:border-none '>
            <div className=' w-full h-screen flex justify-center items-center'>
                <div className=' w-20 h-20'>
                    <Lottie animationData={loadingData} loop={true} />
                </div>
            </div>
        </main>
    )
}

export default Loading