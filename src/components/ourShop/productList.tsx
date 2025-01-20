import { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import React from "react";
import { PaginationProduct } from "../../components/pagination";

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
  image: any;
  description: string;
  available: boolean;
  slug: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  // Fetch products on mount
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Pagination calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProducts.map(
          ({ slug, image, name, price, originalPrice, category, tags, description, available }) => (
            <div
              key={slug}
              className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/shop/${slug}`}>
                <div className="relative group">
                  <Image
                    src={urlFor(image).url()}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-64"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/shop/${slug}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
                    {name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">
                    ${price.toFixed(2)}
                  </span>
                  {originalPrice && (
                    <span className="text-gray-600 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <PaginationProduct
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
