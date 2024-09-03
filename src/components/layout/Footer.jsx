import footer1 from '../../assets/icons/footer1.png'
import footer2 from '../../assets/icons/footer2.png'
import AccordionContainer from '../ui/Accordion'

const Footer = () => {
  return (
    <section className='bg-[var(--color-blue)] '>
      <div className='bg-[#639CFF] flex justify-around items-center px-4 md:px-0 py-4 text-white'>
        <h2 className='text-xl md:text-2xl'>Accélère ta carrière</h2>
        <button className='text-[var(--color-blue)] text-sm md:text-lg cursor-pointer font-semibold rounded-md border-none outline-none py-1 md:py-3 px-3 md:px-6 bg-white'>Réserver un appel</button>
      </div>
      <div className="container relative w-full">
        <img className='hidden md:block absolute bottom-0 left-[-70px]' src={footer1} alt="image" />
        <img className='hidden md:block absolute bottom-0 right-[-67px]' src={footer2} alt="image" />
        <div className='hidden py-12 w-full max-w-screen-lg mx-auto text-white md:grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-8 justify-center'>
          <div>
            <h3 className="text-xl font-semibold mb-3">Competences</h3> 
            <ul>
              <li>Salesforce</li>
              <li>Microsoft Dynamics</li>
              <li>Power BI</li>
              <li>SAP</li>
              <li>UX/UI Design</li>
              <li>Google Ads</li>
              <li>Copywriting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Financements</h3> 
            <ul>
              <li>Pôle-Emploi</li>
              <li>CPF</li>
              <li>OPCO</li>
              <li>SAP</li>
              <li>Paiement en plusieurs fois</li>
              <li>ISA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Services B2B</h3> 
            <ul>
              <li>E-learning</li>
              <li> Web-events</li>
              <li>Recrutement</li>
              <li>Partenariats</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Resources</h3> 
            <ul>
              <li>A propos</li>
              <li> Blog</li>
              <li>CGV</li>
              <li>Mentions</li>
              <li>légales Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full block md:hidden'>
        <AccordionContainer/>
      </div>
      <div className='bg-white py-6 text-center '>
        <p className='text-xs md:text-lg'>Copyright © {new Date().getFullYear()} Company Inc. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer
