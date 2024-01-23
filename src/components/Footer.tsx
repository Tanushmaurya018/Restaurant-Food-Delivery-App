import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=" flex h-16 md:h-20 bg-red-100 text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
      <Link href="/" className='font-bold'>Foodybooty</Link> 
      <span>All Rights Reserved</span> 

    </div>
  )
}

export default Footer