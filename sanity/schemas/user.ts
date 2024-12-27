import {Rule} from 'sanity'
import {client} from '@/sanity/lib/client'


const getUsersLength= async () =>{   
   const count= await client.fetch('count(*[_type=="users"])')
   console.log(count)
   return count
}

export const users ={
    name:"users",
    title:`Users ${await getUsersLength()}`,
    type:"document",
    fields:[
        {
            name:"name",
            title:"Full Name",
            type:"string",
            validation:(rule:Rule)=>[rule.required().min(6).error("Full name must be more than 6 characteres")]
        },
        {
            name:'email',
            title:"Email Address",
            type:'string',
            validation:(rule:Rule)=>[rule.required().min(7).error("Email must be more than 7 characters"),rule.email().error("Add a valid email address")]
        }
    ]

}