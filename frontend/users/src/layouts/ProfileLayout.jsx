import React from 'react'
import Sidebar from '../section/Sidebar'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div className='relative flex w-full space-x-4 py-0'>
      <Sidebar />
      <div className='relative w-full flex px-10 py-0'>
        <Outlet/>
      </div>
    </div>
  )
}

export default ProfileLayout