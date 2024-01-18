import React from 'react'
import { releases } from '../../../constants'

const ReleaseYears = () => {
  return (
    <div>
      <h2 className='font-palanquin font-semibold text-gray-500'>RELEASE YEARS</h2>
      <div>
        {releases.map((type, index) => (
          <div key={index} className='relative flex space-x-2 text-gray-500 items-center '>
            <input type="checkbox" name={type.title} id={type.title} value={type.status}
              className=''
            />
            <label htmlFor={type.title} className='cursor-pointer'>{type.title}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReleaseYears