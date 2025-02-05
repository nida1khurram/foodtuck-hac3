'use client'
import { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Slider } from "@/components/ui/slider"
import StarRating from "@/components/ratingStar/rating";
import Link from "next/link";
import { Container } from '@/components/container'
import Image from 'next/image'
import { Search, ChevronDown } from 'lucide-react'
import { products, categories, latestProducts } from '@/components/ourShop/productData'
import { PaginationProduct } from "@/components/pagination";
import ProductList from "../../components/ourShop/productList";
import { PHeader } from '@/components/header/t2';
import { TopHeader } from '@/components/header/topHeader';

export default function Shop() {
  const [sortBy, setSortBy] = useState('popularity')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
        <TopHeader />
        <PHeader title='Shop' /> 
      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4">
               
                {/* show */}
                <div className="relative flex gap-4">
                  <p className="md:text-xl text-black items-center">Show :</p>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white text-gray-400 border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  > 
                    <option value="popularity">Default</option>
                    <option value="price-low-high">Regular</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* product section */}
            <ProductList />
           
            {/* product section end*/}

            {/* pagination */}
            
            <div className="mt-12 flex justify-center text-orange-500">
              {/* <PaginationProduct /> */}
            </div>

          </div>

          {/* Sidebar start*/}
          <div className="w-full md:w-1/4 mt-20 pb-5">
          <div className="shadow pt-5 pb-10 rounded-lg ">
            {/*  search */} 
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="w-9 h-9 bg-orange-500 absolute mt-[-40px] ml-[202px]">
                <Search className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
              </div>
            </div>
            {/* search */}
            <h2 className="text-xl font-semibold my-4 text-black ml-4 ">Category</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category} className="">
                  <button className="text-gray-600 hover:text-orange-500">
                    <input
                      type="checkbox"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="ml-4 mr-2 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            {/* img */}
            <div className="relative">
              <Image
                src={'/shoplist/sidebarpic.png'}
                alt={'sidepic'}
                width={248}
                height={286}
                className="ml-4 object-cover mt-4"
              />
              <div className="text-white text-[16px] font-bold absolute mt-[-260px] ml-8">
                <p>Perfect Taste</p>
                <p>Classic Restaurant</p>
                <p className="text-orange-500 mt-4">45.00$</p>
                <button className="font-semibold mt-28 flex">
                  Shop Now
                  <FaRegArrowAltCircleRight className="mt-2 ml-2"/>
                </button>
              </div>
            </div>
            {/* img */}
            {/* filter */}
            <div className=" text-xl text-[#0d0d0d] mt-4 ml-4">
              <p className="mt-4">Filter By Price</p>
              <Slider defaultValue={[33]} max={100} step={1} className="mt-4 text-[16px]"/>
              <p className="text-[#1e1e1e] mt-4 text-[16px]">From $0 to $8000 <span className="ml-6">Filter</span></p>
            </div>
            {/* filter */}
            {/* latest product */}
            <div className="max-w-[252px] max-h-[368px] text-[#333] mt-6 ml-4">
              <h2 className="text-xl font-bold mb-6 ">Latest Products</h2>
              {latestProducts.map(lproduct => (
                <div key={lproduct.id} className="flex gap-3 mb-3" >
                  <Image
                    src={lproduct.image}
                    alt={lproduct.name}
                    width={72}
                    height={65}
                    className=" object-cover"
                  />
                  <div>
                    <p>{lproduct.name}</p>
                    <StarRating rating={lproduct.rating} />
                    <p>${lproduct.price}</p>
                  </div>       
                </div>
              ))}
            </div>
            {/* latest product */}
            {/* product tag */}
            <div className="w-[225px] h-[162px] text-[#333]  mt-6 ml-4 ">
              <h2 className="text-xl font-bold mb-6">Product Tags</h2>
              <Link href={'/'}><button className="mb-2 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Services</button></Link>
              <Link href={'/'}><button className="ml-1 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Our Menu</button></Link>
              <Link href={'/'}><button className="ml-1 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Pizza</button></Link>
              <Link href={'/'}><button className="mb-2 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Cupcake</button></Link>
              <Link href={'/'}><button className="ml-1 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Burger</button></Link>
              <Link href={'/'}><button className="ml-1 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Cookies</button></Link>
              <Link href={'/'}><button className="px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Our Shop</button></Link>
              <Link href={'/'}><button className="ml-1 px-2 py-2 rounded-md shadow-md hover:underline underline-offset-8 hover:text-orange-600 transition-colors">Tandoori Chicken</button></Link>
            </div>
            {/* product tag */}
          </div>
        </div>
        {/* Sidebar end*/}
      </div>
    </div>
  </Container>
  )
}

