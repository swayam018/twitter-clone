import Modal from "@/components/Modal";
import { useState } from "react";


function LoginIntercepter() {
  const [showModal ,setshowModal]= useState(false);
  const [closeModal ,setcloseModal]= useState(false);

  return (
    <div>login page
    <Modal showModal={showModal} onClose={closeModal}>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
      
        <form>
          {/* ... form inputs, buttons, etc. ... */}
        </form>
      </div>
    </Modal>
    </div>
  );
}

export default LoginIntercepter;
