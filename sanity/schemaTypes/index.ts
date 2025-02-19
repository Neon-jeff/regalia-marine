import { type SchemaTypeDefinition } from 'sanity'
import { postSchema, userSchema, categorySchema } from "../schemas";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema,userSchema,categorySchema],
}
