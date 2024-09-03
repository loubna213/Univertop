import { useState } from 'react'
import { navigation } from '../constants/index'
import logo from '../../assets/images/logo.png'
import Button from '../common/Button'
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(toggleMenu => !toggleMenu);
  }
  

  return (
    <header className='md:bg-custom-radial bg-white shadow-xl h-20 md:h-24 flex justify-center items-center'>
      <div className="container relative flex justify-between items-center">
        <a href="/">
            <img className='w-20 md:w-full' src={logo} alt="logo image" />
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex'>
            {
                navigation.map(link => <a className='px-4 font-semibold' key={link.id} href={link.url}>{link.title}</a>)
            }
        </nav>


        {/* Mobile Navigation */}
        {toggleMenu && <nav className={`bg-white pt-20 absolute top-0 right-[-15px] h-screen w-4/5 flex flex-col gap-4 text-[var(--color-blue)] z-10 transform transition-transform duration-300 ${
            toggleMenu ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {
                navigation.map(link => <a className='px-4 font-semibold' key={link.id} href={link.url}>{link.title}</a>)
            }
        </nav>}

        <Button type='secondary' color='#5594FF'>Réservez un appel</Button>

        <div className="md:hidden z-20">
          <button onClick={handleToggle} className="text-[var(--color-blue)] focus:outline-none">
            {toggleMenu ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
