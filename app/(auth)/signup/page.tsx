import React from 'react'
import Link from 'next/link'

function SignUp() {
  return (
    <div className=''>
    <form action="">
      <h1 className='text-red-600 font-bold text-4xl mb-4 '>SignUp</h1>

      <label className='text-xl text-green-600' htmlFor="Email">Full Name</label>
      <br />
      <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 text-lg' aria-label='email' type="text" placeholder='Enter your Full Name'/>
      <br />

      <label className='text-xl text-green-600' htmlFor="Email">Email</label>
      <br />
      <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 text-lg' aria-label='email' type="text" placeholder='Enter your Email'/>
      <br />
      <label className='text-xl text-green-600' htmlFor="Email">Password</label>
      <br />
      <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 mb-4 text-lg' aria-label='email' type="text" placeholder='Enter your Password'/>
      <br />
      <label className='text-xl text-green-600' htmlFor="Email">Repeat Password</label>
      <br />
      <input className='w-80 focus:bg-black focus:text-green-600 outline-none focus:border-none bg-black border-b-2 border-red-500 focus:outline-red-500 focus:rounded-lg p-1 my-2 mb-4 text-lg' aria-label='email' type="text" placeholder='Repeat Password'/>

      {/* buttons  */}
      <div id="buttons" className='flex justify-center gap-10'>
      <Link className='border-2 border-red-600 px-2 py-1 text-xl rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500' href={'/'}>Register</Link>
      <Link className='border-2 border-red-600 px-2 py-1 text-xl rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500' href={'/login'}>Login</Link>
      
      </div>
    </form>

    
  </div>
  )
}

export default SignUp
