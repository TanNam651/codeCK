import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const TitleProduct = ({title, see}) => {
  return (
    <div className='relative flex justify-between '>
      <h2 className='relative font-semibold font-palanquin text-xl'>{title}</h2>
      
        <span className='relative flex justify-center items-center space-x-1 underline text-green-400  text-sm'>{see} <i><AiOutlineArrowRight /></i></span>
    </div>
  )
}

export default TitleProduct