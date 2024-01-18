import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
const Title = () => {
  return (
    <section className='relative py-2 flex justify-between'>
      <div>
        <p className='font-semibold font-palanquin text-gray-500'>SNEAKER</p>
      </div>
      <div className='relative flex  space-x-2'>
        <span className='border-2 px-2 text-gray-500'>Sort by</span>
        <div className='relative flex justify-between px-1 space-x-10 items-center border-2 text-gray-500'>
          <span>Most popular</span>
          <i><BiSolidDownArrow/></i>
        </div>
      </div>
    </section>
  )
}

export default Title