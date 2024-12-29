import {getImageUrl} from '@/utils/sanityImageUrl'
export  function extendPublishAction(originalPublishAction:any){
    const Sendmail = (props:any) => {
        const originalResult = originalPublishAction(props)
        return {
          ...originalResult,
          onHandle: async () => {
            const content=props.draft

            const {title,description,slug,coverimage,author} = content
            const image = getImageUrl(coverimage).url()
            const response=await fetch('/api/article-notification',{method:'post',body:JSON.stringify({title,description,slug:slug.current,image,author})})
            console.log(response)

        
            // then delegate to original handler
            originalResult.onHandle()
          },
        }
      }
      return Sendmail
}