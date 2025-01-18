'use client';

import Image from 'next/image';
import { Container } from '../container';
import Link from 'next/link';
const menuItems = [
  { name: 'Lettuce Leaf', description:'Lacus nisi, et ac dapibus velit in consequat.', price: 12.5, image: "/ourmenu/001.png", },
  { name: 'Fresh Breakfast',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 14.5, image: "/ourmenu/002.png" },
  { name: 'Mild Butter',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 12.5, image: "/ourmenu/003.png" },
  { name: 'Fresh Bread', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/004.png" },
  { name: 'Chow Cheese', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/005.png" },
  { name: 'Italian Pizza',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 14.5, image: "/ourmenu/006.png" },
  { name: 'Sliced Beef', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/007.png"},
  { name: 'Mushrom Pizza', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/008.png" },
];

export default function Menu() {
  return (
    <Container>
      <section className="bg-[#0D0D0D] mx-auto py-4 md:py-16 px-6">
        <h2 className="font-greatvibes text-orange-500 text-3xl font-bold text-center mb-8">Choose & Pick</h2>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mb-8">
          <Link href={'/menu#starter'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Breakfast</button></Link>
          <Link href={'/menu#main'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Lunch</button></Link>
          <Link href={'/menu#'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Dinner</button></Link>
          <Link href={'/menu#desert'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Dessert</button></Link>
          <Link href={'/menu#drink'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Drink</button></Link>
          <Link href={'/menu#starer'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Snack</button></Link>
          <Link href={'/menu#drink'}><button className="text-white hover:text-orange-500 font-bold text-[20px]">Soups</button></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="relative h-[362px]">
            <Image
              src="/ourmenu/1.png"
              alt="leave"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <Image src="/ourmenu/2.png" alt="Featured dish" width={366} height={362} className="rounded-lg absolute top-0 left-0 right-0 bottom-0 m-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                <div className='border-2 border-green p-2'>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-[12px]">{item.description}</p>
                  <p className="text-orange-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
