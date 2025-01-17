import Image from 'next/image'
import Shopping from '../../../assets/shopcategory/shipping.png'
import Customer from '../../../assets/shopcategory/customer-care.png'
import Anthropology from '../../../assets/shopcategory/anthropology.png'
import Drugstore from '../../../assets/shopcategory/drugstore.png'
import Emergency from '../../../assets/shopcategory/emergency-call.png'

const Servicegroup= () => {
  return (
    <section className='px-10'>
        <div className='p-2 font-bold mb-2 mt-2 text-center text-lg'>
          <h1>Our Service and Care</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 px-2 md:px-20'>
          <div className="flex flex-col items-center">
            {/* Icon Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {/* Icon */}
              <Image src={Shopping}
                alt="Order Medicine"
                className="w-12 h-12"
              />
            </div>
            {/* Label */}
            <p className="mt-2 text-sm font-bold text-gray-700 text-center">Order Medicine</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {/* Icon */}
              <Image src={Customer}
                alt="Nursing Service"
                className="w-12 h-12"
              />
            </div>
            {/* Label */}
            <p className="mt-2 text-sm font-bold text-gray-700 text-center">Nursing Service</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {/* Icon */}
              <Image src={Anthropology}
                alt="Nursing Service"
                className="w-12 h-12"
              />
            </div>
            {/* Label */}
            <p className="mt-2 text-sm font-bold text-gray-700 text-center">Nursing Service</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {/* Icon */}
              <Image src={Drugstore}
                alt="Nursing Service"
                className="w-12 h-12"
              />
            </div>
            {/* Label */}
            <p className="mt-2 text-sm font-bold text-gray-700 text-center">Nursing Service</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              {/* Icon */}
              <Image src={Emergency}
                alt="Nursing Service"
                className="w-12 h-12"
              />
            </div>
            {/* Label */}
            <p className="mt-2 text-sm font-bold text-gray-700 text-center">Nursing Service</p>
          </div>
        </div>
      </section>
  )
}

export default Servicegroup;