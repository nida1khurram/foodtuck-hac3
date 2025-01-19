import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_ACESS_TOKEN,
})

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const body = await req.json()
      const { customerData, cartItems, total } = body

      const doc = {
        _type: 'order',
        customerData: customerData,
        orderItems: cartItems.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        orderTotal: total,
        createdAt: new Date().toISOString(),
      }

      const result = await client.create(doc)
      console.log(result)
      return NextResponse.json({ success: true, id: result._id })
    } catch (error) {
      console.error('Error submitting to Sanity:', error)
      
      return NextResponse.json({ success: false, error: 'Error submitting order' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 })
  }
}

