import React from 'react';
import Logo from '../../assets/images/Logo-Xgear-300.png';
import {BsChevronLeft} from 'react-icons/bs'
import { useGlobalContext } from '../../context/context';
import { sidebars } from '../../constants';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { toggled, handleClick } = useGlobalContext();
  return (
    <div className={`${toggled?"w-[5.8rem] z-10":""} sidebar-container h-[100vh]`}>
      <div className={`flex justify-center items-center `}>
        <img src={Logo} alt="Xgear.net" className='relative w-[150px]' />
      </div>
      <div>
        {sidebars.map((item, index) => (
          <SidebarItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            seleted={item.seleted}
            onHandleClick={()=>handleClick(item.to)}
          />
        ))}
      </div>
    </div>
  )
}


export default Sidebar