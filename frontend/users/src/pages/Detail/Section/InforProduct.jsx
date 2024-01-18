import React from 'react'

const InforProduct = () => {
  return (
    <section className='relative px-4 py-2 my-4 border shadow shadow-gray-300 rounded-lg'>
      <div className='relative  my-4'>
        <h2 className='text-2xl text-gray-600 font-semibold font-palanquin '>Thông tin sản phẩm</h2>
      </div>
      <div>
        <div className='relative flex bg-gray-100'>
          <div className='w-[10rem] border-r '>
            <p className='text-xl text-gray-500 mx-2 my-2 '>Danh mục</p>
          </div>
          <div className='flex items-center'>
            <p className='text-xl text-gray-500 mx-2'>Giày thể thao</p>
          </div>
        </div>
        <div className='relative flex my-2'>
          <div className='w-[10rem] border-r'>
            <p className='text-xl text-gray-500 mx-2'>Thương hiệu</p>
          </div>
          <div>
            <p className='text-xl text-gray-500 mx-2'>Adidas Shoe </p>
          </div>
        </div>
        <div className='relative flex bg-gray-100 gap-3 '>
          <div className='w-[10rem] border-r py-2'>
            <p className='text-xl text-gray-500 mx-2'>SKU</p>
          </div>
          <div>
            <p className='text-xl text-gray-500 mx-2'>ap1wwe</p>
          </div>
        </div>
       

      </div>
    </section>
  )
}

export default InforProduct