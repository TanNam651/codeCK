import React from 'react'
import { overviews } from '../../../constants'
import CardView from '../../../components/CardView'

const Overview = () => {
  return (
    <section className='relative flex flex-wrap justify-between max-md:justify-center max-sm:items-center max-xl:justify-around py-2'>
      {overviews.map((view, index) => (
        <CardView
          key={view.name}
          icon={view.icon}
          statiscs={view.statistics}
          name={view.name}
          bColor={'border-gray-300'}
          shadow={'shadow-gray-300'}

          py={'py-2'}
          my={'my-2'}
          iSize={'text-4xl'}
          tSize={'text-2xl'}
          sSize={'text-xl'}
          tColor={'text-gray-500'}
        />
      ))}
      
    </section>
  )
}

export default Overview