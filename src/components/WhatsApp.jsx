import '../stylesheets/WhatsApp.css'
import wpp from '../assets/wpp.png'

const WhatsApp = ({ number }) => {
  return (
    <div class='whatsapp'>
      <a href={number} target='_blank' rel='noreferrer'>
        <img className='whatsapp__icon' src={wpp} alt='WhatsApp' />
      </a>
    </div>
  )
}

export default WhatsApp