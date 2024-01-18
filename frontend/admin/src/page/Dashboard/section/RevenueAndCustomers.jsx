import React from 'react'
import RevenueCharts from '../../../components/Charts/RevenueCharts'
import TopCustomers from './TopCustomers'

const RevenueAndCustomers = () => {
  return (
    <section className='relative flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2  justify-between py-4 space-x-4 '>
      <RevenueCharts />
      <TopCustomers/>
    </section>
  )
}

export default RevenueAndCustomers