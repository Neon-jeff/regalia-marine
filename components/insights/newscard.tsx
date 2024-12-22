import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';


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
      <span className='text-xs block'>{description.split(' ').slice(0,9).join(" ")}...</span>
      <p className='text-black  font-medium absolute -bottom-8 flex gap-2 items-center'>Read More <ArrowRight size={18}/></p>
    </Link>
  )
}

export default NewsCard
