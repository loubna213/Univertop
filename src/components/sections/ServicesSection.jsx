import {Swiper, SwiperSlide} from 'swiper/react';
import { services } from '../constants/index';
import Service from '../ui/Service'
import { sliderSettings } from '../common/SliderSettings';

const ServicesSection = () => {
  return (
    <section className='bg-custom-radial py-12'>
      <div className="container">
        <div className='hidden md:grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6'>
          {
            services.map(service => <SwiperSlide key={service.id}><Service service={service}/></SwiperSlide>)
          }
        </div>
        <Swiper
          className='block md:hidden w-full'
          {...sliderSettings} 
        >
          {
            services.map(service => <SwiperSlide key={service.id}><Service service={service}/></SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ServicesSection
