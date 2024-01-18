import React from 'react'
import Branch from './Brand'
import SizeType from './SizeType'
import Size from './Size'
import Prices from './Prices'
import ReleaseYears from './ReleaseYears'

const Options = () => {
  return (
    <section className='relative space-y-4 min-w-[8rem]'>
      <Branch />
      <SizeType />
      <Size />
      <Prices />
      <ReleaseYears />
      <br />
    </section>
  )
}

export default Options