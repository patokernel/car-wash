import { useState, useEffect, Fragment } from 'react'
import './App.css'
import RotateLoader from 'react-spinners/RotateLoader'
import { About, Footer, Hero, Location, Navbar, Payments, Services, WhatsApp } from './components'
import { logo, video } from './assets/imports'
import { servicesData } from './data/servicesData'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
            <Navbar logo={logo} />
            <WhatsApp number={'https://api.whatsapp.com/send?phone=595994446100'} />
            <Hero videoSrc={video} />
            <About />
            <div className='services__container'>
              <h3 className='services__title'>Nuestros Servicios</h3>
              {
                servicesData.map((service) =>
                  <Services
                    videoSrc={service.videoSrc}
                    title={service.title}
                    subtitle={service.subtitle}
                    flipped={service.flipped}
                    key={service.title}
                  />
                )
              }
            </div>
            <Location />
            <hr />
            <Payments />
            <Footer />
          </div>
      }
    </Fragment>
  )
}

export default App
