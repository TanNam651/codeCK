import React from 'react'
import { products } from '../../../constants'
import ProductCard from '../../../components/Products/ProductCard'
import { Link } from 'react-router-dom'

const ProductList = ({ dataProduct }) => {


  
  return (
    <div className='relative w-full ml-6 '>
      <div className='relative my-4'>
        <h2 className='font-palanquin font-semibold text-xl text-gray-700'>PRODUCT LIST</h2>
      </div>
      <div className='relative flex flex-wrap gap-5 items-center'>
        {dataProduct.map((product, index) => (
          <Link to={`products/${product.id}`}>
            <ProductCard img={product.image}
              name={product.name}
              sold={product.sold}
              total={product.total}
            />
          </Link>
        ))}
      </div>
      <div className=' relative flex justify-end gap-1 items-center py-4'>
        <span className='border px-2 text-center rounded-full cursor-pointer bg-blue-500'>1</span>
        <span className='border px-2 text-center rounded-full cursor-pointer'>2</span>
      </div>
    </div>
  )
}

export default ProductList