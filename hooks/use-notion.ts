import { AuroraFormSchema } from "@/schemas/aurora-register";
import { UploadToNotionDB } from "@/utils/actions/notion";
import { useMutation } from "@tanstack/react-query";

export function useInsertToNotionDatabase(){
    return useMutation({
        mutationFn: async (data:AuroraFormSchema & {paymentRef:string})=>{
            await UploadToNotionDB(data)
        }
    })
}