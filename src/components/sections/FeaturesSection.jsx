import feature from '../../assets/images/feature.png'

const FeaturesSection = () => {
  return (
    <section className='bg-[var(--color-green)] py-12 text-white'>
        <div className="container flex flex-col md:flex-row items-center gap-6">
            <div className='flex-[45%]'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Donne une nouvelle dimension à ta carrière</h1>
                <p className='text-lg leading-relaxed my-4'>Sais-tu que la maîtrise d'une seule compétence peut transformer ta carrière ? Les entreprises privilégient les 
                    candidats qui ont une expertise spécifique à leurs problématiques, qui participent à leur réussite grâce aux 
                    technologies. 
                </p>
                <p className='text-lg leading-relaxed'>
                    Pour t'aider à trouver LA compétence qui va booster ton profil et diriger ta carrière, 
                    nous t'accompagnons individuellement et te formons aux techniques digitales les plus
                    valorisantes du marché.
                </p>
            </div> 
            <div className='flex-[55%] mb-[-4rem]'>
                <img className='w-[800px]' src={feature} alt="features section image" />
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection
