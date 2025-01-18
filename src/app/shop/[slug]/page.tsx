

'use client'

import { useState } from 'react'
import { Image as Iimage } from "sanity";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/container'
import { TopHeader } from '@/components/header/topHeader'
import { PHeader } from '@/components/header/t2'
import StarRating from '@/components/ratingStar/rating'
import ShopDescription from '@/components/shopDetail/shopDescription'
import SimilarProducts from '@/components/shopDetail/similarProducts'
import { client } from '@/sanity/lib/client'

interface Product {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags:string;
  image: string;
  description:string;
  available:boolean;
  slug: string;
}

async function getProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == "food" && slug.current == $slug][0]{
    name,
    category,
    price,
    originalPrice,
    tags,
     "image": image.asset->url,
    description,
    available,
    "slug": slug.current,
  }`
  return client.fetch(query, { slug })
}

function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false)
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      localStorage.setItem('cart', JSON.stringify([...cart, product]))
      router.push('/cart')
    }, 1000)
  }

  return (
    <button
      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors mb-4 ml-4"
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Container>
      <TopHeader />
      <PHeader title='Shop Details'/>  

      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 px-0 md:px-32">
            <Image
              src={product.image}
              // src={urlFor(product.image).url()}
              alt={product.name}
              width={400}
              height={400}
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-10">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl text-orange-500 font-bold mr-4">${product.price.toFixed(2)}</span>
              {product. originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product. originalPrice.toFixed(2)}</span>
              )}
            </div>
            {/* {product.rating && (
              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>
            )} */}
            <p className="mb-4">Category: {product.category}</p>
            {/* {product.sell && (
              <p className="mb-4 inline-block bg-orange-500 text-white px-2 py-1 rounded">{product.sell}</p>
            )} */}
            <AddToCartButton product={product} />
            <Link href="/shop" className="text-orange-500 font-bold hover:underline ml-4">
              Back to Shop
            </Link>
          </div>
        </div>

        {/* description */}
        <div className='mt-20'>
          <ShopDescription />
        </div>

        {/* similar product */}
        <SimilarProducts />
      </div>
    </Container>
  )
}





// import { Container } from '@/components/container';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import StarRating from '@/components/ratingStar/rating';
// import ShopDescription from '@/components/shopDetail/shopDescription';
// import SimilarProducts from '@/components/shopDetail/similarProducts';
// import { TopHeader } from '@/components/header/topHeader';
// import { PHeader } from '@/components/header/t2';
// import { client } from '@/sanity/lib/client';

// // Define Product type
// interface Product {
//   name: string;
//   slug: string;
//   image: string;
//   category: string;
//   price: number;
//   price2?: number;
//   rating?: number;
//   sell?: string;
// }

// export async function generateStaticParams() {
//   const query = `*[_type == "product"]{
//     "slug": slug.current
//   }`;
//   const products = await client.fetch(query);
//   return products.map((product: { slug: string }) => ({
//     slug: product.slug,
//   }));
// }

// async function getProduct(slug: string): Promise<Product | null> {
//   const query = `*[_type == "product" && slug.current == $slug][0]{
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     category,
//     price,
//     price2,
//     rating,
//     sell
//   }`;
//   return client.fetch(query, { slug });
// }

// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const product = await getProduct(params.slug);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <Container>
//       <TopHeader />
//       <PHeader title='Shop Details'/>  

//       <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/2 px-0 md:px-32">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="w-[400px] h-[400px] object-cover rounded-lg"
//             />
//           </div>
//           <div className="md:w-1/2 mt-10">
//             <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//             <div className="flex items-center mb-4">
//               <span className="text-2xl text-orange-500 font-bold mr-4">${product.price.toFixed(2)}</span>
//               {product.price2 && (
//                 <span className="text-xl text-gray-500 line-through">${product.price2.toFixed(2)}</span>
//               )}
//             </div>
//             {product.rating && (
//               <div className="mb-4">
//                 <StarRating rating={product.rating} />
//               </div>
//             )}
//             <p className="mb-4">Category: {product.category}</p>
//             {product.sell && (
//               <p className="mb-4 inline-block bg-orange-500 text-white px-2 py-1 rounded">{product.sell}</p>
//             )}
//             <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors mb-4 ml-4">
//               <Link href={'/cart'}>Add to Cart</Link>
//             </button>
//             <Link href="/shop" className="text-orange-500 font-bold hover:underline ml-4">
//               Back to Shop
//             </Link>
//           </div>
//         </div>

//         {/* description */}
//         <div className='mt-20'>
//           <ShopDescription />
//         </div>

//         {/* similar product */}
//         <SimilarProducts />
//       </div>
//     </Container>
//   );
// }





