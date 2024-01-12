"use client"
import Modal from "@/components/Modal";
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { SiGithub } from 'react-icons/si'
import { redirect, useRouter } from 'next/navigation';


function LoginIntercepter() {

  const [showModal, setshowModal] = useState(true);
  const [closeModal, setcloseModal] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
    redirect: false
  });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signInResult = await signIn('credentials', formData);
    if (signInResult?.error) {
      console.log("error happened");
    }
    if (signInResult?.ok) {
      console.log("ok");
      router.push('/home');
    }
  }
  return (
    <div>
      <Modal showModal={showModal} onClose={closeModal}>
        <div>
          <h1 className='text-2xl font-bold mb-4'>Login</h1>
          <form>
            <form className=' flex flex-col gap-4 items-center w-full' onSubmit={handlerSubmit}>
              <div className=' input'>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder='Enter email' className=' outline-none border border-white rounded-md bg-transparent px-2 py-2 w-full  focus:shadow-normal focus:shadow-white' required onChange={handleChange} value={formData.email} name='email' />
              </div>
              <div className=' input'>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder='Enter password' className=' outline-none border border-white rounded-md bg-transparent px-2 py-2 w-full focus:shadow-normal focus:shadow-white' minLength={8} required onChange={handleChange} value={formData.password} name='password' />
              </div>
              <button type='submit' className=' bg-primary px-5 py-2 w-fit text-xl rounded-full  shadow-lg shadow-primary/50'>Sign Up</button>
            </form>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default LoginIntercepter;
