import React, { useEffect } from 'react'
import Overview from './section/Overview'
import RevenueAndCustomers from './section/RevenueAndCustomers'
import ProductsAndTranscation from './section/ProductsAndTranscation'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { selectCurrentLoginStatus } from '../../features/auth/authSlice'

const Index = () => {
  const navigate = useNavigate()
  const loginStatus = useSelector(selectCurrentLoginStatus);

  useEffect(() => {
    if (!loginStatus) {
      navigate('/auth');
    }
  })

  return (
    <main className='px-6 py-2 relative flex flex-col'>
      <div className='relative py-2'>
        <h2 className=' text-2xl font-semibold font-palanquin'>Dashboard</h2>
      </div>
      <Overview />
      <RevenueAndCustomers />
      <ProductsAndTranscation/>
    </main>
  )
}

export default Index