import {z} from "zod";

export const auroraFormSchema = z.object({
  first_name: z.string().min(4,{
    message: "First name must be at least 4 characters long"
  }).max(50).trim(),
  last_name: z.string().min(4,{
    message: "Last name must be at least 4 characters long"
  }).max(50).trim(),
  email: z.string().email().trim(),
  tertiary_institution: z.string().min(4,{
    message: "Tertiary institution must be at least 4 characters long"
  }).max(50).trim(),
  company: z.string().min(3,{
    message: "Company must be at least 3 characters long"
  }).max(50).trim(),
  role: z.string().min(4,{
    message: "Role must be at least 4 characters long"
  }).max(50).trim(),
  social_media: z.url(
    {
      message: "Social media must be a valid Link",
      pattern: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/
    }
  ).min(4,{
    message: "Social media must be a valid Link"
  }).max(50).trim()
});

export type AuroraFormSchema = z.infer<typeof auroraFormSchema>;