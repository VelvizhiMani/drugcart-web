import React from 'react'

const Awareness = () => {
  return (
    <section className="bg-bgfooter">
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 text-sm">
          <div className="flex my-auto row-span-2 justify-center items-center">
            <h1 className='font-bold'>Our Awareness</h1>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Health Video</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Health Article</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Health News</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Health Package</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Our Blogs</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Daily Health Tips</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Infographics</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Lab Test Information</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Know about Herbs</button>
          </div>
          <div className="flex my-auto justify-center">
            <button className='w-full bg-white py-2 px-6 rounded-md text-bgcolor font-bold'>Know about Diseases</button>
          </div>
        </div>
        <p className='text-xs p-8 px-2 md:px-20 font-bold text-center'>Copyright @ 2025 Drugcarts. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules 1945, we don't process requests for Schedule X and other habit forming drugs.</p>
      </div>
    </section>
  )
}

export default Awareness;