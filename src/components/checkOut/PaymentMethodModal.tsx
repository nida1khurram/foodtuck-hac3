import type React from "react"

interface PaymentMethodModalProps {
  onClose: () => void
  onStripeClick: () => void
}

const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({ onClose, onStripeClick }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
        <div className="flex flex-col space-y-4">
          <button onClick={onStripeClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Pay with Stripe
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodModal

