import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingCart } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"

interface WishlistItem {
  _id: string
  name: string
  slug: string
  price: number
  image: string
}

interface WishlistProps {
  items: WishlistItem[]
  onRemove: (id: string) => void
  onMoveToCart: (item: WishlistItem) => void
  showActions?: boolean
}

const Wishlist: React.FC<WishlistProps> = ({ items, onRemove, onMoveToCart, showActions = true }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your wishlist is empty.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item._id} className="border rounded-lg p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src={urlFor(item.image).url() || "/placeholder.svg"}
              alt={item.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4 flex-grow">
              <Link href={`/shop/${item.slug}`}>
                <h3 className="font-semibold hover:text-orange-500">{item.name}</h3>
              </Link>
              <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>
            </div>
          </div>
          {showActions && (
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => onMoveToCart(item)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                aria-label={`Add ${item.name} to cart`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => onRemove(item._id)}
                className="p-2 text-red-500 hover:text-red-700"
                aria-label={`Remove ${item.name} from wishlist`}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Wishlist



// Componentswishlist.tsx
// Productlistwishlist
// Cartpagewishlist

