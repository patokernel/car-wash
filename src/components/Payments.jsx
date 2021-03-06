import '../stylesheets/Payments.css'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import amex from '../assets/amex.png'
import bank from '../assets/bank.png'
import cash from '../assets/cash.png'
import bch from '../assets/bch.png'

const Payments = () => {
  return (
    <div className='payments' id='payments'>
      <h3 className='payments__title'>Medios de Pago</h3>
      <ul className='payments__list'>
        <li className='payments__item'>
          <img src={mastercard} alt='Master Card' />
        </li>
        <li className='payments__item'>
          <img src={visa} alt='Visa' />
        </li>
        <li className='payments__item'>
          <img src={amex} alt='American Express' />
        </li>
        <li className='payments__item'>
          <img src={bank} alt='Banco' />
        </li>
        <li className='payments__item'>
          <img src={cash} alt='Efectivo' />
        </li>
        <li className='payments__item'>
          <img src={bch} alt='Bitcoin Cash' />
          <p>5% Off</p>
        </li>
      </ul>
    </div>
  )
}

export default Payments