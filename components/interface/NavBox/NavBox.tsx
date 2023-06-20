import React from 'react'
import NavBoxItem from './NavBoxItem'

const NavItem = [
  {
    id: 1,
    label: "our case studies",
    url: "/services",
  },
  {
    id: 2,
    label: "our solutions",
    url: "/services",
  },
  {
    id: 3,
    label: "contact us",
    url: "/services",
  },
]






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
            <NavBoxItem label="Hire us" url="" variant='cta'/>
        </ul>
      {/* <NavBoxItem /> */}
      </div>
    </nav>
  )
}

export default NavBox