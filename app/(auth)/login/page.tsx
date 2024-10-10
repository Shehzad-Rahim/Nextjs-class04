import React from 'react'
import Link from 'next/link'
import SignUp from '../signup/page';
function Login() {
  return (
    <div>
      <form action="">
        <h1 className='text-red-600 font-bold text-4xl mb-4 '>Login</h1>
        <label className='text-xl text-green-600' htmlFor="Email">Email</label>
        <br />
        <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 text-lg' aria-label='email' type="text" placeholder='Enter your Email'/>
        <br />
        <label className='text-xl text-green-600' htmlFor="Email">Password</label>
        <br />
        <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 mb-4 text-lg' aria-label='email' type="text" placeholder='Enter your Password'/>

        {/* buttons  */}
        <div id="buttons" className='flex justify-center gap-10'>
        <Link className='border-2 border-red-600 px-2 py-1 text-xl rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500' href={'/'}>Login</Link>
        <Link className='border-2 border-red-600 px-2 py-1 text-xl rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500' href={'/signup'}>SignUp</Link>
        
        </div>
      </form>

      

    </div>
  )
}

export default Login
