import React from 'react'
import Sidebar from '../section/Sidebar/Sidebar'
import Header from '../section/Header/Header'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import AddProductModel from '../components/ModalAddProduct/AddProductModel'

const MainLayout = () => {
  const { addProductStatus } = useGlobalContext();
  return (
    <div className='w-full flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <main className='relative'>
          <Outlet />
        </main>
        {addProductStatus && <AddProductModel />}
      </div>

    </div>
  )
}

export default MainLayout