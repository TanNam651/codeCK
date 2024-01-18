import React from 'react'

const ProductCard = ({img, name, total, sold}) => {
  return (
    <div className='relative w-full flex flex-col  border-2 shadow shadow-gray-300 border-gray-300 px-4 pb-4 cursor-pointer min-w-[12rem] max-w-[13rem] ' onClick={onclick}>
      <div className='relative flex justify-center items-center'>
        <img src={img} alt="" className='w-[150px] ' />
      </div>
      <div className='relative'>
        <p className='text-base mb-3'>{name}</p>
        <p className='font-semibold font-palanquin text-lg my-1'>{total}</p>
        <span className='px-2 bg-gray-100 text-base py-[2px] text-green-600'>{ sold} sold</span>
      </div>
    </div>
  )
}

export default ProductCard