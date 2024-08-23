import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-14 py-7 bg-emerald-500 flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Brand Name</h2>
        <input type="text" className='bg-transparent border' />
        <div className='flex items-center gap-10'>
            <Link href='/' className='text-xl font-medium'>Home</Link>
            <Link href='/about' className='text-xl font-medium'>About</Link>
            <Link href='/contact' className='text-xl font-medium'>Contact</Link>
            <Link href='/product' className='text-xl font-medium'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar