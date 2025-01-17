import Image from 'next/image';
import Blog1 from '../../assets/blog/blog-1.png';
import Blog2 from '../../assets/blog/blog-2.jpg'
import Blog3 from '../../assets/blog/blog-3.jpg'
import Blog4 from '../../assets/blog/blog-4.jpg'

const Blog = () => {
  return (
    <section className='px-10 mt-10'>
        <div className='bg-bgblog rounded-md px-10'>
          <h1 className='font-bold text-3xl p-7'>Our Latest Blog</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center md:text-left px-5 pb-10'>
            <div className='bg-white rounded-lg p-10'>
              <Image src={Blog1} alt="Blog banner" className='w-full object-cover' />
              <p className="text-purple-900 mt-6 font-bold text-md">Prepare in advance for nutritionDay 2024</p>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </span>
              <div className='flex justify-center font-bold mt-7'>
                <span className='text-right'>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
            <div className='bg-white rounded-lg p-10'>
              <Image src={Blog2} alt="Blog banner" className='w-full object-cover' />
              <p className="text-purple-900 mt-6 font-bold text-md">Prepare in advance for nutritionDay 2024</p>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </span>
              <div className='flex justify-center font-bold mt-7'>
                <span className='text-right'>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
            <div className='bg-white rounded-lg p-10'>
              <Image src={Blog3} alt="Blog banner" className='w-full object-cover' />
              <p className="text-purple-900 mt-6 font-bold text-md">Prepare in advance for nutritionDay 2024</p>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </span>
              <div className='flex justify-center font-bold mt-7'>
                <span className='text-right'>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Blog