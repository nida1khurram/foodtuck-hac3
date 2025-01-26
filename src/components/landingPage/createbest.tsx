import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import { Container } from '../container';

export default function CreateBest() {
  return (
    <Container>
    <section className=" h-auto  bg-[#0D0D0D] grid md:grid-cols-2 py-2 md:py-20 px-20 ">
      {/* left side */}
      <div className=''>
      <h2 className="text-[#ff9F0D] font-greatvibes text-2xl leading-10 mb-2 mt-40 md:mt-10 ">About Us</h2>
      <h1 className="text-2xl md:text-5xl font-bold text-[#ff9F0D] leading-[56px] mb-8">We<span className='text-white'> Create the Best<br />food product</span></h1>
      <p className="font-inter text-base text-white font-normal leading-6 mb-8 md:w-[526px] h-auto md:h-[130px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className="flex flex-col font-inter text-lg text-white leading-[26px] mb-6">
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px] ">Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
      </div>
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
      </div>
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      </div>
      <Link href="/about" className="bg-[#ff9F0D] text-white font-inter text-base px-14 py-4 rounded-full hover:bg-orange-600 transition duration-300">
        Read More
        </Link>
        </div>
      {/* right side */}
      <div className="md:mt-0 mt-10 mb-10">
        <div>
        <Image
          src="/aboutus/001.png"
          alt="Hero dish"
          width={660}
          height={330}
          className="rounded-lg"
        />
        </div>
        <div className='grid md:grid-cols-2 mt-4 gap-2'>
        <div className=''>
        <Image
              src="/aboutus/002.png"
              alt="food"
              width={322}
              height={194}
              className="rounded-lg "
            />
        </div>
        <div className='md:mt-0 mt-4'>
        <Image
              src="/aboutus/003.png"
              alt="food"
              width={322}
              height={194}
              className="rounded-lg"
            />
        </div>
        </div>
      
        
    
          
      </div>
    </section>
    </Container>
  )
}

