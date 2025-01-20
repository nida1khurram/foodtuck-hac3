

'use client';
import React from 'react';
import { teamMember } from './aboutData';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function TeamMember() {
  return (
    <>
      {/* team member */}
      <section className='mb-96'>
        <div className='w-full h-[460px] bg-yellow relative'>
          <div className=' ml-[400px] '>
            <h2 className="w-[418px] h-[176px] text-5xl font-bold mt-20 absolute text-white ml-10">Team Member</h2>
            <p className='absolute mt-40  w-[418px] h-[176px] text-center text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p> 
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-2 absolute mt-[-200px] ">
          {teamMember.map((teamMem, index) => (
            <div key={index} className="shadow-lg relative group">
              <Image
                src={teamMem.image}
                alt="Dish Presentation"
                width={312}
                height={300}
                className="object-cover"
              />
              {/* icon */}
              <div className="flex flex-col items-center justify-center gap-3 text-[#4f4f4f] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <FaFacebookF />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <FaTwitter />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full '>
                    <FaYoutube />
                  </div>
                </Link>
              </div>
              {/* icon */}
              <h3 className="text-xl font-semibold mb-4 mt-4 text-center">{teamMem.title}</h3>
              <p className='text-center mb-4'>{teamMem.destination}</p> 
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
