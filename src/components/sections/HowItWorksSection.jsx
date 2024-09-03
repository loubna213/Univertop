import {Swiper, SwiperSlide} from 'swiper/react';
import { sliderSettings } from "../common/SliderSettings"
import { semaines } from "../constants"
import Semaine from "../ui/Semaine"

const HowItWorksSection = () => {
  return (
    <section className='py-12'>
      <div className="container flex flex-col justify-center items-center w-full">
        <h1 className='text-4xl font-semibold'>Comment ça marche?</h1>
        <div className="w-full max-w-screen-lg mx-auto hidden md:grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 mt-12">
          {
            semaines.map(semaine => <Semaine key={semaine.id} semaine={semaine}/>)
          }
        </div>
        <Swiper
          className='block md:hidden w-full mt-8'
          {...sliderSettings} 
        >
          {
            semaines.map(semaine => <SwiperSlide key={semaine.id}><Semaine semaine={semaine}/></SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  )
}

export default HowItWorksSection
