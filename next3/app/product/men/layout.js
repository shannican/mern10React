import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        {children}
        <div className='w-full fixed flex justify-evenly items-center text-xl  bottom-20 left-0 h-20 bg-blue-400'>
            <Link href='/product/men/shirt'>Shirt</Link>
            <Link href='/product/men/jeans'>Jeans</Link>
            <Link href='/product/men/cap'>Cap</Link>
            <Link href='/product/men/watch'>Watch</Link>
            <Link href='/product/men/shoes'>Shoes</Link>
        </div>
    </div>
  )
}

export default layout