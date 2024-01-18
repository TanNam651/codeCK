import React from 'react'
import { sizeTypes } from '../../../constants'

const SizeType = () => {
  return (
    <div>
      <h2 className='font-palanquin font-semibold text-gray-500'>SIZE TYPES</h2>
      <div>
        {sizeTypes.map((type, index) => (
          <div key={index} className='relative flex space-x-2 text-gray-500 items-center '>
            <input type="checkbox" name={type.title} id={type.title}
              className=''
            />
            <label htmlFor={type.title} className='cursor-pointer'>{ type.title}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SizeType