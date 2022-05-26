import '../stylesheets/Hero.css'

const Hero = ({ videoSrc }) => {
  return (
    <div className='hero' id='hero'>
      <video className='hero__video' autoPlay loop muted preload='true' src={videoSrc} />
    </div>
  )
}

export default Hero