import React, { useEffect } from 'react'
import Shopping from './Section/Shopping'
import InforProduct from './Section/InforProduct'
import Description from './Section/Description'

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectProductById } from '../../features/products/productSlice';

const Index = () => {
  const { productId } = useParams();
  
  useEffect(() => {
    console.log("gdf" + productId)
  })
  const data = useSelector((state) => selectProductById(state, productId));
  if (!data) {
    console.log(data);
}
  return (
    <div className='px-80 mx-14 max-lg:px-4 '>
      <Shopping />
      <InforProduct />
      <Description/>
    </div>
  )
}

export default Index