import React from 'react'
import { sidebars } from '../constants'
import SidebarItems from '../components/SidebarItems'

const Sidebar = () => {
  return (
    <aside className='relative px-8 sidebar-container'>
      <div>
        {sidebars.map((item, index) => (
          <SidebarItems
            key={item.title}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar