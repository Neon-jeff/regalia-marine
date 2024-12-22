import React from 'react'
import Link from "next/link";
import Image from 'next/image'

type NewsCardProps={
    title:string;
    slug:string;
    description:string;
    _createdAt?:string;
    coverimage:string
}

const NewsCard = ({title,slug,description,_createdAt,coverimage}:NewsCardProps) => {
  return (
    <Link href={`/insights/${slug}`} className='space-y-2 min-h-48 relative  cursor-pointer'>
      <Image src={coverimage} alt={slug} width={500} height={500} className='w-full h-36 rounded-lg object-cover'/>
      <span className='text-sm block text-black font-medium'>{title}</span>
      <span className='text-xs block'>{description.split(' ').slice(0,10).join(" ")}...</span>
      <p className='text-ultramarine-600  font-medium absolute -bottom-5'>Read More</p>
    </Link>
  )
}

export default NewsCard
