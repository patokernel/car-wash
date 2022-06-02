import '../stylesheets/Hero.css'

const Hero = ({ videoSrc }) => {
  return (
    <div className='hero' id='hero'>
      <video className='hero__video' preload='auto' controls muted>
        <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  )
}

export default Hero