import React from 'react'
import Button from '../common/Button'

const Service = ({ service }) => {
  return (
    <div className='bg-white p-4 md:p-8 flex flex-col justify-between items-center gap-6 rounded-lg h-[450px]'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <img src={service.icon} alt="service image" />
        <h3 className='md:text-3xl text-2xl font-semibold text-center'>{service.title}</h3>
        <p className='text-lg text-center text-[var(--color-text)]'>{service.description}</p>
      </div>
      <Button type='primary' color={service.btnColor}>En savoir plus</Button>
    </div>
  )
}

export default Service
