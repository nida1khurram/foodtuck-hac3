import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../container'
import { AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const blogPosts = [
  {
    title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    date: '10 February 2022',
    image: '/blogPost/p1.png',

  },
  {
    title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    date: '10 February 2022',
    image: '/blogPost/p2.png',
    url: "/blog#2",
  },
  {
    title: 'Curabitur rutrum velit ac congue malesuada',
    date: '10 February 2022',
    image: '/blogPost/p3.png',

    url: "/blog#blog3",
  },
]

export default function BlogPosts() {
  return (
    <Container>
    <section className="bg-[#0D0D0D] mx-auto py-4 md:py-16 px-6">
      <div className='md:max-w-[1320px] md:max-h-[732px] mx-auto'>
      <div className='text-center mb-8'>
      <h2 className="font-greatvibes text-orange-500 text-3xl font-bold  mb-4">Blog Post</h2>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
          <span className="text-orange-500">La</span>test News & Blog
        </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[1320px] md:max-h-[732px] mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="md:max-w-[424px] md:max-h-[569px]  border-2 border-white overflow-hidden ">
            <Image src={post.image} alt={post.title} width={423} height={349} className="w-[423px] h-[349px]" />
            <div className="p-6  ">
              <p className="text-gray-400 mb-2">{post.date}</p>
              <h3 className="font-bold mb-4 text-white">{post.title}</h3>
              <div className='flex justify-between'>
              <Link href={post.url || "#"} target="_blank" className="text-white hover:underline">
                Learn More
              </Link>
              {/* <Link href={project.url || "#"} target="_blank">
                    {project.url ? "View Project" : "No URL Provided"}
                  </Link> */}


              <div className='text-white flex gap-2'>
              <AiOutlineLike /><MdOutlineTextsms className='text-orange-500'/><IoShareSocialOutline />
              </div>
              </div>
             
              
              


            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </Container>
  )
}

