import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

const Semaine = ({ semaine }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[var(--color-gray-light)] rounded-lg p-4'>
      <h4 className='text-[var(--color-gray-dark)] my-4'>{semaine.semaine}</h4>
      <img className='h-[52px]' src={semaine.icon} alt="icon" />
      <div className='flex'>
        <div className='flex-[50%] flex flex-col justify-center items-center gap-8 p-2'>
            <button className='text-xl px-3 py-3 text-[var(--color-blue)] border-none rounded-[50%] bg-[#eeeeff] cursor-pointer shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.25)]'><BiSolidLeftArrow/></button>
            <div className='relative w-28 h-[60px] text-xs md:w-32 md:h-[70px] md:text-[13px] bg-[var(--color-blue)] text-white p-2 rounded-md flex justify-center items-center text-center'>
                <div className='after'></div>
                {semaine.part1}
            </div>
        </div>
        <div className='flex-[50%] flex flex-col justify-center items-center gap-8'>
            <button className='text-xl px-3 py-3 text-[var(--color-blue)] border-none rounded-[50%] bg-[#eeeeff] cursor-pointer shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.25)]'><BiSolidRightArrow/></button>
            <div className='relative w-28 h-[60px] text-xs md:w-32 md:h-[70px] md:text-[13px] bg-[var(--color-blue)] text-white p-2 rounded-md flex justify-center items-center text-center '>
                <div className='after'></div>
                {semaine.part2}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Semaine
