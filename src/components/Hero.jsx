import '../stylesheets/Hero.css'

const Hero = ({ videoSrc }) => {
  return (
    <div className='hero'>
      <video className='hero__video' autoPlay loop muted preload src={videoSrc} />
      <h1 className='hero__title'>El Mangal</h1>
    </div>
  )
}

export default Hero