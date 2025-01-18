import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'
import { blogPosts, recentPosts, menuCategories, popularTags, galleryImages, authorProfile } from "./blogData"
import { Search, ChevronDown } from 'lucide-react'
export default function Blog() {
  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 ml-40 mr-40">
      {/* Main Content */}
      <div className="lg:w-2/3">
        {blogPosts.map((post) => (
          <article key={post.id} className="mb-8 pb-8 border-b" id="blog3" >
            <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt="/"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                14
                <br />
                Feb
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5C21 16.75 12 21 12 21C12 21 3 16.75 3 11.5C3 6.25 7.02944 2 12 2C16.9706 2 21 6.25 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {post.comments}
              </span>
              <span className="text-purple-600">{post.author}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
            <button className="text-yellow  font-medium border-2 border-yellow rounded-sm h-10 w-[150px]">
              Read More →
            </button>
            </Link>
          </article>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 space-y-8">
        {/*  search */} 
        <div className="relative ml-4">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="w-9 h-9 bg-orange-500 absolute mt-[-40px] ml-[202px]">
                <Search className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
              </div>
            </div>
            {/* search */}
        {/* Author Profile */}
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/bloglist/sidebar/p1.png"
              alt={authorProfile.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">{authorProfile.name}</h3>
          <p className="text-gray-500 mb-2">{authorProfile.role}</p>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < authorProfile.rating ? 'fill-yellow text-yellow' : 'fill-gray-200 text-gray-200'}`}
              />
            ))}
            <span className="text-sm text-gray-500">({authorProfile.reviews} Reviews)</span>
           
          </div>
<div>
<p className="text-gray-500 mb-2 text-[14px]">{authorProfile.description}</p>
</div>

          <div className="flex justify-center gap-3 text-gray-400">
          <a href="#" className="hover:text-gray-600">
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.986H8.078v-2.892h2.359V9.846c0-2.333 1.394-3.611 3.524-3.611 1.021 0 2.087.182 2.087.182v2.29h-1.176c-1.158 0-1.519.718-1.519 1.452v1.742h2.584l-.413 2.892h-2.171v6.986C18.343 21.128 22 16.991 22 12Z"
      clipRule="evenodd"
    />
  </svg>
</a>

<a href="#" className="hover:text-gray-600">
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22.46 6.003c-.793.352-1.644.59-2.538.698a4.424 4.424 0 0 0 1.944-2.445 8.832 8.832 0 0 1-2.798 1.07 4.407 4.407 0 0 0-7.51 4.016 12.506 12.506 0 0 1-9.076-4.6 4.403 4.403 0 0 0 1.362 5.872 4.388 4.388 0 0 1-2-.553v.055a4.408 4.408 0 0 0 3.532 4.319 4.419 4.419 0 0 1-1.991.076 4.41 4.41 0 0 0 4.118 3.062A8.836 8.836 0 0 1 2 18.327a12.446 12.446 0 0 0 6.756 1.98c8.105 0 12.53-6.718 12.53-12.55 0-.19-.004-.38-.013-.57a8.945 8.945 0 0 0 2.188-2.184Z"
      clipRule="evenodd"
    />
  </svg>
</a>

            

            <a href="#" className="hover:text-gray-600">
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM17.25 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      clipRule="evenodd"
    />
  </svg>
</a>
<a href="#" className="hover:text-gray-600">
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.486 2 2 6.486 2 12c0 4.072 2.988 7.451 7.074 8.29-.098-.705-.186-1.788.039-2.561.2-.689 1.28-4.64 1.28-4.64s-.327-.653-.327-1.62c0-1.515.877-2.647 1.967-2.647.927 0 1.376.695 1.376 1.53 0 .93-.593 2.317-.899 3.607-.256 1.084.542 1.968 1.607 1.968 1.93 0 3.415-2.034 3.415-4.965 0-2.593-1.863-4.41-4.522-4.41-3.081 0-4.885 2.313-4.885 4.707 0 .93.357 1.928.803 2.47a.324.324 0 0 1 .075.308c-.082.34-.264 1.084-.3 1.236-.048.2-.159.244-.368.147-1.369-.635-2.227-2.63-2.227-4.24 0-3.45 2.514-6.613 7.24-6.613 3.804 0 6.764 2.718 6.764 6.35 0 3.777-2.38 6.812-5.684 6.812-1.108 0-2.15-.576-2.504-1.26 0 0-.596 2.27-.745 2.833-.271 1.047-1.004 2.357-1.505 3.156A10.003 10.003 0 0 0 22 12c0-5.514-4.486-10-10-10Z"
      clipRule="evenodd"
    />
  </svg>
</a>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">Recent Post</h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex gap-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-medium mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter By Menu */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>
          <div className="space-y-3">
            {menuCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                  <span>{category.name}</span>
                </div>
                <span className="text-gray-500">{category.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

