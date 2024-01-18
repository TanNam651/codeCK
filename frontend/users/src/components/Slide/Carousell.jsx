import React, { useEffect, useState } from 'react'
import SlideImg from '../../assets/banner/banner3.jpg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Img1 from '../../assets/banner/banner1.jpg'
import Img2 from '../../assets/banner/banner2.jpg'
import Img3 from '../../assets/banner/banner3.jpg'

const Carousell = ({ children: slides, autoSlide = true, autoSlideInterval = 5000 }) => {

  const [current, setCurrent] = useState(0);

  const prevImg = () => {
    setCurrent((current) =>current === 0 ? slides.length - 1 : current - 1);
  }

  const nextImg = () => {
    setCurrent((current)=> current === slides.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextImg, autoSlideInterval);
    return () => clearInterval(slideInterval)
  });

  return (
    <div className='relative overflow-hidden '>
      <div className={`relative flex  w-[40rem] transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${current * 100}%)` }}
       
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center px-2  justify-between'>
        <button className=' p-1 bg-glass rounded-full hover:cursor-pointer'
          onClick={ prevImg}
        >
          <i className='text-3xl'>
            <BsChevronLeft/>
          </i>
        </button>
        <button className='p-1 bg-glass rounded-full hover:cursor-pointer'
        onClick={nextImg}>
          <i className='text-3xl '>
            <BsChevronRight />
          </i>
        </button>
      </div>
    </div>
  )
}

export default Carousell