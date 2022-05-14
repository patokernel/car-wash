import { useState } from 'react'
import '../stylesheets/Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ navbarLinks, logo }) => {

  const [menuClicked, setMenuClicked] = useState(false)

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }

  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={logo} alt='Logo' />
      {menuClicked ? (
        <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick} />
      ) : (
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClick} />
      )}
      <ul className={menuClicked ? 'navbar__list' : 'navbar__list navbar__list--active'}>
        {
          navbarLinks.map(item =>
            <li className='navbar__item' key={item.title}>
              <a className='navbar__link' href={item.url}>
                {item.title}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar