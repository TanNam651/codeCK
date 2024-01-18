import React from 'react'
import Chart from 'react-apexcharts'
import CardHeader from '../CardHeader'

const RecentCharts = () => {
  const options = {}
  const series= [44, 55, 41, 17, 15]
  const  labels= ['A', 'B', 'C', 'D', 'E']
  return (
    <div className='relative w-1/2 max-lg:w-full border border-x-gray-300 px-8 py-4 rounded-lg space-y-10'>
      <CardHeader title={'RECENT TRANSCATION'}
        py={'0'}
        tSize={'xl'}
        tColor={'gray-500'}
      />
      
      <Chart options={options} series={series} type='donut' width={'100%'}/>
    </div>
  )
}

export default RecentCharts