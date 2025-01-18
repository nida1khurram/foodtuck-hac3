import Image from 'next/image'
import { starterMenu } from './menuData'
import { mainCourse } from './menuData'
import { Container } from '../container'
import { BsCupHot } from "react-icons/bs";

export default function OurMenu1() {
 
  return (
   <Container>
 
      <div className="md:max-w-[1320px] md:max-h-[628px] mx-auto py-2 md:py-10">
      
        <section className="md:mb-16 px-10" id='starter'>
          <div className="flex flex-col md:flex-row gap-2">
            {/* img */}
            <div className="md:w-1/2">
              <Image
                src="/menuPage/starter.png"
                alt="Starter Menu"
                width={448}
                height={626}
                className="md:max-w-[448px] md:max-h-[626px] rounded-lg object-cover"
              />
            </div>
            {/* text */}
            <div className="md:w-1/2 my-6 ">
            <BsCupHot className='text-orange-500 w-6 h-6'/>
              <h2 className="text-5xl font-bold mb-6 text-[#333]">Starter Menu</h2>
              <div className="space-y-12">
                {starterMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className=''>
                      <h3 className="font-medium text-2xl text-[#333] hover:text-orange-500">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium mr-20">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </section>

        <section className="md:mb-16 px-10" id='main'>
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="md:w-1/2 my-6">
            {/* text */}
            <BsCupHot className='text-orange-500 w-6 h-6'/>
              <h2 className="text-5xl font-bold mb-6 text-[#333]">Main Course</h2>
              <div className="space-y-12">
                {mainCourse.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-2xl text-[#333] hover:text-orange-500">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium mr-20">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* img */}
            <div className="md:w-1/2">
              <Image
                src="/menuPage/mainCourse.png"
                alt="Main Course"
                width={448}
                height={626}
                className="md:max-w-[448px] md:max-h-[626px] rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    
 


   </Container>
  )
}