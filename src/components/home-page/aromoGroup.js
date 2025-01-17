import Image from 'next/image'
import Aromaoffer from '@/assets/offers/aroma.png'
import Labtest from '@/assets/offers/labtest.png'
import Healthoffer from '@/assets/offers/healthcare.png'
import Ayurvedicoffer from '@/assets/offers/ayurvedic.png'
import Specialoffer from '@/assets/offers/specialcare.png'
import Eyeoffer from '@/assets/offers/eyecare.png'

const AromoGroup = () => {
  return (
      <section className='px-10 mt-3'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-3'>
          <Image src={Aromaoffer} alt="Aroma Care" className='mx-auto object-cover w-96' />
          <Image src={Labtest} alt="Lab Test" className='mx-auto object-cover w-96 h-full' />
          <Image src={Healthoffer} alt="Health Care" className='mx-auto object-cover w-96 h-full' />
        </div>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-3 mt-5 justify-items-center'>
          <Image src={Ayurvedicoffer} alt="Ayurvedic Care" className='mx-auto object-cover w-96' />
          <Image src={Specialoffer} alt="Special Care" className='mx-auto object-cover w-96 h-full' />
          <Image src={Eyeoffer} alt="Eye Care" className='mx-auto object-cover w-96 h-full' />
        </div>
      </section>
  )
}

export default AromoGroup;