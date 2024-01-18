import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import SignIn from '../page/AuthPage/SignIn'
import MainLayout from './MainLayout'
import Dashboard from '../page/Dashboard/Index'
import Products from '../page/Products/Index'
import { AppProvider } from '../context/context'

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products/>}/>
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path='login' element={<SignIn />} />
          <Route path='signin' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default Layout