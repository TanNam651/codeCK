import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Nav = ({ items }) => {
  const navigate = useNavigate();

  const handleOnClick = (location) => {
    navigate(location)
  }

  return (
    <nav className='relative flex  '>
      <ul>
        {items.map((item, index) => (
          <li key={item.label}
            className='cursor-pointer'
            onClick={()=>handleOnClick(item.to)}
          >
            <span>{item.label}</span>
            <span>
              <i>{item.icon }</i>
            </span>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}

export default Nav