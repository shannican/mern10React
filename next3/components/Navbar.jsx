import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen py-7 px-10 bg-emerald-500 text-xl'>
        <h2>Brand Name</h2>
        <div className='flex gap-10 items-center'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
            <Link href="/services">Services</Link>

        </div>
    </div>
  )
}

export default Navbar