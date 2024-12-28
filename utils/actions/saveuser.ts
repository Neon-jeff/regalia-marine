"use server";

import { client } from "@/sanity/lib/client";
import { revalidatePath } from 'next/cache'
import { render } from '@react-email/components';
import {NewsletterEmail} from '@/components/emails'
import nodemailer from 'nodemailer'


export async function AddUserToNewsLetter(state: {status:string}, formdata: FormData) {

    // check if user already exists
    const userArr = await client.fetch(`*[_type == 'users' && email == "${formdata.get('email')}"]`)
    if(userArr.length > 0){
        return { status: "exists" }
    }
  const new_user = {
    _type: "users",
    name: formdata.get("name"),
    email: formdata.get("email"),
  };
  const userFirstname=formdata.get("name")
  const email = formdata.get("email")

  try {
    client.create(new_user)
    const emailHtml = await render(NewsletterEmail({userFirstname}))
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.NEXT_PUBLIC_MAIL_USER,
              pass: process.env.NEXT_PUBLIC_MAIL_AUTH,
            },
          });
        
          const mailOptions: nodemailer.SendMailOptions = {
            from: 'jeffneon78@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Newsletter Subscription", // Subject line
            html:emailHtml
          };
          return await transporter
            .sendMail(mailOptions)
            .then((response: nodemailer.SentMessageInfo) => {
              revalidatePath('/content-studio/structure/users')
              revalidatePath('/')
              return {status: "success"}
            })
            .catch((error: nodemailer.SentMessageInfo) => {
              revalidatePath('/content-studio/structure/users')
              revalidatePath('/')
              return { status: "error" }
            })

           
           
    
  } 
  catch (error) {
    console.error("Something went wrong", error);
    return { status: "error" };
  }
}
