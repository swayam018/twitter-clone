import React from 'react'

function Signup() {
  return (
    <div>
        <form >
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder='Enter email' />
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder='Enter password' />
        </form>
    </div>
  )
}

export default Signup