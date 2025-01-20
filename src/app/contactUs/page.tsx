"use client"

import { motion } from "framer-motion"
import { Container } from '@/components/container'
import { PHeader } from '@/components/header/t2';
import { TopHeader } from '@/components/header/topHeader';
export default function Contact() {
  return (
     <Container>
            <TopHeader />
            <PHeader title='Contact Us' /> 
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12  ">
          <h1 className="sm:text-2xl md:text-5xl font-medium title-font mb-4 text-gray-900 
          white-text-with-gray-shadow transition-all duration-1000 ease-in-out  hover:scale-105">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We consider all the drivers of change gives you the components
            <br /> you need to change to create a truly happens .
          </p>
        </div>
        {/* form */}
        <motion.div
        initial={{opacity:0.5, rotateY:"130deg"}}
        whileInView={{opacity:1, rotateY:0}}
        transition={{duration:2}}>
        <div className="lg:w-1/2 md:w-2/3 mx-auto px-10 py-10 rounded-lg shadow-2xl shadow-gray-500/50">
          <div className="flex flex-wrap -m-2">
            <div className=" p-2 w-1/2 flex-wrap">
              <div className="relative ">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-[#2C2F24] font-bold "
                >
                  Name
                </label>
                <input
                  value={"Enter your name"}
                  type="text"
                  id="name"
                  name="name"
                  className=" w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#737865] py-4 px-5 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-[#2C2F24] font-bold"
                >
                  Email
                </label>
                <input
                  value={"Enter email address"}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#737865] py-4 px-5 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {/* subject */}
            <div className="p-2 w-1/2">
              <div className="relative ">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-[#2C2F24] font-bold"
                >
                  Subject
                </label>
                <input
                  value={"Write a subject"}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#737865] py-4 px-5 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {/*  */}
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-[#2C2F24] font-bold"
                >
                  Message
                </label>
                <textarea
                  value={"Write your message"}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-[#737865] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className=" w-full rounded-full flex mx-auto text-white bg-[#AD343E] border-0 py-2 px-8 focus:outline-none hover:bg-[#f4727d]  text-lg font-bold  ">
                Send
              </button>
            </div>
          </div>
        </div>
        </motion.div>
        {/* footer */}
        <section>
         <div className=" md:w-2/3 lg:w-1/2 mx-auto px-10 py-10  text-left flex flex-wrap ">
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Call Us:</h4>
            <p className='text-[18] text-[rgb(173,52,62)] font-bold'>+1-234-567-8900</p>
        </div>
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Hours:</h4>
            <p className='text-[18] text-[#2C2F24] '>Mon-Fri: 11am-8pm </p>
            <p className='text-[18] text-[#2C2F24] '>Sat-Sun: 9am-10pm</p>
        </div>
        <div className='flex-1 flex-wrap'>
            <h4 className='text-lg font-bold text-black'>Our Location:</h4>
            <p className='text-[18] text-[#2C2F24] '>123 Bridge Street
                <br/>Nowhere Land, La 12345
                <br />United States
            </p>
        </div>
        </div>
    </section>
        {/* footer */}
      </div>
    </section>
     </Container>
  );
}
