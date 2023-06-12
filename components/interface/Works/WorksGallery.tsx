import React from 'react'
import WorkCard from './WorkCard'


const projects = [
  {
    label: "500 chow",
    url: "http://500chow-red.vercel.app/",
    desc: "a food delivery service  located in Lagos Island",
    id: 1,
    src: "",
  },
  {
    label: "Laguru Barbers",
    url: "https://laguru-barbers-5bzk.vercel.app/",
    desc: "A Unisex barbershop in Abuja",
    id: 2,

    src: "",
  },
]



const WorksGallery = () => {
  return (
    <div className='flex flex-col gap-10'>

    {
      projects.map((project) => (
        <WorkCard label={project.label} key={project.id} url={project.url} desc={project.desc}/>
      ))
    }

    </div>
  )
}

export default WorksGallery