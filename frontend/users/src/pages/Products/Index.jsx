import React, { useEffect } from 'react'
import Img from '../../assets/banner/1877.jpg'
import Title from './Section/Title'
import ProductList from './Section/ProductList'
import Options from './Section/Options'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { selectCurrentLoginStatus } from '../../features/auth/authSlice'
import { selectAllProduct, useGetProductsQuery } from '../../features/products/productSlice'

import Shoe1 from '../../assets/images/foam-roav-vrunning-shoes-521584521584.webp'
import Shoe2 from '../../assets/images/intersectorsl-bgrd-159856159856.webp'
import Shoe3 from '../../assets/images/alphabounce-beyond-hp-526233526233.webp'
import Shoe4 from '../../assets/images/lider-slipper-white-511253511253.webp'
import Shoe5 from '../../assets/images/essentialgrey-507049507049.webp'
import Shoe6 from '../../assets/images/running-shoes-390209390209.webp'

const Index = () => {

  const listImage = [Shoe1, Shoe2, Shoe3, Shoe4, Shoe5, Shoe6];


  const navigate = useNavigate();
  const loginStatus = useSelector(selectCurrentLoginStatus);

  const {isLoading, isFetching, isError, isSuccess } = useGetProductsQuery();

  let listProduct = useSelector(selectAllProduct); 
  let dataProduct = [];

  useEffect(() => {
    if (!loginStatus) {
      navigate('/auth');
    }
  });

  // useEffect(() => {
    if (isLoading) {
      
    }
    else if (isSuccess) {
      dataProduct = [];
      for (var i = 0; i < listProduct.length; i++){
        let ans = {
          id: listProduct[i]._id,
          image: listImage[Math.floor(Math.random() * 10 / 6)],
          name: listProduct[i].name,
          total: `$${listProduct[i].retail_price}`,
          sold: Math.floor(Math.random()*200)
        }
        dataProduct.push(ans);
      }
      
     console.log(dataProduct)
    }
  // }, [listProduct]);

  return (
    <div className='px-28 max-lg:px-10'>
      <div >
        <img src={Img} alt="" className='w-full max-h-96' />
      </div>
      <Title />
      <div className='relative flex'>
        <Options />
        {dataProduct.length > 0 ? <ProductList dataProduct={dataProduct}/> : <div>{ dataProduct.length}</div>}
      </div>
    </div>
  )
}

export default Index