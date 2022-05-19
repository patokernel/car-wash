import { Fragment } from 'react'
import '../stylesheets/Services.css'
import { useInView } from 'react-intersection-observer'

const Services = ({ imageSrc, title, subtitle, flipped }) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const renderContent = () => {
    if (!flipped && window.screen.width > 1000) {
      return (
        <Fragment>
          <img src={imageSrc} alt={title} className='service__image' />
          <div className='service__content'>
            <h1 className='service__title'>{title}</h1>
            <p className='service__subtitle'>{subtitle}</p>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div className='service__content'>
            <h1 className='service__title'>{title}</h1>
            <p className='service__subtitle'>{subtitle}</p>
          </div>
          <img src={imageSrc} alt={title} className='service__image' />
        </Fragment>
      )
    }
  }

  return (
    <Fragment>
      <div className={inView ? 'service service--zoom' : 'service'} ref={ref}>
        {renderContent()}
      </div>
    </Fragment>
  )
}

export default Services