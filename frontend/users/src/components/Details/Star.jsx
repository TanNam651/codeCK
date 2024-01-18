import React from 'react'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'

const Star = () => {
  return (
    <div className='relative flex gap-4'>
      <div className='relative flex gap-1 items-center'>
        <i className='text-2xl text-gray-300'>
          <AiFillStar />
        </i>
        <i className='text-2xl text-gray-300'>
          <AiFillStar />
        </i>
        <i className='text-2xl text-gray-300'>
          <AiFillStar />
        </i>
        <i className='text-2xl text-gray-300'>
          <AiFillStar />
        </i>
        <i className='text-2xl text-gray-300'>
          <AiFillStar />
        </i>
      </div>
      <div className='relative flex gap-2 items-center'>
        <span className='text-xl font-medium '>0.</span>
        <span className='relative flex gap-1 text-xl justify-center items-center'>
          <i className=''>
            <AiFillHeart className='text-purple-500 text-xl' />
          </i>
          0
        </span>
      </div>
    </div>
  )
}

export default Star