



"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"
import OrderPlacedPopup from "./OrderPlacedPopup"
import PaymentMethodModal from "./PaymentMethodModal"
import { saveSanityOrder } from "../../lib/sanity"

interface CartItem {
  name: string
  image: string
  price: number
  quantity: number
}

interface FormData {
  name: string
  email: string
  address: string
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [shippingCharges, setShippingCharges] = useState(10)
  const [totalWithShipping, setTotalWithShipping] = useState(0)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", address: "" })
  const [showOrderPlacedPopup, setShowOrderPlacedPopup] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart)
    const cartTotal = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)
    setTotal(cartTotal)
  }, [])

  useEffect(() => {
    setTotalWithShipping(total + shippingCharges)
  }, [total, shippingCharges])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }



  const proceedToPayment = async () => {
    setShowOrderPlacedPopup(true)
    await saveSanityOrder(formData, cartItems, totalWithShipping)
    setTimeout(() => {
      setShowOrderPlacedPopup(false)
      setShowPaymentModal(true)
    }, 2000)
  }

  const handleStripePayment = async () => {
    try {
      const response = await axios.post("/api/stripe-checkout", {
        cartItems,
        shippingCharges,
      })
      const checkoutUrl = response.data?.message?.url

      if (checkoutUrl) {
        window.location.href = checkoutUrl
      }
    } catch (error) {
      console.error("Error initiating payment:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={handleInputChange}
              />
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
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="mr-4"
                  />
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
              <div className="border-t flex justify-between items-center font-bold text-lg mt-4">
                <h3>Total</h3>
                <p>${totalWithShipping.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOrderPlacedPopup && <OrderPlacedPopup />}
      {showPaymentModal && (
        <PaymentMethodModal onClose={() => setShowPaymentModal(false)} onStripeClick={handleStripePayment} />
      )}
    </div>
  )
}


