import Image from 'next/image'
import Seasonal from '@/assets/featured/seasonal.png'
import Labpackage from '@/assets/featured/lab-package.png'
import ClinicCare from '@/assets/featured/clinic-care.png'
import Babycare from '@/assets/featured/baby-care.png'
import Drugcarts from '@/assets/featured/drugcarts.png'
import SpecialCares from '@/assets/featured/special-care.png'
import Testkit from '@/assets/featured/test-kit.png'
import Women from '@/assets/featured/women.png'

const FeaturedPackage = () => {
  return (
    <section className='px-10'>
        <div className='p-2 font-semibold mb-5 mt-10 text-lg bg-gray-100'>
          <h1>Featured Care & Package</h1>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 px-2 md:px-20'>
          <Image src={Seasonal}
            alt="Seasonal Package"
            className="w-96 h-full object-cover"
          />
          <Image src={Labpackage}
            alt="Lab Package"
            className="w-96 h-full object-cover"
          />
          <Image src={Testkit}
            alt="Test Kit"
            className="w-96 h-full object-cover"
          />
          <Image src={Women}
            alt="Package for Women"
            className="w-96 h-full object-cover"
          />
          <Image src={Babycare}
            alt="Baby Care"
            className="w-96 h-full object-cover"
          />
          <Image src={SpecialCares}
            alt="Special Care"
            className="w-96 h-full object-cover"
          />
          <Image src={ClinicCare}
            alt="Clinic Care"
            className="w-96 h-full object-cover"
          />
          <Image src={Drugcarts}
            alt="Drugcarts Package"
            className="w-96 h-full object-cover"
          />
        </div>
      </section>
  )
}

export default FeaturedPackage;