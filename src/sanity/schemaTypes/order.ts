export default {
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
