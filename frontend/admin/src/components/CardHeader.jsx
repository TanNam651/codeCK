import classNames from 'classnames'
import React from 'react'

const CardHeader = ({title, py, tSize, tColor }) => {
  return (
    <div className={classNames('relative flex justify-between', `py-${py}`)}>
      <p className={classNames('font-semibold font-palanquin', `text-${tColor}`, `text-${tSize}`)}>{ title}</p>
      <span className='text-sm underline text-blue-500 font-palanquin font-medium hover:cursor-pointer'>View All</span>
    </div>
  )
}

export default CardHeader