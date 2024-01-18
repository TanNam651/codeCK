import React from 'react'
import { details } from '../../../constants'
import Img from '../../../assets/images/-trainers-gx-420789420789.webp'

import { BsChevronLeft, BsChevronRight, BsDash } from 'react-icons/bs'
import { AiFillHeart, AiFillStar, AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import {IoAdd} from 'react-icons/io5'
import DetailSlide from '../../../components/Details/DetailSlide'
import NumberShoes from '../../../components/Details/NumberShoes'
import Sizes from '../../../components/Details/Sizes'
import Star from '../../../components/Details/Star'

const Shopping = () => {
  return (
    <section className='relative w-full flex py-4 min-w-[50rem]'>
      <DetailSlide/>
      <div className='relative w-full border border-gray-400 border-l-0 px-4 '>
        <div className='border-b pt-2'>
          <p>Thương hiệu: <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Adidas Shoes</span> </p>
          <div className='relative flex justify-between items-center py-2 gap-4'>
            <span className='text-xl text-gray-500'>[ Adidas ] Giày Thể Thao Nam 1903</span>
            <div className='relative border-2 border-gray-200 px-2 py-2 rounded-full bg-gray-100'>
              <i className='text-2xl font-bold'><AiOutlineHeart /></i>
            </div>
          </div>
        </div>
        <div className='relative py-4 border-b border-gray-300'>
          <h2 className='text-2xl font-semibold'>$500</h2>
          <Star/>
        </div>
        <div className='relative border-b py-4 '>
          <div className='py-2'>
            <h2 className='text-base'>
              Kích thước |
              <span className='px-1 text-gray-500'>6 kích thước</span>
            </h2>
          </div>
          <Sizes/>
        </div>
        <div className='relative py-2 border-b-2'>
          <p className='py-3'>30 sản phẩm có sẵn</p>
          <NumberShoes/>
        </div>
        <div>
          <div className='relative py-4'>
            <button className='relative flex items-center gap-4 text-xl w-full justify-center border py-2 rounded-full '>
              Đặt mua 
              <span>
                <i><AiOutlineArrowRight/></i>
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shopping