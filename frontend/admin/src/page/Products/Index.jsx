import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SearchBox from '../../components/SearchBox';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllProduct, useGetProductsQuery, selectProductIds } from '../../features/products/productSlice';
import Table from './section/Table';
import { useGlobalContext } from '../../context/context';
import { useDispatch } from 'react-redux';

const Index = () => {
  const { addProductStatus, setAddProductStatus } = useGlobalContext();
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery();
  let listProduct = useSelector(selectAllProduct);
  let dataTable = listProduct;

  // useEffect(() => {
    if (isLoading) {
      dataTable = []
    } else if (isSuccess) {
      dataTable = listProduct
    }
  // },[]);

  // useEffect(() => {
  //     dataTable = listProduct
  // }, [addProductStatus]);


  const handleAddProduct = () => {
    setAddProductStatus(!addProductStatus);
  }

  return (
    <div className='w-full h-full relative'>
      <div className='relative flex flex-col mx-6 my-8 px-6 py-6 border border-gray-300 rounded-lg shadow shadow-gray-300'>
        <div className='relative flex justify-between items-center '>
          <h2 className='relative text-2xl font-medium font-palanquin '>Products</h2>
          <div className='relative flex space-x-2'>
            <Button type={'button'}
              name={'Add'}
              bd={'border-[3px]'}
              bg={"bg-gray-100"}
              px={'px-2'}
              py={'py-0'}
              tColor={"text-green-500"}
              h={"full"}
              bColor={'border-green-300'}
              onHandleClick={handleAddProduct}
            />
            <Button type={'button'}
              name={'Update'}
              bd={'border-[3px]'}
              bg={"bg-gray-100"}
              px={'px-2'}
              py={'py-0'}
              tColor={"text-red-500"}
              bColor={'border-red-300'}
              h={"full"}
            />
            <Button
              type={"button"}
              name={"Delete"}
              bd={"border-[3px]"}
              bg={"bg-gray-100"}
              px={"px-2"}
              py={"py-0"}
              tColor={"text-orange-400"}
              h={"full"}
              bColor={'border-orange-200'}
            />
          </div>
        </div>
        <div className=' relative flex justify-end py-3'>
          <SearchBox />
        </div>
        <div>
          <Table data={dataTable} />

          <div className='relative flex justify-end space-x-4'>
            <div className='relative flex items-center space-x-2'>
              <p className='text-gray-400'>Rows per page:</p>
              <div>
                <input type="text" name="" id="" value={"5"}
                  className='w-[2.5rem] border-2 border-gray-300 text-center text-gray-400 text-base rounded-lg' />
              </div>
            </div>
            <div className='relative flex items-center space-x-2'>
              <p className='text-gray-400'>1-5 of 84</p>
              <input type="text" name="" id="" value={"1"}
                className='w-[2.5rem] h-[1.2rem] border-2 border-gray-300 text-center text-gray-400 text-base rounded-lg' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index