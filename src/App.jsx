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
      <div className='services'>
        <h3 className='services__title'>Nuestros Servicios</h3>
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'DUCHA'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'ASPIRADO'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={true}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'PULIDO DE FAROS'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'LIMPIEZA DE MOTOR'}
          subtitle={'Evita que los materiales combustibles, como aceite u hojas, se acumulen y se conviertan en un peligro de incendio. Elimina los escombros y la sal de la carretera, reduciendo así la corrosión. Facilita la detección de cualquier peligro potencial, como fugas de fluidos y grietas, antes de que se conviertan en un problema. Esto significa que tener un motor limpio puede hacer que un automóvil sea más seguro y proteger al conductor de averías y accidentes. Una capa de suciedad en el motor lo hace trabajar más duro, por lo que utiliza un exceso de combustible.'}
          flipped={true}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'PULIDO Y ENCERADO'}
          subtitle={'El proceso de pulido de un vehículo permite que la pintura de acabado vuelva a recobrar la vistosidad y el acabado que tenía cuando el vehículo era nuevo. Durante el paso del tiempo, la pintura se ve sometida a distintas agresiones que provocan su deterioro. Factores metereológicos, roces, excrementos de pájaro o los rodillos de los lavaderos son algunos ejemplos de situaciones en las que la pintura de cualquier vehículo puede verse dañada.'}
          flipped={false}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'LIMPIEZA DE TAPIZADO'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={true}
        />
        <Services
          imageSrc={'https://picsum.photos/400'}
          title={'ESTACIONAMIENTO'}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          flipped={false}
        />
      </div>
      <Location />
      <hr />
      <Payments />
    </div>
  )
}

export default App
