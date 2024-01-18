import React from 'react'
import Logo from '../assets/images/Logo-Xgear-300.png'
import SearchBox from '../components/SearchBox'
import Button from '../components/Button'
import Nav from '../components/Nav'
import {navData} from '../constants/index'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import {selectCurrentLoginStatus } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();

  const loginStatus = useSelector(selectCurrentLoginStatus)

  const handleLogin = () => {
    console.log(loginStatus);
   navigate('/auth')
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <header className='relative flex justify-between px-4 py-0 space-x-8 border-b-2 shadow shadow-gray-300'>
      <div className='relative flex cursor-pointer '>
        <img src={Logo} alt="Xgear.net"
          className='w-[150px] max-w-[150px]'
        />
      </div>

      <div className='relative flex grow w-[50%] space-x-2 justify-start items-center'>
        <SearchBox
          placeholder={"Search for brand, color, etc"}
          w={""}
        />
        <Button
          type={"button"}
          name={"Search"}
          bd={"border-2"}
          bg={"gray-50"}
          px={"px-2"}
          py={"py-1"}
          bColor={"border-green-500"}
          tColor={"text-green-500"}
          
        />
      </div>
      <div className='relative flex flex-auto justify-start'>
        <Nav items={navData}/>
      </div>
      <div className='relative flex  space-x-2 justify-center items-center'>
        <Button type={"button"}
          name={"Log in"}
          bd={"border-2"}
          bg={"bg-none"}
          px={"px-2"}
          py={"py-1"}
          cl={"green-300"}
          bColor={"border-blue-500"}
          tColor={"text-blue-500"}
          handleOnClick={handleLogin}
          disableStatus={loginStatus}
        />
        <Button type={"button"}
          name={"Sell"}
          bd={"border-2"}
          bg={"bg-none"}
          px={"px-2"}
          py={"py-1"}
          cl={"green-300"}
          bColor={"border-gray-500"}
          tColor={"text-gray-500"}
          handleOnClick={handleProfile}
        />

      </div>
    </header>
  )
}

export default Header


