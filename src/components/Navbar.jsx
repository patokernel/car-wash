import { useState } from 'react'
import '../stylesheets/Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Navbar = ({ logo }) => {
  const [menuClicked, setMenuClicked] = useState(true)
  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
          <img className='navbar__logo--img' src={logo} alt='Logo' />
        </Link>
        <span className='navbar__logo--txt'>El Mangal</span>
      </div>
      {menuClicked ? (
        <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick} />
      ) : (
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClick} />
      )}
      <ul className={menuClicked ? 'navbar__list' : 'navbar__list navbar__list--active'}>
        <li className='navbar__item'>
          <Link to='hero' spy={true} smooth={true} offset={0} duration={500} className='navbar__link' onClick={toggleMenuClick}>
            Inicio
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='about' spy={true} smooth={true} offset={0} duration={500} className='navbar__link' onClick={toggleMenuClick}>
            Nosotros
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='services' spy={true} smooth={true} offset={-280} duration={500} className='navbar__link' onClick={toggleMenuClick}>
            Servicios
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='location' spy={true} smooth={true} offset={-100} duration={500} className='navbar__link' onClick={toggleMenuClick}>
            Ubicación
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='payments' spy={true} smooth={true} offset={0} duration={500} className='navbar__link' onClick={toggleMenuClick}>
            Pagos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar