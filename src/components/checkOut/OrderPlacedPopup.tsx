import type React from "react"

const OrderPlacedPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Order Placed!</h2>
        <p>Your order has been successfully placed. Proceeding to payment...</p>
      </div>
    </div>
  )
}

export default OrderPlacedPopup

