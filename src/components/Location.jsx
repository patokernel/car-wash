import '../stylesheets/Location.css'
const Location = () => {
  return (
    <div className='location'>
      <h3 className='location__title'>Ubicación</h3>
      <div className='location__card'>
        <div className='location__item'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.023201347678!2d-57.61563130667041!3d-25.30024871942604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da943b7ef45af%3A0x96a4e6e1ef6b11e6!2sLavadero%20El%20Mangal!5e0!3m2!1ses-419!2sar!4v1653350845402!5m2!1ses-419!2sar" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Lavadero El Mangal' className='map'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location