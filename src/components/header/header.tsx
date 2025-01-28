
import Link from 'next/link';
import { Search } from 'lucide-react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { Container } from "../container"
export default function Header() {
  return (
    
    <Container>
    <header className="w-full mx-auto bg-black font-inter text-base leading-6 text-white py-4 px-6">
      <div className="flex justify-center">
        <Link href="#">
          <h1 className="text-2xl font-bold text-[#ff9F0D] ">Food<span className='text-white'>tuck</span>
          </h1>
        </Link>
      </div>
      <div className="md:px-10 flex flex-col md:flex-row justify-between items-center">
        <nav>
          <ul className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0 ">
            <li className='hover:text-[#ff9F0D]'><Link href="/">Home</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/menu">Menu</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/blog">Blog</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/pages">Pages</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/about">About</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/shop">Shop</Link></li>
            <li className='hover:text-[#ff9F0D]'><Link href="/contactUs">Contact</Link></li>
          </ul>
        </nav>
        <div className="relative w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-2 border-[#ff9F0D] text-white rounded-full py-2 px-4 pr-10 w-60 md:w-64 focus:outline-none"
          />
          <Search className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Link href="/cart">
          <MdOutlineShoppingBag className="absolute right-[-10px] md:right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-400" />
          </Link>
        </div>
      </div>
    </header>
    </Container>
   
  );
}
