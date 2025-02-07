"use client";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../sanity/lib/fetchOrders";
import { useSession } from "next-auth/react";

export default function UserOrders() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchOrders(session.user.email).then(setOrders);
    }
  }, [session]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded mb-2">
              <h2 className="text-lg font-semibold">{order.user}</h2>
              <p>Email: {order.email}</p>
              <p>Address: {order.address}</p>
              <p>Total: ${order.total}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <h3 className="font-semibold mt-2">Items:</h3>
              <ul>
                {order.cartItems.map((item: any, index: number) => (
                  <li key={index}>
                    {item.quantity}x {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



// "use client";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { client } from "../../sanity/lib/client";

// export default function UserOrders() {
//   const { data: session } = useSession();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // ✅ Check if session is loaded
//     if (!session) {
//       console.warn("⚠️ No session found!");
//       return;
//     }

//     console.log("✅ Session Data:", session); // 🔹 Check full session info

//     if (!session?.user?.email) {
//       console.warn("⚠️ No user email found!");
//       return;
//     }

//     console.log("📩 Fetching orders for:", session.user.email);

//     client
//       .fetch(
//         `*[_type == "order" && email == $email] | order(_createdAt desc)`,
//         { email: session.user.email }
//       )
//       .then((data) => {
//         console.log("✅ Fetched Orders:", data);
//         setOrders(data);
//       })
//       .catch((err) => console.error("❌ Error fetching orders:", err));
//   }, [session]);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
//       {orders.length === 0 ? <p>No orders found.</p> : <p>Orders exist!</p>}
//     </div>
//   );
// }
