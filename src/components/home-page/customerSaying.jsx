import Image from "next/image";
import Star from '@/assets/customer/star.png'
import Store from '@/assets/customer/store.png'
import Online from '@/assets/customer/online.png'
import Logo from '@/assets/customer/logo.png'
import Customer from '@/assets/customer/customer-saying-about-us.jpg'

const CustomerSaying = () => {
  return (
    <section className='px-10 mt-5'>
        <div className='container mx-auto bg-bgwhy rounded-md p-5'>
          <div className='grid grid-cols-1 md:grid-cols-4 mt-8 justify-center gap-5'>
            <div className='mx-auto'>
              <h2 className='font-bold text-3xl text-black text-center mb-6'>Why Choose Us ?</h2>
              <Image src={Logo} alt="Drugcarts Logo" className='object-cover w-42 px-8 rounded-md' />
            </div>
            <div className='justify-items-center'>
              <Image src={Star} alt="Star" className='w-32 h-32 object-cover' />
              <h2 className='font-bold  p-3'>4.5</h2>
              <h3 className='text-orange-600 text-xl font-bold'>Outstanding Work</h3>
            </div>
            <div className='justify-items-center'>
              <Image src={Store} alt="Star" className='w-32 h-32 object-cover' />
              <h2 className='font-bold  p-3'>1000+</h2>
              <h3 className='text-blue-600 text-xl font-bold'>Offline Store</h3>
            </div>
            <div className='justify-items-center'>
              <Image src={Online} alt="Star" className='w-32 h-32 object-cover' />
              <h2 className='font-bold  p-3'>20000+</h2>
              <h3 className='text-bgcolor text-xl font-bold'>Happy Customer</h3>
            </div>
          </div>
        </div>
        <div className='container mx-auto rounded-md p-5'>
          <h2 className='font-bold text-lg md:text-2xl text-black mb-6 mt-5'>What Customer Saying About Us</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 mt-8 justify-center gap-5'>
            <div className='justify-items-center bg-becustomer text-white'>
              <Image src={Customer} alt="Star" className='w-full h-48 p-3 object-cover' />
              <h2 className='text-xl'>Zara</h2>
              <p>Business</p>
              <div className="flex justify-center mt-1 mb-6">
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-gray-300 text-xl">&#9733;</span>
                </div>
            </div>
            <div className='justify-items-center bg-becustomer text-white'>
              <Image src={Customer} alt="Star" className='w-full h-48 p-3 object-cover' />
              <h2 className='text-xl'>Zara</h2>
              <p>Business</p>
              <div className="flex justify-center mt-1 mb-6">
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-gray-300 text-xl">&#9733;</span>
                </div>
            </div>
            <div className='justify-items-center bg-becustomer text-white'>
              <Image src={Customer} alt="Star" className='w-full h-48 p-3 object-cover' />
              <h2 className='text-xl'>Zara</h2>
              <p>Business</p>
              <div className="flex justify-center mt-1 mb-6">
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-gray-300 text-xl">&#9733;</span>
                </div>
            </div>
            <div className='justify-items-center bg-becustomer text-white'>
              <Image src={Customer} alt="Star" className='w-full h-48 p-3 object-cover' />
              <h2 className='text-xl'>Zara</h2>
              <p>Business</p>
              <div className="flex justify-center mt-1 mb-6">
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-yellow-400 text-xl">&#9733;</span>
                  <span className="text-gray-300 text-xl">&#9733;</span>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CustomerSaying;