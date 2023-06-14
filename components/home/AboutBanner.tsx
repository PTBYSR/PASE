import React from 'react'

const AboutBanner = () => {
  return (
    <section id="about" className='bg-midnight py-24 px-14'>
      <div className='flex h-[500px] w-full md:flex-row-reverse gap-10'>
        <div className=' nd:w-1/3'>
          <h2 className='space uppercase text-gray leading-[6rem] md:text-5xl font-bold'> who are we<span className="text-gum">?</span></h2>
        </div>
        <div className='md:w-2/3 flex justify-end items-end '>
          <p className='text-gray text-lg  inter'>Welcome to our world of digital masterpieces. We are a group of talented developers and designers dedicated to crafting exceptional digital experiences. At Pase Digital, we blend expertise, passion, and creativity to push the boundaries of innovation. Join us on this journey of transforming ideas into extraordinary digital works of art. Let's create something exceptional together.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner