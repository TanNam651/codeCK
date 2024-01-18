import React from 'react'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { details } from '../../constants'

const DetailSlide = () => {
  return (
    <div className='relative flex gap-2 px-4 py-4 border border-gray-400 '>
      <div className='relative flex flex-col gap-y-2'>
        {details.map((img, index) => (
          <div className='relative flex   '>
            <img src={img.image} alt=""
              className='w-[4rem] max-w-[4rem] object-contain border-2 border-red-700 rounded-md '
            />
          </div>
        ))}
      </div>
      <div className='relative'>
        <img src={details[0].image} alt=""
          className='w-[35rem] max-w-[25rem]'
        />
        <div className='absolute right-2 top-2 bg-red-200 px-2 py-2 rounded-full'>
          <i className='text-2xl '>
            <MdOutlineZoomOutMap />
          </i>
        </div>
        <div className='absolute top-[50%] left-2 px-2 py-2 bg-red-200 rounded-full items-center'>
          <i className='text-2xl '>
            <BsChevronLeft />
          </i>
        </div>
        <div className='absolute top-[50%] right-2 bg-red-200 px-2 py-2 rounded-full items-center'>
          <i className='text-2xl '>
            <BsChevronRight />
          </i>
        </div>
      </div>
    </div>
  )
}

export default DetailSlide