import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { useGlobalContext } from '../../context/context';
import { useAddNewProductMutation } from '../../features/products/productSlice';
const AddProductModel = () => {
  const { addProductStatus, setAddProductStatus } = useGlobalContext();

  const [addNewProduct, {isLoading}] = useAddNewProductMutation();

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [retail_price, setPrince] = useState('');
  const [release_date, setDate] = useState('');
  const [description, setDes] = useState('');
  const [img_path, setImg] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  const modalStatus = () => {
    setAddProductStatus(!addProductStatus);
  }

  const onChangeProduct = (e) => setName(e.target.value);

  const onChangeBrand = (e) => setBrand(e.target.value);


  const onChangePrince = (e) => setPrince(e.target.value);

  const onChangeDate = (e) => setDate(e.target.value);

  const onChangeDes = (e) => setDes(e.target.value);




  const handleAddProduct = async () => {
    try {
      await addNewProduct({ name, brand, retail_price, release_date, description, img_path })
      setAddProductStatus(!addProductStatus);
    }
    catch (err) {
      console.log(err.message);
    }
  }

  return (
    <aside className='absolute top-[5%] left-[10%]  w-4/5 h-[18rem] grid  place-items-center transition-all z-10 mx-6 '>
      <div className='relative flex flex-col  items-start bg-gray-100 border-2 rounded-md w-full h-full my-2 py-1 space-y-1'>
        <Input label={'Tên sản phẩm'} type={'text'} onChange={onChangeProduct} />
        <Input label={'Thương hiệu'} type={'text'} onChange={onChangeBrand} />
        <Input label={'Giá tiền'} type={'text'} onChange={onChangePrince} />
        <Input label={'Ngày ra mắt'} type={'date'} onChange={onChangeDate} />
        <Input label={'Mô tả'} onChange={onChangeDes} />
        <div className='py-2 w-full relative flex flex-row justify-center items-center space-x-4'>
          <Button name={"Cập nhật"}
            bd={"rounded"}
            bColor={"bg-green-200"}
            px={"px-2"} py={"py-1"}
            textSize={"text-2xl"}
            tColor={""}
          onHandleClick={handleAddProduct}/>
          <Button name={"Thoát"}
            bd={"rounded"}
            bColor={"bg-red-100"}
            px={"px-2"} py={"py-1"}
            textSize={"text-2xl"} onHandleClick={modalStatus} />

        </div>

      </div>

    </aside>

  )
}

export default AddProductModel