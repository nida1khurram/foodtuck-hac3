
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { Container } from '../container';
import Header from '../header/header';


export default function Hero() {
  return (
    <Container>
      <Header />
      <section className="mx-auto flex flex-col lg:flex-row relative bg-[#0D0D0D] pb-[650px] ">
        <Image
          src="/hero/bgimage.png"
          alt="Hero dish"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col lg:flex-row mx-auto">
          {/* left side */}
          <div className='lg:w-[45%] w-full mx-auto pt-40'>
            <div className="relative z-20  flex flex-col justify-center items-start px-6 lg:px-10 mt-4 lg:mt-0">
              <div className='lg:w-[27px] lg:h-[492px] absolute mt-[-100px] lg:mt-96 lg:ml-[-20px] left-4 lg:left-auto'>
                <Link href={'/'}><FaFacebookF className='text-[#ff9F0D] mb-5' /></Link>
                <Link href={'/'}><FaTwitter className='text-[#ff9F0D] mb-5' /></Link>
                <Link href={'/'}><SlSocialPintarest className='text-[#ff9F0D] mb-5' /></Link>
              </div>
              <div className='ml-4 lg:ml-5'>
                <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">It's Quick & Amazing!</h2>
                <h1 className="text-3xl lg:text-6xl font-bold text-[#ff9F0D] lg:leading-[68px] mb-2 lg:mb-8">Th<span className='text-white'>e Art of speed food Quality</span></h1>
                <p className="text-base text-white font-normal leading-6 mb-8 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
              </div>
              <Link href="/menu" className="bg-[#ff9F0D] text-white font-inter text-base px-10 lg:px-14 py-2 lg:py-4 rounded-full hover:bg-orange-600 transition duration-300 mt-6 lg:mt-0">
                See Menu
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className='lg:w-[55%] w-full flex justify-center lg:justify-end'>
            <Image
              src="/hero/hero.png"
              alt="Hero dish"
              width={877.7}
              height={670}
              className="z-0 mt-[2px] lg:mt-0 lg:ml-0 ml-0"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
