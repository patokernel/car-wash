import './App.css'
import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import Hero from './components/Hero'
import Services from './components/Services'
import Payments from './components/Payments'
import Location from './components/Location'
import video from './assets/hero.mp4'

const navbarLinks = [
  { url: '#', title: 'Inicio' },
  { url: '#', title: 'Servicios' },
  { url: '#', title: 'Métodos de Pago' },
  { url: '#', title: 'Ubicación' }
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} logo={logo} />
      <Hero videoSrc={video} />
      <div className='services-container'>
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 1'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 2'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={true}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 3'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 4'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={true}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 5'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'Servicio 6'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={true}
        />
      </div>
      <Location />
      <hr />
      <Payments />
    </div>
  )
}

export default App
