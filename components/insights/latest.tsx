import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
const LatestNews = () => {
  const youtubeIframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/DRmnkaWQp4o?si=HQA69iZZVRrqgp9L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

  return (
    <div className=' py-10 lg:px-20        space-y-16   relative'>
      <div className=' rounded-xl w-full  flex  bg-opacity-60 flex-col gap-5   '>
        <div className='bottom-0  '>
          <p className='border mb-2 w-fit bg-gray-50 p-2 max-md:px-5 text-sm rounded-full'>
            Top picks
          </p>
          <Image src='https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='blog image' height={500} width={500} className='  rounded-xl object-cover mt-5'/>
        <h1 className='text-xl max-md:text-base  text-black lg:w-2/3 py-4  font-medium '>Mastering Precision and Communication: The Art, Science, and Practical Techniques Behind Engineering Drawing </h1>
        <p></p>
        <Button className='w-fit py-5 bg-black rounded-lg'>Read more</Button>

        </div>
    
        {/* <div dangerouslySetInnerHTML={{__html:youtubeIframe}}>
          
        </div> */}
      </div>

    </div>
  )
}

export default LatestNews
