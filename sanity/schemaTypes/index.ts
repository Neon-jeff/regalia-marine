import { type SchemaTypeDefinition } from 'sanity'
import { postSchema } from '../schemas'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema],
}
