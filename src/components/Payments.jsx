import { Fragment } from 'react'
import '../stylesheets/Payments.css'

const Payments = () => {
  return (
    <Fragment>
      <h2>Métodos de Pago</h2>
      <ul className='payments__list'>
        <li className='payments__item'>
          <img src='https://picsum.photos/200' alt='Alt' />
        </li>
        <li className='payments__item'>
          <img src='https://picsum.photos/200' alt='Alt' />
        </li>
        <li className='payments__item'>
          <img src='https://picsum.photos/200' alt='Alt' />
        </li>
        <li className='payments__item'>
          <img src='https://picsum.photos/200' alt='Alt' />
        </li>
        <li className='payments__item'>
          <img src='https://picsum.photos/200' alt='Alt' />
        </li>
      </ul>
    </Fragment>
  )
}

export default Payments