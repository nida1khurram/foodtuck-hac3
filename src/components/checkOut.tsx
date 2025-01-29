
'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(10); // Default shipping charge
  const [totalWithShipping, setTotalWithShipping] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
    const cartTotal = cart.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, []);

  useEffect(() => {
    setTotalWithShipping(total + shippingCharges);
  }, [total, shippingCharges]);

  const proceedToPayment = async () => {
    try {
      const response = await axios.post("/api/stripe-checkout", {
        cartItems,
        shippingCharges,
      });
      const checkoutUrl = response.data?.message?.url;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">Address</label>
              <input type="text" id="address" name="address" required className="w-full p-2 border rounded" />
            </div>
            <button
              type="button"
              onClick={proceedToPayment}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div className="border p-4 rounded">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="mr-4" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Subtotal</h3>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <h3 className="font-bold">Shipping</h3>
                <p>${shippingCharges.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center font-bold text-lg mt-4">
                <h3>Total</h3>
                <p>${totalWithShipping.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'
// import axios from "axios"

// interface CartItem {
//   name: string
//   image: string
//   price: number
//   quantity: number
// }

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const [total, setTotal] = useState(0)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]')
//     setCartItems(cart)
//     const cartTotal = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
//     setTotal(cartTotal)
//   }, [])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     const formData = new FormData(e.target as HTMLFormElement)
//     const customerData = Object.fromEntries(formData.entries())

//     try {
//       const response = await axios.post('/api/submit-order', {
//         customerData,
//         cartItems,
//         total: totalAmount,
//       })

//       if (response.data.success) {
//         localStorage.setItem('checkoutData', JSON.stringify(customerData))
//         proceedToPayment()
//       } else {
//         console.error('Error submitting order:', response.data.error)
//         alert('There was an error submitting your order. Please try again.')
//       }
//     } catch (error) {
//       console.error('Error submitting order:', error)
//       alert('There was an error submitting your order. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const proceedToPayment = () => {
//     axios.get('api/stripe-checkout').then((response) => {
//       console.log(response.data?.message?.url)
//       window.location.href = response.data?.message?.url
//     }).catch(error => {
//       console.log(error)
//       alert('There was an error processing your payment. Please try again.')
//     })
//   }

//   const shippingCharges = 10
//   const totalAmount = total + shippingCharges

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full lg:w-1/2 px-4 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block mb-2">Full Name</label>
//               <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block mb-2">Email Address</label>
//               <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="address" className="block mb-2">Address</label>
//               <input type="text" id="address" name="address" required className="w-full p-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="city" className="block mb-2">City</label>
//               <input type="text" id="city" name="city" required className="w-full p-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="country" className="block mb-2">Country</label>
//               <input type="text" id="country" name="country" required className="w-full p-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="postcode" className="block mb-2">Postcode</label>
//               <input type="text" id="postcode" name="postcode" required className="w-full p-2 border rounded" />
//             </div>
//             <button 
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
//             >
//               {isSubmitting ? 'Submitting...' : 'Place Order and Proceed to Payment'}
//             </button>
//           </form>
//         </div>
//         <div className="w-full lg:w-1/2 px-4">
//           <h2 className="text-2xl font-bold mb-4">Your Order</h2>
//           <div className="border p-4 rounded">
//             {cartItems.map((item, index) => (
//               <div key={index} className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   <Image src={item.image || "/placeholder.svg"} alt={item.name} width={50} height={50} className="mr-4" />
//                   <div>
//                     <h3 className="font-bold">{item.name}</h3>
//                     <p>Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//                 <p>${(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             ))}
//             <div className="border-t pt-4 mt-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h3>Subtotal</h3>
//                 <p>${total.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between items-center mb-2">
//                 <h3>Shipping</h3>
//                 <p>${shippingCharges.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between items-center font-bold">
//                 <h3>Total</h3>
//                 <p>${totalAmount.toFixed(2)}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


