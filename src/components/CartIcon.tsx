import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart">
    <div className='flex relative justify-center items-center text-3xl md:text-base gap-4'>
        <Image src="/cart.png" alt='' width={30} height={30}/>
        <h1>Cart (3)</h1>
    </div>
    </Link>
  )
}

export default CartIcon