import React from 'react'
import NavBoxItem from './NavBoxItem'

const NavItem = [
  {
    id: 1,
    label: "our case studies",
    url: "/case-study",
  },
  {
    id: 2,
    label: "our solutions",
    url: "/solutions",
  },
  {
    id: 3,
    label: "contact us",
    url: "/contact",
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
            <NavBoxItem label="Hire us" url="/contact" variant='cta'/>
        </ul>
      {/* <NavBoxItem /> */}
      </div>
    </nav>
  )
}

export default NavBox