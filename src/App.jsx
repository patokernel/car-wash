import { useState, useEffect, Fragment } from 'react'
import './App.css'
import RotateLoader from 'react-spinners/RotateLoader';
import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import Hero from './components/Hero'
import Services from './components/Services'
import Payments from './components/Payments'
import Location from './components/Location'
import video from './assets/hero.mp4'
import ducha from './assets/ducha.mp4'
import aspirado from './assets/aspirado.mp4'
import tapizado from './assets/tapizado.mp4'
import pulidoFaros from './assets/pulido-faros.mp4'
import motor from './assets/motor.mp4'
import encerado from './assets/encerado.mp4'
import pulido from './assets/pulido.mp4'


const navbarLinks = [
  { url: '#', title: 'Inicio' },
  { url: '#', title: 'Servicios' },
  { url: '#', title: 'Métodos de Pago' },
  { url: '#', title: 'Ubicación' }
]

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Fragment>
      {
        loading ?
          <div className='loader'>
            <RotateLoader
              loading={loading}
              size={20}
              color={"#000000"}
              speedMultiplier={1}
            />
          </div>
          :
          <div className="App">
            <Navbar navbarLinks={navbarLinks} logo={logo} />
            <Hero videoSrc={video} />
            <div className='services'>
              <h3 className='services__title'>Nuestros Servicios</h3>
              <Services
                videoSrc={ducha}
                title={'DUCHA'}
                subtitle={'El lavado con agua a presión tiene ventajas considerables: alcanza los rincones difíciles, ahorra tiempo y consumo, la suciedad se remueve fácilmente evitando que la pintura se raye por desechos como arena o barro.'}
                flipped={false}
              />
              <Services
                videoSrc={aspirado}
                title={'ASPIRADO'}
                subtitle={'Se realiza un aspirado completo del vehículo y se utiliza una maquina de vapor para una limpieza profunda y eficaz. Se detalla en zonas de espacios reducidos, pedaleras, huecos de objetos personales, toberas de aire, entre puertas, zócalos, parasoles, manijas, paneles y plasticos en gral. Se detalla el tablero y se acondiciona el interior completo con productos para brillo y nutrición.'}
                flipped={true}
              />
              <Services
                videoSrc={tapizado}
                title={'LIMPIEZA DE TAPIZADO'}
                subtitle={'Con las butacas puestas, realizamos el proceso manual con cepillos y apc para eliminar manchas de todo tipo. Luego con la máquina de lavatapizados y su sistema de inyección y extracción cerramos el proceso dejando las butacas con una terminación nueva, súper limpias y desinfectadas.'}
                flipped={false}
              />
              <Services
                videoSrc={pulidoFaros}
                title={'PULIDO DE FAROS'}
                subtitle={'Con el paso de los años se crea una capa amarillenta en los faros que nos van haciendo perder visibilidad y, por lo tanto, seguridad al conducir. Con nuestro pulido de faros eliminamos la capa amarillenta del faro, y te los entregamos como nuevos, recuperando la visibilidad en situaciones en las que sea necesario usar las luces.'}
                flipped={true}
              />
              <Services
                videoSrc={motor}
                title={'LIMPIEZA DE MOTOR'}
                subtitle={'Una capa de suciedad en el motor lo hace trabajar más duro, por lo que utiliza un exceso de combustible. Además, materiales combustibles, como aceite u hojas, se acumulan y se conviertan en un peligro de incendio. Al hacer una limpieza, se facilita la detección de cualquier peligro potencial, como fugas de fluidos y grietas, antes de que se conviertan en un problema. Esto significa que tener un motor limpio puede hacer que un automóvil sea más seguro y proteger al conductor de averías y accidentes.'}
                flipped={false}
              />
              <Services
                videoSrc={encerado}
                title={'ENCERADO'}
                subtitle={'La pintura se ve sometida a distintas agresiones que provocan su deterioro. Factores metereológicos, roces, excrementos de pájaro o los rodillos de los lavaderos son algunos ejemplos de situaciones en las que la pintura de cualquier vehículo puede verse dañada. Con el encerado se deja un capa protectora en la superficie que sirve para que la pintura no sufra daños de contaminantes o marcas de agua.'}
                flipped={true}
              />
              <Services
                videoSrc={pulido}
                title={'PULIDO'}
                subtitle={'Cuando la pintura presenta un deterioro considerable y no quieres usar el último recurso (repintar), el pulido te ofrece una limpieza de pintura a profundidad, eliminando oxidaciones, acumulaciones de cera, arañazos del uso de paños inadecuados para secar el automóvil, manchas causadas por las aves, los insectos e inclusive por el agua, cuando ésta contiene químicos perjudiciales.'}
                flipped={false}
              />
            </div>
            <Location />
            <hr />
            <Payments />
          </div>
      }
    </Fragment>
  )
}

export default App
