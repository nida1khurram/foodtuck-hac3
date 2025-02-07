
import { client } from "./client";

// Define TypeScript interfaces for order data
interface FormData {
  name: string;
  email: string;
  address: string;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface Order {
  _type: string;
  user: string;
  email: string;
  address: string;
  total: number;
  date: string;
  cartItems: { _type: "cartItem"; name: string; price: number; quantity: number; image?: string }[];
}

export async function saveSanityOrder(
  formData: FormData,
  cartItems: CartItem[],
  total: number
): Promise<void> {
  if (!formData.email) {
    console.error("❌ User email is missing!");
    return;
  }

  const order: Order = {
    _type: "order",
    user: formData.name,
    email: formData.email,
    address: formData.address,
    total,
    date: new Date().toISOString(),
    cartItems: cartItems.map((item) => ({
      _type: "cartItem",
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image || "/placeholder.svg",
    })),
  };

  try {
    const response = await client.create(order);
    console.log("✅ Order saved to Sanity:", response);
  } catch (error) {
    console.error("❌ Error saving order:", error);
  }
}










// import { client } from "./client";

// // ✅ Define Type for Form Data
// interface FormData {
//   name: string;
//   email: string;
//   address: string;
// }

// // ✅ Define Type for Cart Item
// interface CartItem {
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
// }

// // ✅ Define Type for Order
// interface Order {
//   _type: string;
//   user: string;
//   email: string;
//   address: string;
//   total: number;
//   date: string;
//   cartItems: CartItem[];
// }

// // ✅ Update Function with Type Safety
// export async function saveSanityOrder(
//   formData: FormData,
//   cartItems: CartItem[],
//   total: number
// ): Promise<void> {
//   if (!formData.email) {
//     console.error("❌ User email is missing!");
//     return;
//   }

//   const order: Order = {
//     _type: "order",
//     user: formData.name,
//     email: formData.email,
//     address: formData.address,
//     total,
//     date: new Date().toISOString(),
//     cartItems: cartItems.map((item) => ({
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//       image: item.image || "/placeholder.svg",
//     })),
//   };

//   try {
//     await client.create(order);
//     console.log("✅ Order saved to Sanity:", order);
//   } catch (error) {
//     console.error("❌ Error saving order:", error);
//   }
// }
