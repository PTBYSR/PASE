import React from 'react'

const AboutBanner = () => {
  return (
    <section id="about" className='bg-midnight py-24 md:px-14 px-6'>
      <div className='flex md:h-[500px] text-5xl w-full md:flex-row-reverse flex-col gap-10'>
        <div className=' md:w-1/3'>
          <h2 className='space uppercase text-gray leading-[6rem] md:text-5xl font-bold'> who are we<span className="text-gum">?</span></h2>
        </div>
        <div className='md:w-2/3 flex justify-end items-end '>
          <p className='text-gray text-lg  inter md:block hidden'>We are a forward-thinking web design and development agency dedicated to boosting revenue and brand engagement. With our expertise in  emergent technologies, and years of experience, we track, optimize, and exponentially grow your web presence..</p>
          <p className='text-gray text-lg  inter md:hidden block leading-8'>We are a forward-thinking web design and development agency dedicated to boosting revenue and brand engagement. With our expertise in emergent technologies, and years of experience, we track, optimize, and exponentially grow your web presence.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner