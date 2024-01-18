import React from 'react';
import Chart from 'react-apexcharts'

const RevenueCharts = () => {
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  return (
    <div className='relative w-2/3 flex flex-col px-8 py-2 border max-lg:w-full max-lg:justify-center rounded-lg '>
      <p className='my-4 text-2xl font-semibold font-palanquin text-gray-500'>Revenue charts</p>
      <Chart
        options={options} series={series}
        type='area'
        width={"100%"}
      />
    </div>
  )
}

export default RevenueCharts