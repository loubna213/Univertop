import stepsImg from '../../assets/images/steps.png'
import { steps } from '../constants'
import Step from '../ui/Step'

const StepsSection = () => {
  return (
    <section className='py-12'>
        <div className="container flex flex-col md:flex-row items-center gap-4 md:gap-16">
            <div className='flex-[50%]'>
                <img src={stepsImg} alt="steps section image" />
            </div>
            <div className='flex-[50%]'>
                {
                    steps.map(step => <Step key={step.id} step={step} />)
                }
            </div>
        </div>
    </section>
  )
}

export default StepsSection
