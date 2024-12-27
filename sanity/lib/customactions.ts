import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);


export async function extendPublishAction(originalPublishAction:any){
    const Sendmail = (props:any) => {
        const originalResult = originalPublishAction(props)
        return {
          ...originalResult,
          onHandle: async () => {
            // Add our custom functionality
            // const { data, error } = await resend.emails.send({
            //     from: 'Acme <onboarding@resend.dev>',
            //     to: ['omakstejay@gmail.com'],
            //     subject: 'Hello world',
            //     html: '<p>Email is published</p>',
            //   });
            //   if(error){
            //     console.log("failed to send email")
            //   }
            console.log("hey")
            // then delegate to original handler
            originalResult.onHandle()
          },
        }
      }
      return Sendmail
}