import React from 'react'
import WorkCard from './WorkCard'
import chow from '../../../public/500chowtesti.png'
import laguru from '../../../public/laguru-testi.png'
import melanie from '../../../public/melanie.png'
import { execPath } from 'process'
import clsx from 'clsx'


const projects = [
  {
    label: "500 chow",
    url: "http://500chow-red.vercel.app/",
    route: "/case-study/chow",
    desc: "a food delivery service  located in Lagos Island",
    id: 1,
    src: chow,
  },
  {
    label: "Laguru Barbers",
    url: "https://laguru-barbers-5bzk.vercel.app/",
    route: "/case-study/laguru",
    desc: "A Unisex barbershop in Abuja",
    id: 2,

    src: laguru,
  },
]

const ecomSites = [
  {
    label: "Melanie",
    url: "/",
    desc: "A female cosmetic store for females in Enugu",
    route: "/case-study/melanie",
    id: 1,
    src: melanie,
  },

]



const WorksGallery = ({variant = "web", className}) => {

  if (variant == "web") {
    var x = projects
  }

  if (variant == "ecom") {
    var x = ecomSites
  }

  return (
    <div className={clsx('flex flex-col gap-20 md:gap-40 pb-20 ', [className])}>

    {
      x?.map((project) => (
        <WorkCard route={project.route} src={project.src} label={project.label} key={project.id} url={project.url} desc={project.desc}/>
      ))
    }

    </div>
  )
}

export default WorksGallery