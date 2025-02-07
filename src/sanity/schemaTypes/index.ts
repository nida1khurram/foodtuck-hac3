import { type SchemaTypeDefinition } from 'sanity'

import foods from './foods'
import chefs from './chefs'
import customer from './customer'
import order from './order'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs,customer,order],
}
