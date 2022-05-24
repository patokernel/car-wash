import '../stylesheets/WhatsApp.css'
import { BsWhatsapp } from 'react-icons/bs';

const WhatsApp = ({ number }) => {
  return (
    <div class='whatsapp'>
      <a href={number} target='_blank' rel='noreferrer'>
        <BsWhatsapp className='whatsapp__icon' />
      </a>
    </div>
  )
}

export default WhatsApp