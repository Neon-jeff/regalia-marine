import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Trainings = () => {
  return (
    <div className='p-10 space-y-10 max-sm:px-5 font-light' >
      <h1 className='text-3xl font-normal text-ultramarine-600'>Training Schedules</h1>

      {/* training cards */}
<div className='grid xl:grid-cols-2 gap-10 w-full'>
<div className='bg-white flex flex-col-reverse   rounded-xl '>
        <div className='space-y-4 p-5'>
        <h1 className='text-xl text-slate-500 font-medium  '>
            Regalia Marine <br /> Internship ( 1.0 )
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugiat praesentium ipsam porro ratione tenetur inventore iste, ex accusamus earum similique sequi velit optio suscipit ipsum rerum adipisci odio voluptatem.</p>

        <div className='flex flex-col gap-0.5'>
            <span className='font-medium'>Application Closes:</span>
            <span>January 25, 2025</span>
        </div>

        <Button variant={'default'} >Register Now</Button>
        </div>
        <Image src={'https://images.pexels.com/photos/13170673/pexels-photo-13170673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='training image banner cohort one' width={500} height={500} className='w-full object-cover h-72'/>
      </div>

      <div className='bg-white flex flex-col-reverse   rounded-xl '>
        <div className='space-y-4 p-5'>
        <h1 className='text-xl text-slate-500 font-medium  '>
            Computer Aided Design <br /> Master Class ( 1.0 )
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugiat praesentium ipsam porro ratione tenetur inventore iste, ex accusamus earum similique sequi velit optio suscipit ipsum rerum adipisci odio voluptatem.</p>

        <div className='flex flex-col gap-0.5'>
            <span className='font-medium'>Application Closes:</span>
            <span>January 25, 2025</span>
        </div>
        <Button variant={'default'} >Register Now</Button>
        </div>
        <Image src={'https://images.pexels.com/photos/3912948/pexels-photo-3912948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='training image banner cohort one' width={500} height={500} className='w-full object-cover h-72'/>
      </div>
</div>
      
      
    </div>
  )
}

export default Trainings
