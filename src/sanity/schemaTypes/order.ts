export default {
<<<<<<< HEAD
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
    {
      name: "total",
      title: "Total Price",
      type: "number",
    },
    {
      name: "date",
      title: "Order Date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    },
  ],
};
=======
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }]
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
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
              { name: 'product', title: 'Product', type: 'string' },
              { name: 'quantity', title: 'Quantity', type: 'number' },
              { name: 'price', title: 'Price', type: 'number' },
            ],
          },
        ],
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
      },
    ],
  }
>>>>>>> a74457dfb43b7974c9725e4725ef4bc5e376ac8a
