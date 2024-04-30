import React from 'react'
import WorkCard from './WorkCard'
import chow from '../../../public/500chowtesti.png'
import laguru from '../../../public/laguru-testi.png'
import melanie from '../../../public/melanie.png'
import { execPath } from 'process'
import clsx from 'clsx'


const projects = [
  {
    label: "Bellz Films",
    url: "https://bit.ly/Bellzfilms",
    route: "/case-study/laguru",
    desc: "Bellz Films is a videography studio agency for weddings and luxurious events in Nigeria.",
    id: 3,
    caseStudy: false,

    src: laguru,
  },
 
  {
    label: "Eduflow",
    url: "https://eduflow-ruddy.vercel.app/",
    route: "/case-study/laguru",
    desc: "We are Montanas best and finest education university with the best facilities and fun activities",
    id: 4,
    caseStudy: false,

    src: laguru,
  },
  {
    label: "Maxion",
    url: "https://laguru-barbers-5bzk.vercel.app/",
    route: "/case-study/laguru",
    desc: "",
    id: 4,
    caseStudy: false,

    src: laguru,
  },
  {
    label: "500 chow",
    url: "http://500chow-red.vercel.app/",
    route: "/case-study/chow",
    desc: "a food delivery service  located in Lagos Island",
    id: 1,
    caseStudy: true,
    src: chow,
  },
  {
    label: "Brookside University",
    url: "https://brookside-university.vercel.app/",
    route: "/case-study/laguru",
    desc: "Brookside University is a leading research university pushing boundaries and frontiers ever since its inception.",
    id: 3,
    caseStudy: false,

    src: laguru,
  },
  {
    label: "Laguru Barbers",
    url: "https://laguru-barbers-5bzk.vercel.app/",
    route: "/case-study/laguru",
    desc: "A Unisex barbershop in Abuja",
    id: 2,
    caseStudy: true,

    src: laguru,
  },
  {
    label: "Ignatius School",
    url: "https://ignatius-school.vercel.app/",
    route: "/case-study/laguru",
    desc: "Welcome to St. Ignatius College School! Get ready for another year of learning and growing together.",
    id: 2,
    caseStudy: false,

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
    case: true,
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
        <WorkCard route={project.route} src={project.src} label={project.label} key={project.id} url={project.url} desc={project.desc} caseStudy={project.caseStudy}/>
      ))
    }

    </div>
  )
}

export default WorksGallery