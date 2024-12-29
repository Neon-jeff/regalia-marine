import { NextResponse, NextRequest } from "next/server";
import nodemailer from 'nodemailer'
import { render } from '@react-email/components';
import {ArticleEmail} from '@/components/emails'
import { client } from "@/sanity/lib/client";





export async function POST(request: NextRequest) {
    const emails = await client.fetch(`*[_type == 'users'].email`)
    const body = await request.json()
    const {title,description,image,slug,author}=body
    const emailHtml = await render(ArticleEmail({title,description,image,slug,author}));
    // const reqBody=await request.json()
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_MAIL_USER,
          pass: process.env.NEXT_PUBLIC_MAIL_AUTH,
        },
      });
    
      const mailOptions: nodemailer.SendMailOptions = {
        from: `Regalia Marine <${process.env.NEXT_PUBLIC_MAIL_USER}>`, // sender address
        to: emails, // list of receivers
        subject: "New Article From Regalia Marine", // Subject line
        html:emailHtml
      };
      return await transporter
        .sendMail(mailOptions)
        .then((response: nodemailer.SentMessageInfo) => {
          return NextResponse.json({ error: false, emailSent: true, errors: [], response },{status:200})
        })
        .catch((error: nodemailer.SentMessageInfo) => {
          return NextResponse.json({ error: true, emailSent: false, errors: [error] },{status:500});
        })
}
