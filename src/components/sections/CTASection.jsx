import Button from '../common/Button'

const CTASection = () => {
  return (
    <section>
        <div className="container flex flex-col justify-center items-center py-12">
            <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
                <h3 className='font-semibold text-3xl text-center'>Nos conseils par chat</h3>
                <p className='text-[var(--color-text)] text-lg leading-relaxed text-center my-6'>Rejoins notre communauté sur Telegram et reçois nos conseils sur les compétences, les outils à apprendre et les méthodes en matière de réussite professionnelle.</p>
                <div>
                    <Button type='primary' color='#5594FF'>Rejoindre le chat</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTASection
