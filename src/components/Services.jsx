import { Fragment } from 'react'
import '../stylesheets/Services.css'
import { useInView } from 'react-intersection-observer'

const Services = ({ videoSrc, title, subtitle, flipped }) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const renderContent = () => {
    if (!flipped && window.screen.width > 1000) {
      return (
        <Fragment>
          <video className='service__video' autoPlay loop muted preload src={videoSrc} />
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
          <video className='service__video' autoPlay loop muted preload src={videoSrc} />
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