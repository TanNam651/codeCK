import React from 'react'
import { Route, Routes } from "react-router-dom";
import Profile from '../pages/Profile/Profile';
import Buying from "../pages/Profile/Buying";
import Products from '../pages/Products/Index';
import Details from '../pages/Detail/Index';
import MainLayout from './MainLayout';
import ProfileLayout from './ProfileLayout';
import AuthLayout from './AuthLayout';
import SignIn from '../pages/AuthPage/SignIn';

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index Component={Products} />
          <Route path='profile' element={<ProfileLayout />}>
            <Route index Component={Profile} />
            <Route path="buying" Component={Buying} />
          </Route>
          <Route path="products" >
            <Route index element={<Products/>}/>
            <Route path=':productId' element={Details}/>
          </Route>
          

          <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<SignIn />} />

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Layout