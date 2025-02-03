import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

export async function saveSanityOrder(formData: any, cartItems: any, total: number) {
  try {
    const order = {
      _type: "order",
      customerName: formData.name,
      customerEmail: formData.email,
      customerAddress: formData.address,
      items: cartItems.map((item: any) => ({
        _type: "orderItem",
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: total,
      createdAt: new Date().toISOString(),
    }

    await client.create(order)
  } catch (error) {
    console.error("Error saving order to Sanity:", error)
  }
}

