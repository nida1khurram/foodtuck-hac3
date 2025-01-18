

"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '../container'
import { client } from '@/sanity/lib/client'

interface Chef {
  name: string;
  role: string;
  image: string;
}

export default function OurChefs() {
  const [chefs, setChefs] = useState<Chef[]>([])
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const fetchChefs = async () => {
      const chefsData = await client.fetch(`*[_type == "chef"]{ name, role, "image": image.asset->url }`)
      setChefs(chefsData)
    }
    
    fetchChefs()
  }, [])

  const handleShowMore = () => {
    setShowMore(true)
  }
  const handleHide = () => { setShowMore(false) }

  const chefsToShow = showMore ? chefs : chefs.slice(0, 4)

  return (
    <section className="bg-[#0D0D0D] mx-auto py-4 md:py-16 px-6">
    <Container>
    <h2 className="font-greatvibes text-orange-500 text-3xl font-bold text-center mb-8">Chefs</h2>
         <h2 className="text-3xl font-bold text-center mb-8 text-white">
           <span className="text-orange-500">Me</span>et Our Chef
        </h2>
      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chefsToShow.map((chef, index) => (
            <div key={index} className="shadow-md overflow-hidden">
              <Image
                src={chef.image}
                alt={chef.name}
                width={312}
                height={379}
                className="object-cover rounded-lg "
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-center">{chef.name}</h2>
                <p className="text-gray-600 mb-4 text-center">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
    
        {!showMore ? ( 
         <button onClick={handleShowMore} className="mt-8 block mx-auto px-4 py-2 text-white border-2 border-orange-500 rounded-full hover:bg-orange-600 transition duration-300"> See More </button>
           ) : ( <button onClick={handleHide} className="mt-8 block mx-auto px-4 py-2 bg-orange-500  text-white rounded-full"> Hide </button> )}
      </div>
    
    </Container>
    </section>
  )
}


// import Image from 'next/image'
// import { Container } from '../container';
// import Link from 'next/link';
// const chefs = [
//   { name: 'D.Estwood', role: 'Chief Chef', image: '/ourchef/001.png' },
//   { name: 'D.Scoriesh', role: 'Assistant Chef', image: '/ourchef/002.png' },
//   { name: 'M. William', role: 'Advertising Chef', image: '/ourchef/003.png' },
//   { name: 'W.Readfroad', role: 'Chef', image: '/ourchef/004.png' },
// ]
// export default function Chefs() {
//   return (
//     <Container>
//     <section className="bg-[#0D0D0D] mx-auto py-4 md:py-16 px-6">
//     <h2 className="font-greatvibes text-orange-500 text-3xl font-bold text-center mb-8">Chefs</h2>
//         <h2 className="text-3xl font-bold text-center mb-8 text-white">
//           <span className="text-orange-500">Me</span>et Our Chef
//         </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {chefs.map((chef, index) => (
//           <div key={index} className="text-center relative">
//             <Image src={chef.image} alt={chef.name} width={312} height={391} className="rounded-lg mx-auto mb-4" />
            
//             <div className='w-[181px] h-[67px] bg-white mt-[-80px] rounded-bl-lg absolute ml-2 md:ml-0 '>
//             <h3 className="font-bold text-[#333] text-[18px]">{chef.name}</h3>
//             <p className="text-[#333]">{chef.role}</p>
//             </div>
            
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <button className="border-2 border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
//          <Link href={'/ourchef'}> See More</Link>
//         </button>
//       </div>
//     </section>
//     </Container>
//   )
// }





