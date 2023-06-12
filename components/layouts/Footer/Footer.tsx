import BigArrow from 'components/icons/BigArrow';
import Button from 'components/ui/Button';
import React from 'react'
import Marquee from "react-fast-marquee";


const Footer = () => {
  return (
    <footer className='bg-midnight '>
      <div className="flex h-[600px] flex-col bg-gray mx-8 rounded-md">
        <div className=' h-1/2  flex justify-center items-center'>
          <div className=' w-full'>
            <Marquee autoFill speed={40} play>
                <p className='text-5xl font-bold space mr-10 text-midnight'>GET IN TOUCH{" "}</p>
            </Marquee>
          </div>
        </div>
        <div className=' h-1/2 flex'>
          <div className='w-1/2 flex justify-center items-center'>
            <BigArrow fill="#99B2FF" w={14 * 10} h={19 * 10}/>
          </div>
          <div className='w-1/2'>
            <p className='text-base text-midnight'>Lorem ipsum dolor sit,<br /> amet consectetur adipisicing <br/> elit. Maiores, quibusdam!</p>
            <Button label="send us an email" className="gap-5 text-midnight mt-5" border="border-midnight" arrow="#1E2C54"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer