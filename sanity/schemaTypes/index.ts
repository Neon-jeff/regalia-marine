import { type SchemaTypeDefinition } from 'sanity'
import { postSchema, userSchema } from '../schemas'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema,userSchema],
}
