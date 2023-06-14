import React from 'react'
import NavBoxItem from './NavBoxItem'

const NavItem = [
  {
    id: 1,
    label: "our work",
    url: "/services",
  },
  {
    id: 2,
    label: "our services",
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
    <nav>
      <div className=' md:w-[230px]'>
        <ul>
          {
            NavItem.map((item) => (
              <NavBoxItem label={item.label} url={item.url} key={item.id}/>
            ))
          }
        </ul>
      {/* <NavBoxItem /> */}
      </div>
    </nav>
  )
}

export default NavBox