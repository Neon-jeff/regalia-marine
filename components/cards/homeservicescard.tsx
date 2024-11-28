import { StaticImageData } from 'next/image'
import React from 'react'

type CardProps = {
  image:StaticImageData
  title:string
  description:string
}

const HomeServicesCard = ({image,title,description}:CardProps) => {
  return (
    <div className=''>
      <Image src={image}/>


    </div>
  )
}

export default HomeServicesCard
