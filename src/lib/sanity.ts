// import { createClient } from "@sanity/client"

// const client = createClient({
//   projectId: "59tutyqo",
//   dataset: "production",
//   useCdn: false,
//   token: process.env.SANITY_ACESS_TOKEN,
// })

// export async function saveSanityOrder(formData: any, cartItems: any, total: number) {
//   try {
//     const order = {
//       _type: "order",
//       customerName: formData.name,
//       customerEmail: formData.email,
//       customerAddress: formData.address,
//       items: cartItems.map((item: any) => ({
//         _type: "orderItem",
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       total: total,
//       createdAt: new Date().toISOString(),
//     }
// console.log(order)
//     await client.create(order)
//   } catch (error) {
//     console.error("Error saving order to Sanity:", error)
//   }
// }

import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "59tutyqo",
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_ACESS_TOKEN,
})
export async function saveSanityOrder(formData: any, cartItems: any, total: number) {
  try {
    const order = {
      _type: "order",
      user: formData.name,
      email: formData.email, // ✅ Check if email is stored correctly
      address: formData.address,
      total: total,
      date: new Date().toISOString(),
      cartItems: cartItems.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    console.log("Saving Order:", order); // ✅ Debugging



    await client.create(order);
    console.log("✅ Order Saved Successfully");

  } catch (error) {
    console.error("❌ Error saving order:", error);
  }
}

