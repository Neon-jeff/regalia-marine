'use client'

import Image from 'next/image'
import React from 'react'
import image from '@/public/images/training-hero.png'
import { Button } from '../ui/button'
import { motion as m } from 'motion/react'

const TrainingHeader = () => {
  return (
    <div className='pt-36 px-10 max-md:px-5  mx-auto  flex flex-col text-center relative overflow-x-hidden items-center  justify-center'>
      <div className='space-y-6 font-light z-[1] xl:w-2/3 place-items-center'>
      <m.h1 initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}  transition={{duration:1}}  className='text-6xl max-sm:text-4xl text-ultramarine-600 font-light'>
        Find the best marine engineering training courses
      </m.h1>
      <m.p animate={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1,y:{duration:1},type:'tween'}} className='text-pretty md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi ullam? Aperiam nam ullam vero sed aliquam non error eum?</m.p>
      <Button variant={'gradient'} className='px-16 mt-8'>See trainings</Button>
      </div>
      {/* blur side */}
      <m.div initial={{scale:.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0,duration:1}} className='relative place-items-center max-sm:w-full max-sm:mt-10 text-start'>
      <m.div initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} tranistion={{delay:0,type:'tween',ease:'easeIn'}}  className='  text-xs w-3/5  space-y-1 bg-white absolute bottom-10 max-sm:bottom-5 -right-20 max-sm:right-0   p-2 rounded-md z-[1]'>
        <p className='text-sm max-sm:text-xs font-light text-green-500'>Hands on experience</p>
        <p className='max-sm:text-[.6rem] max-sm:font-normal'>Lorem ipsum dolor sit, amet consectetur </p>
      </m.div>
      <m.div initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} tranistion={{type:'tween',duration:6,ease:'easeIn'}} className='  text-xs w-3/5 space-y-1  bg-white absolute top-10 max-sm:top-5 -left-20 max-sm:left-0  p-2 rounded-md z-[1]'>
        <p className='text-sm max-sm:text-xs  font-light text-cyan-500'>Remote Access</p>
        <p className='max-sm:text-[.6rem] max-sm:font-normal'>Lorem ipsum dolor sit, amet consectetur </p>
      </m.div>
      <div className='h-[90vh] w-[90vh] max-sm:w-[80vw] max-sm:h-[80vw] rounded-full bg-blue-300 bg-opacity-30 blur-3xl left-1/2 -translate-x-1/2  absolute bottom-5 z-0'/>
      <Image src={image} alt='Regalia training page header' className=' scale-75'/>
      </m.div>
    </div>
  )
}

export default TrainingHeader
