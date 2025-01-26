import Link from 'next/link';
import Image from 'next/image'
import { Container } from '../container';
const categories = [
  { name: 'Salad', image: '/foodcategories/001.png' },
  { name: 'Burger', image: '/foodcategories/002.png' },
  { name: 'Pasta', image: '/foodcategories/003.png' },
  { name: 'Dessert', image: '/foodcategories/004.png' },
]

export default function FoodCategories() {
  return (
       <Container>
    <section className=" mx-auto bg-[#0D0D0D] py-14 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        <span><h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">Food Category</h2></span>
        <span className="text-orange-500">Ch</span>oose Food Item
      </h2>
      <div className="md:ml-0 ml-10 md:max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {categories.map((category, index) => (
          <div  key={index} className="relative group cursor-pointer mr-9 mx-auto">
           <Link href={'/shop'}>
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
              
              className="rounded-lg mx-auto"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
    </Container>
  )
}

