// import { useEffect, useState } from "react";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import React from "react";
// import { PaginationProduct } from "../../components/pagination";

// // Fetch products using the Sanity client
// const fetchProducts = async (): Promise<IProduct[]> => {
//   const query = `*[_type == "food"]{
//      name,
//     category,
//     price,
//     originalPrice,
//     tags,
//     image,
//     description,
//     available,
//     "slug": slug.current,
//   }`;
//   return await client.fetch(query);
// };

// // Define Product type
// interface IProduct {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   tags: string;
//   image: any;
//   description: string;
//   available: boolean;
//   slug: string;
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4; // Number of items per page

//   // Fetch products on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Pagination calculations
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {paginatedProducts.map(
//           ({ slug, image, name, price, originalPrice, category, tags, description, available }) => (
//             <div
//               key={slug}
//               className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
//             >
//               <Link href={`/shop/${slug}`}>
//                 <div className="relative group">
//                   <Image
//                     src={urlFor(image).url()}
//                     alt={name}
//                     width={200}
//                     height={200}
//                     className="object-cover w-full h-64"
//                   />
//                 </div>
//               </Link>
//               <div className="p-4">
//                 <Link href={`/shop/${slug}`}>
//                   <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
//                     {name}
//                   </h3>
//                 </Link>
//                 <div className="flex items-center justify-between">
//                   <span className="text-orange-500 font-bold">
//                     ${price.toFixed(2)}
//                   </span>
//                   {originalPrice && (
//                     <span className="text-gray-600 line-through">
//                       ${originalPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         <PaginationProduct
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductList;






// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { client } from "../../sanity/lib/client"
// import { urlFor } from "../../sanity/lib/image"
// import type { Image as Iimage } from "sanity"
// import type React from "react"
// import { FaHeart } from "react-icons/fa"
// import Wishlist from "../../components/Wishlist"
// import { PaginationProduct } from "@/components/pagination";


// // Fetch products using the Sanity client
// const fetchProducts = async (): Promise<IProduct[]> => {
//   const query = `*[_type == "food"]{
//      name,
//     category,
//     price,
//     originalPrice,
//     tags,
//     image,
//     description,
//     available,
//     "slug": slug.current,
//   }`
//   return await client.fetch(query)
// }

// // Define Product type
// interface IProduct {
//   name: string
//   category: string
//   price: number
//   originalPrice?: number
//   tags: string
//   image: Iimage
//   description: string
//   available: boolean
//   slug: string
// }
// // wishlist
// interface WishlistItem {
//   _id: string
//   name: string
//   slug: string
//   price: number
//   image: string
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<IProduct[]>([])
//   const [loading, setLoading] = useState(true)
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([])

// // Pagination states
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 4; // Number of items per page
// // Pagination states

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProducts()
//         setProducts(data)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()

//     // Load wishlist from localStorage start
//     const storedWishlist = localStorage.getItem("wishlist")
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist))
//     }
//   }, [])

//   const toggleWishlist = (product: IProduct) => {
//     const index = wishlist.findIndex((item) => item.slug === product.slug)
//     let newWishlist
//     if (index === -1) {
//       newWishlist = [
//         ...wishlist,
//         {
//           _id: product.slug,
//           name: product.name,
//           slug: product.slug,
//           price: product.price,
//           image: urlFor(product.image).url(),
//         },
//       ]
//     } else {
//       newWishlist = wishlist.filter((item) => item.slug !== product.slug)
//     }
//     setWishlist(newWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(newWishlist))
//   }

//   const removeFromWishlist = (id: string) => {
//     const newWishlist = wishlist.filter((item) => item._id !== id)
//     setWishlist(newWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(newWishlist))
//   }
//   // Pagination calculations
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };
//  // Pagination calculations

//  // Load wishlist from localStorage end
//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div key={product.slug} className="max-w-[312px] rounded-lg shadow-md overflow-hidden relative">
//             <Link href={`/shop/${product.slug}`}>
//               <div className="relative group">
//                 <Image
//                   src={urlFor(product.image).url() || "/placeholder.svg"}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="object-cover w-full h-64"
//                 />
//               </div>
//             </Link>
//             <div className="p-4">
//               <Link href={`/shop/${product.slug}`}>
//                 <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">{product.name}</h3>
//               </Link>
//               <div className="flex items-center justify-between">
//                 <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
//                 {product.originalPrice && (
//                   <span className="text-gray-600 line-through">${product.originalPrice.toFixed(2)}</span>
//                 )}
//               </div>
//             </div>
//             {/* wishlist start */}
//             <button
//               onClick={() => toggleWishlist(product)}
//               className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
//               aria-label={
//                 wishlist.some((item) => item.slug === product.slug) ? "Remove from wishlist" : "Add to wishlist"
//               }
//             >
//               <FaHeart
//                 className={`${wishlist.some((item) => item.slug === product.slug) ? "text-red-500" : "text-gray-400"}`}
//               />
//             </button>
//              {/* wishlist end */}
//           </div>
//         ))}
//       </div>

//       <div className="mt-16">
//         <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
//         <Wishlist
//           items={wishlist}
//           onRemove={removeFromWishlist}
//           onMoveToCart={() => {}} // Implement this function if needed
//           showActions={false}
//         />
//       </div>
//         {/* Pagination */}
//         <div className="mt-8 flex justify-center">
//         <PaginationProduct
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//        {/* Pagination */}
//     </div>
//   )
 
// }

// export default ProductList


import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import type { Image as Iimage } from "sanity";
import type React from "react";
import { FaHeart } from "react-icons/fa";
import Wishlist from "../../components/Wishlist";
import { PaginationProduct } from "@/components/pagination";

// Fetch products using the Sanity client
const fetchProducts = async (): Promise<IProduct[]> => {
  const query = `*[_type == "food"]{
     name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available,
    "slug": slug.current,
  }`;
  return await client.fetch(query);
};

// Define Product type
interface IProduct {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string;
  image: Iimage;
  description: string;
  available: boolean;
  slug: string;
}
// wishlist
interface WishlistItem {
  _id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Load wishlist from localStorage start
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const toggleWishlist = (product: IProduct) => {
    const index = wishlist.findIndex((item) => item.slug === product.slug);
    let newWishlist;
    if (index === -1) {
      newWishlist = [
        ...wishlist,
        {
          _id: product.slug,
          name: product.name,
          slug: product.slug,
          price: product.price,
          image: urlFor(product.image).url(),
        },
      ];
    } else {
      newWishlist = wishlist.filter((item) => item.slug !== product.slug);
    }
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (id: string) => {
    const newWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  // Pagination calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProducts.map((product) => (
          <div key={product.slug} className="max-w-[312px] rounded-lg shadow-md overflow-hidden relative">
            <Link href={`/shop/${product.slug}`}>
              <div className="relative group">
                <Image
                  src={urlFor(product.image).url() || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-64"
                />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/shop/${product.slug}`}>
                <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">{product.name}</h3>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-600 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
            {/* wishlist start */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
              aria-label={
                wishlist.some((item) => item.slug === product.slug) ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <FaHeart
                className={`${wishlist.some((item) => item.slug === product.slug) ? "text-red-500" : "text-gray-400"}`}
              />
            </button>
            {/* wishlist end */}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        <Wishlist
          items={wishlist}
          onRemove={removeFromWishlist}
          onMoveToCart={() => {}} // Implement this function if needed
          showActions={false}
        />
      </div>
      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <PaginationProduct
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {/* Pagination */}
    </div>
  );
};

export default ProductList;

