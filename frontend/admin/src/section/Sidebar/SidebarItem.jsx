import React from 'react'
import { useGlobalContext } from '../../context/context'

const SidebarItem = ({ icon, name, seleted, onHandleClick }) => {
  const { toggled } = useGlobalContext();
  return (
    <div className={`${seleted ? "bg-blue-400" : ""} ${toggled ? "justify-center px-2 py-2" : ""} flex justify-start items-center  px-6 py-1 mx-6 my-[2px] space-x-2 group/item rounded-lg hover:bg-blue-400 cursor-pointer`}>
      <i className={`${seleted?"text-white":""} text-2xl text-blue-500 group-hover/item:text-white`}>{ icon}</i>
      {toggled ? "" : <span className={`${seleted ? "text-white" : ""} text-blue-500 font-semibold font-palanquin group-hover/item:text-white duration-200`}
        onClick={onHandleClick}
      >
        {name}</span>}
    </div>
  )
}

export default SidebarItem