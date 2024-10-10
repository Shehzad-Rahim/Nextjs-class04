import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <div className='flex justify-center mt-4'>

      <div className=" shadow-xl hover:shadow-red-500 w-[78px] h-[65px]  text-center rounded-[50%] p-3 text-3xl hover:pt-2 hover:border-t-4 border-red-500"><h1 className='font-bold text-red-500'>SR</h1></div>
    </div>
    <nav className='flex justify-center pt-3 pb-5 bg-transparent'>
      
      <ul className='flex gap-8 text-xl'>
        <li className='down'>
            <Link href={"/"}>Home</Link>
        </li>
        <li className='up'>
            <Link href={"/about"}>About</Link>
        </li>
        <li className='down'>
            <Link href={"/career"}>Career</Link>
        </li>
        <li className='up'>
            <Link href={"/login"}>Login/SignUp</Link>
        </li>
        
      </ul>
    </nav>
    </>
  )
}

export default Header
