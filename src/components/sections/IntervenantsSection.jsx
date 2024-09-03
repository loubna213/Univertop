import { useState } from 'react';
import { intervenants } from '../constants';
import Intervenant from '../ui/Intervenant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../common/SliderSettings';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const IntervenantsSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className='py-12'>
      <div className="container max-w-full px-0">
        <h2 className='text-4xl font-semibold'>Nos Intervenants</h2>
        <p className='mt-2 text-[var(--color-text)] text-lg'>Ils ont réussi dans le monde des technologies.</p>
        <div className="relative mt-10 w-full">
          <SliderButtons swiper={swiperInstance} />
          <Swiper
            className='w-full'
            {...sliderSettings}
            onSwiper={setSwiperInstance} // Capture Swiper instance
          >
              {intervenants.map(person => (
                  <SwiperSlide key={person.id}>
                    <Intervenant person={person} />
                  </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const SliderButtons = ({ swiper }) => {
  return (
    <div className='absolute top-[-4rem] right-0 transform -translate-x-0 flex justify-center items-center gap-4 z-10'>
      <button
        className='text-xl px-3 py-2 text-[var(--color-blue)] border-none rounded-md bg-[#eeeeff] cursor-pointer shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.25)]'
        onClick={() => swiper && swiper.slidePrev()} // Ensure swiper is defined
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className='text-xl px-3 py-2 text-[var(--color-blue)] border-none rounded-md bg-[#eeeeff] cursor-pointer shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.25)]'
        onClick={() => swiper && swiper.slideNext()} // Ensure swiper is defined
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default IntervenantsSection;
