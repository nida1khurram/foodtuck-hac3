
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

  useEffect(() => {
    const fetchChefs = async () => {
      const chefsData = await client.fetch(`*[_type == "chef"]{ name, role, "image": image.asset->url }`)
      setChefs(chefsData)
    }
    
    fetchChefs()
  }, [])

  return (
    <Container>
      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chefs.map((chef, index) => (
            <div key={index} className="shadow-md overflow-hidden">
              <Image
                src={chef.image}
                alt={chef.name}
                width={312}
                height={379}
                className="object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-center">{chef.name}</h2>
                <p className="text-gray-600 mb-4 text-center">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

// import Image from 'next/image'
// import { Container } from '../container';
// export default function OurChefs() {
//   const chefs = [
//     { name: 'Tahmina Nuru', role: 'Chef', image: '/ourchef/p1.png' },
//     { name: 'Johna Begum', role: 'Chef', image:  '/ourchef/p2.png' },
//     { name: 'M Mohammed', role: 'Chef', image: '/ourchef/p3.png' },
//     { name: 'Munna Kathy', role: 'Chef', image:  '/ourchef/p4.png' },
//     { name: 'Tahmina Nuru', role: 'Chef', image:  '/ourchef/p5.png' },
//     { name: 'Bisou dragon', role: 'Chef', image:  '/ourchef/p6.png' },
//     { name: 'Karin Mustafa', role: 'Chef', image:  '/ourchef/p7.png' },
//     { name: 'William Rumi', role: 'Chef', image:  '/ourchef/p8.png' },
//     { name: 'Kate william ray', role: 'Chef', image:  '/ourchef/p9.png' },
//     { name: 'Mahmud Mahi', role: 'Chef', image:  '/ourchef/p10.png' },
//     { name: 'Asgar Rahman', role: 'Chef', image:  '/ourchef/p11.png' },
//     { name: 'Mustafiz Holy', role: 'Chef', image:  '/ourchef/p12.png' },
//   ]

//   return (
//     <Container>
//     <div className=" mx-auto px-4 py-16 md:px-6 lg:px-8">
     
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {chefs.map((chef, index) => (
//           <div key={index} className=" shadow-md overflow-hidden">
//             <Image
//               src={chef.image}
//               alt={chef.name}
//               width={312}
//               height={379}
//               className="object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-2 text-center">{chef.name}</h2>
//               <p className="text-gray-600 mb-4 text-center">{chef.role}</p>
//               {/* <div className="flex justify-center space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-blue-500">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-blue-400">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-pink-500">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </Container>
//   )
// }



