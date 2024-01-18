import React from 'react'
import { brands } from '../../../constants'

const Branch = () => {
  return (
    <div className='relative flex flex-col text-base font-palanquin font-semibold space-y-1'>
      {brands.map((brand, index) => (
        <p className='cursor-pointer'>{brand.banch }</p>
      ))}
    </div>
  )
}

export default Branch