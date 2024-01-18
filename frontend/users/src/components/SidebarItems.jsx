import React from 'react'

const SidebarItems = ({icon, title, content}) => {
  return (
    <div className='relative flex space-x-2 items-center py-6'>
      <div>
        <i className='text-4xl text-green-700'>{icon}</i>
      </div>
      <div>
        <p className='text-2xl font-semibold font-palanquin text-green-700'>{title}</p>
        <span className='text-base text-green-700 font-palanquin'>{ content}</span>
      </div>
    </div>
  )
}

export default SidebarItems