import { client } from "./client";

export async function fetchOrders(email: string) {
  if (!email) return [];

  try {
    const orders = await client.fetch(
      `*[_type == "order" && email == $email] | order(date desc)`,
      { email }
    );

    console.log("✅ Fetched orders:", orders);
    return orders;
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    return [];
  }
}




// import { client } from "./client";

// export const fetchOrders = async (email: string) => {
//   try {
//     const query = `*[_type == "order" && email == $email] | order(date desc) {
//       _id,
//       user,
//       email,
//       address,
//       cartItems,
//       total,
//       date
//     }`;
    
//     const orders = await client.fetch(query, { email });
//     return orders;
//   } catch (error) {
//     console.error("Error fetching orders from Sanity:", error);
//     return [];
//   }
// };
