import Button from '../common/Button';
import hero from '../../assets/images/hero.png'

const HeroSection = () => {
  return (
    <section className='bg-custom-radial py-12'>
        <div className="container md:flex md:items-center md:gap-12">
            <div className='flex-[50%]'>
                <h1 className='hidden md:block text-4xl md:text-6xl font-semibold'>Soyez parfait aux entreteins.</h1>
                <h3 className='hidden md:block text-2xl font-[400] my-6'>Nos experts RH et Tech vous aident à obtenir plus d'entretiens et à les réussir pour des entreprises de haute technologie et les start-up en France et àl’international.</h3>
                <h1 className='block md:hidden text-4xl md:text-6xl font-semibold'>Trois semaines pour booster ton profil grace au digital</h1>
                <h3 className='block md:hidden text-xl md:text-2xl font-[400] my-6'>Optimise ton profil en définissant les compétences numériques recherchées par les entreprises, initie-toi ou prépare l'obtention d'une certification.</h3>
                <div className='flex gap-2 md:gap-8'>
                    <Button type='primary' color='#5594FF'>Réservez un appel</Button>
                    <Button type='secondary' color='#5594FF'>Liste des compétences</Button>
                </div>
            </div>
            <div className='flex-[50%]'>
                <img className='hidden md:block' src={hero} alt="hero section image" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
