"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Container } from "@/components/container"
import { TopHeader } from "@/components/header/topHeader"
import { PHeader } from "@/components/header/t2"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import Wishlist from "@/components/Wishlist"

interface CartItem {
  name: string
  image: string
  price: number
  slug: string
  quantity: number
}

interface WishlistItem {
  _id: string
  name: string
  image: string
  price: number
  slug: string
}

export default function CartPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

  // Load cart and wishlist data
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        const cartWithQuantity = cart.map((item: CartItem) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
        setCartItems(cartWithQuantity)

        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
        setWishlistItems(wishlist)
      } catch (error) {
        console.error("Error loading stored data:", error)
      }
    }

    loadStoredData()
  }, [])

  // Cart operations
  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeItem = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index)
    updateCart(newCart)
  }

  const updateQuantity = (index: number, change: number) => {
    const newCart = cartItems.map((item, i) => {
      if (i === index) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    updateCart(newCart)
  }

  // Wishlist operations
  const updateWishlist = (newWishlist: WishlistItem[]) => {
    setWishlistItems(newWishlist)
    localStorage.setItem("wishlist", JSON.stringify(newWishlist))
  }

  const removeFromWishlist = (id: string) => {
    const newWishlist = wishlistItems.filter((item) => item._id !== id)
    updateWishlist(newWishlist)
  }

  const moveToCart = (item: WishlistItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.slug === item.slug)
    if (existingCartItem) {
      updateQuantity(cartItems.indexOf(existingCartItem), 1)
    } else {
      const newCartItem: CartItem = { ...item, quantity: 1 }
      updateCart([...cartItems, newCartItem])
    }
    removeFromWishlist(item._id)
  }

  // Calculations
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCharges = 10
  const totalAmount = total + shippingCharges

  // Checkout handling
  const handleProceedToCheckout = async () => {
    if (status === "authenticated") {
      router.push("/checkout")
    } else {
      setIsSignInModalOpen(true)
    }
  }

  return (
    <Container>
      <TopHeader />
      <PHeader title="Cart" />

      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item, index) => (
                <li key={index} className="py-6 flex items-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-700 p-0"
                      onClick={() => router.push(`/shop/${item.slug}`)}
                    >
                      View Product
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(index, -1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(index, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => removeItem(index)}
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
            </div>
          </>
        )}

        {/* Wishlist Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
          <Wishlist items={wishlistItems} onRemove={removeFromWishlist} onMoveToCart={moveToCart} />
        </div>

        {/* Checkout Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your coupon code if you have one. A coupon code may provide a discount on your purchase.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter discount code"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                Apply
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charges</span>
                <span>${shippingCharges}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <Button onClick={handleProceedToCheckout} className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* Sign-In Modal */}
      <Modal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Sign In Required</h2>
          <p className="mb-4">You must sign in to proceed to checkout.</p>
          <Button
            onClick={() => {
              setIsSignInModalOpen(false)
              router.push("/signin")
            }}
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Sign In
          </Button>
        </div>
      </Modal>
    </Container>
  )
}



// "use client"
// // sign in
// import { useSession, signIn } from "next-auth/react"; // Import NextAuth hooks
// import { Modal } from "@/components/ui/modal"; // Example for a modal component
// // sign in
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Container } from "@/components/container"
// import { TopHeader } from "@/components/header/topHeader"
// import { PHeader } from "@/components/header/t2"
// import { Minus, Plus, Trash2 } from "lucide-react"
// import Wishlist from "../../components/Wishlist"

// interface CartItem {
//   name: string
//   image: string
//   price: number
//   slug: string
//   quantity: number
// }
// // wishlist
// interface WishlistItem {
//   _id: string
//   name: string
//   image: string
//   price: number
//   slug: string
// }

// export default function CartPage() {
//   // sign in
//   const { data: session } = useSession(); // Check user session
//   const [isSignInModalOpen, setIsSignInModalOpen] = useState(false); // Control modal visibility
//   // sign in
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   // wishlist
//   const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//     const cartWithQuantity = cart.map((item: CartItem) => ({ ...item, quantity: item.quantity || 1 }))
//     setCartItems(cartWithQuantity)
// // wishlist
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     setWishlistItems(wishlist)
//   }, [])

//   const updateCart = (newCart: CartItem[]) => {
//     setCartItems(newCart)
//     localStorage.setItem("cart", JSON.stringify(newCart))
//   }
// // wishlist
//   const updateWishlist = (newWishlist: WishlistItem[]) => {
//     setWishlistItems(newWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(newWishlist))
//   }

//   const removeItem = (index: number) => {
//     const newCart = cartItems.filter((_, i) => i !== index)
//     updateCart(newCart)
//   }

//   const updateQuantity = (index: number, change: number) => {
//     const newCart = cartItems.map((item, i) => {
//       if (i === index) {
//         const newQuantity = Math.max(1, item.quantity + change)
//         return { ...item, quantity: newQuantity }
//       }
//       return item
//     })
//     updateCart(newCart)
//   }
// // wishlist
//   const removeFromWishlist = (id: string) => {
//     const newWishlist = wishlistItems.filter((item) => item._id !== id)
//     updateWishlist(newWishlist)
//   }

//   const moveToCart = (item: WishlistItem) => {
//     const existingCartItem = cartItems.find((cartItem) => cartItem.slug === item.slug)
//     if (existingCartItem) {
//       updateQuantity(cartItems.indexOf(existingCartItem), 1)
//     } else {
//       const newCartItem: CartItem = { ...item, quantity: 1 }
//       updateCart([...cartItems, newCartItem])
//     }
//     removeFromWishlist(item._id)
//   }

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const shippingCharges = 10
//   const totalAmount = total + shippingCharges
// // sign in
// const handleProceedToCheckout = () => {
//   if (!session) {
//     // Show sign-in modal if user is not signed in
//     setIsSignInModalOpen(true);
//   } else {
//     // Redirect to checkout if signed in
//     window.location.href = "/checkout";
//   }
// };
// // sign in
//   return (
//     <Container>
//       <TopHeader />
//       <PHeader title="Cart" />

//       <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <ul className="divide-y divide-gray-200">
//               {cartItems.map((item, index) => (
//                 <li key={index} className="py-6 flex items-center">
//                   <Image
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.name}
//                     width={100}
//                     height={100}
//                     className="w-24 h-24 object-cover rounded-lg"
//                   />
//                   <div className="ml-4 flex-grow">
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>
//                     <Link href={`/shop/${item.slug}`} className="text-blue-500 hover:underline">
//                       View Product
//                     </Link>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => updateQuantity(index, -1)}
//                       className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
//                       aria-label="Decrease quantity"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="font-semibold">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(index, 1)}
//                       className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
//                       aria-label="Increase quantity"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeItem(index)}
//                     className="ml-4 p-2 text-red-500 hover:text-red-700"
//                     aria-label="Remove item"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-8 flex justify-end">
//               <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
//             </div>
//           </>
//         )}
//       </div>
//         {/* wishlist */}
//         <div className="mt-16">
//         <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
//         <Wishlist items={wishlistItems} onRemove={removeFromWishlist} onMoveToCart={moveToCart} />
//       </div>
//         {/* wishlist */}
//       <div className="mt-8 grid md:grid-cols-2 gap-4">
//         <div className="border rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
//           <p className="text-sm text-gray-600 mb-4">
//             Enter your coupon code if you have one. A coupon code may provide a discount on your purchase.
//           </p>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter discount code"
//               className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
//               Apply
//             </button>
//           </div>
//         </div>

//         <div className="border rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span>Cart Subtotal</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping Charges</span>
//               <span>${shippingCharges}</span>
//             </div>
//             <div className="flex justify-between font-semibold pt-2 border-t">
//               <span>Total Amount</span>
//               <span>${totalAmount.toFixed(2)}</span>
//             </div>
//           </div>
//           <button 
//            onClick={handleProceedToCheckout}
//           className="w-full mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
//             <Link href="">Proceed to Checkout</Link>
//           </button>
//         </div>
//         {/* sign in */}
//         {/* Sign-In Modal */}
//       <Modal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)}>
//         <div className="p-6">
//           <h2 className="text-lg font-semibold mb-4">Sign In Required</h2>
//           <p className="mb-4">You must sign in to proceed to checkout.</p>
//           <button
//             onClick={() => signIn()}
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Sign In
//           </button>
//         </div>
//       </Modal>
// {/* sign in */}

//       </div>

     
//     </Container>
//   )
// }

