import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

export const getImageUrl=(source:any)=>{
    console.log(builder.image(source).url())
    return builder.image(source)
}