import '../stylesheets/Hero.css'

const Hero = ({ videoSrc }) => {
  return (
    <div className='hero'>
      <video className='hero__video' autoPlay loop muted preload src={videoSrc} />
    </div>
  )
}

export default Hero