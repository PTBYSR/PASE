import React from 'react'
import NavBoxItem from './NavBoxItem'
import { NavItem } from 'utils/nav/NavItem'

const NavBox = () => {
  return (
    <nav className='md:w-[230px]'>
      <div className=' '>
        <ul>
          {
            NavItem.map((item) => (
              <NavBoxItem label={item.label} url={item.url} key={item.id}/>
              ))
            }
            <NavBoxItem label="Hire us" url="/contact" variant='cta'/>
        </ul>
      {/* <NavBoxItem /> */}
      </div>
    </nav>
  )
}

export default NavBox