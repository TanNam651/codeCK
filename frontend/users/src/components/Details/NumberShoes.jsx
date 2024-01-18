import React from 'react'
import { BsDash } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'

const NumberShoes = () => {
  return (
    <div className='flex'>
      <button className='text-2xl px-[6px] py-1 text-gray-500 border  rounded-l-2xl'>
        <i><BsDash /></i>
      </button>
      <div className='relative flex items-center border px-3 border-l-0 border-r-0'>
        <span className='text-xl'>1</span>
      </div>
      <button className='text-2xl px-[6px] py-1 text-gray-500 border  rounded-r-2xl'>
        <i><IoAdd /></i>
      </button>
    </div>
  )
}

export default NumberShoes