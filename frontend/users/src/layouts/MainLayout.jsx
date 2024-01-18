import React from 'react'
import Header from '../section/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Products/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='relative py-0 '>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout