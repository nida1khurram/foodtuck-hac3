import { type SchemaTypeDefinition } from 'sanity'

import foods from './foods'
import chefs from './chefs'
import customer from './customer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs,customer],
}
