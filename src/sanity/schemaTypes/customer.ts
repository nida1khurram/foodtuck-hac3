export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
      {
        name: 'postcode',
        title: 'Postcode',
        type: 'string',
      },
      {
        name: 'orderTotal',
        title: 'Order Total',
        type: 'number',
      },
      {
        name: 'orderItems',
        title: 'Order Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string' },
              { name: 'quantity', type: 'number' },
              { name: 'price', type: 'number' },
            ],
          },
        ],
      },
    ],
  }
  
  