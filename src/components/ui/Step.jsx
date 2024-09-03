import { MdKeyboardArrowDown } from 'react-icons/md'

const Step = ({ step }) => {
  return (
    <div className='my-6'>
        <h3 className='font-semibold text-lg md:text-2xl border-l-4 border-l-[var(--color-blue)] px-4'>{step.title}</h3>
        <p className='text-[var(--color-text)] leading-relaxed my-2'>{step.description}</p>
        <button className='flex justify-center items-center gap-2 text-[var(--color-blue)] font-medium'>
            <span>learn more </span>
            <span><MdKeyboardArrowDown className='text-[22px] font-semibold'/></span>
        </button>
    </div>
  )
}

export default Step
