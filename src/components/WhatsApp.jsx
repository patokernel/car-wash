import '../stylesheets/WhatsApp.css'
import { BsWhatsapp } from 'react-icons/bs';

const WhatsApp = () => {
  return (
    <div class='whatsapp'>
      <a href='https://api.whatsapp.com/send?phone=595994446100' target='_blank' rel='noreferrer'>
        <BsWhatsapp className='whatsapp__icon' />
      </a>
    </div>
  )
}

export default WhatsApp