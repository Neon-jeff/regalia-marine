import React from 'react'
import { client } from '@/sanity/lib/client'
import { PostType } from '@/utils/types'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {getImageUrl} from '@/utils/sanityImageUrl'
import Link from 'next/link'
import {ChevronLeft,UserRoundPen,CalendarDays} from 'lucide-react'
const fetchPost=async(slug:string):Promise<PostType>=>{
  const query=`*[_type == 'posts' && slug.current == '${slug}']{title,description,_createdAt,body,'slug':slug.current,coverimage,author}`
  const data=await client.fetch(query)
  return data[0]
}

const PostDetails = async({params}:{params:{slug:string}}) => {
    const post = await fetchPost(params?.slug)
    const formatDate=(date:string):string=>{
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
  return (
    <div className='pt-36 bg-white min-h-screen  mx-auto lg:px-20 px-4'>

      <div className='lg:w-3/5 mx-auto space-y-4'>
      <Link href='/insights' className='text-ultramarine-600 flex items-center gap-2 hover:underline mb-5  text-base' >
        <ChevronLeft size={20} />
      Back to Insights
      </Link>
      <h1 className='text-4xl lg:w-3/4 text-black font-semibold'>{post.title}</h1>
      <div className='flex gap-10 py-3'>
      <p className='flex items-center gap-2'>
      <CalendarDays size={20}/>{formatDate(post['_createdAt'])}
      </p>
      <p className='flex items-center gap-2'> <UserRoundPen size={20} /> {post.author}</p>
      </div>
      <p></p>
      <div className='h-[70vh] bg-gray-300 rounded-lg'>
          <Image src={getImageUrl(post.coverimage).url()} alt='Blog Image' width={500} height={500} className='h-full w-full object-cover rounded-lg'/>
      </div>

      {/* post description */}
      <p className='text-sm  font-medium'>
        "{post.description}"
      </p>
      <div className='prose'>
        <PortableText value={post.body}/>
      </div>
      </div>
    </div>
  )
}

export default PostDetails
