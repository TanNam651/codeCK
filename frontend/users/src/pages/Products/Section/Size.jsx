import React from 'react'
import { sizes } from '../../../constants'

const Size = () => {
  return (
    <div>
      <h2 className='font-palanquin font-semibold text-gray-500'>SIZE</h2>
      <div className='grid grid-cols-4 gap-2'>
        {sizes.map((size, index) => (
          <div className='relative flex  items-center justify-center border-2 border-gray-700 '>
            <span className='text-base py-1 px-[2px]'>{ size.size}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Size