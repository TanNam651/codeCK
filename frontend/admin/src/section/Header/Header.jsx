import React from 'react'
import { BsList } from 'react-icons/bs'
import SearchBox from '../../components/SearchBox'
import FormButton from '../../components/FormInput/FormButton'
import Button from '../../components/Button'
import { useGlobalContext } from '../../context/context'


const Header = () => {
  const { toggled, handleToggled } = useGlobalContext(); 

  return (
    <header className='relative  flex justify-between items-center px-2 py-1'>
      <div className='relative flex space-x-4'
        onClick={()=>handleToggled(!toggled)}
      >
        <i className='text-2xl hover:cursor-pointer active:rotate-180 duration-500'>
          <BsList />
        </i>
        <p className='font-palanquin text-gray-600'>Dashboard</p>
      </div>
      <div className='relative flex space-x-2'>
        <SearchBox />
        <Button
          type={"button"}
          name={"Search"}
          bd={"border-2"}
          px={"px-2"}
          py={"py-0"}
          tColor={"text-green-300"}
          bColor={"border-green-300"}
          h={"h-full"}
        />
      </div>
    </header>
  )
}

export default Header