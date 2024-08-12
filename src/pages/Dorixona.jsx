import React from 'react'
import '../styles/dorixona.css'
import { NavLink } from 'react-router-dom'
import rasm from '../images/strelka.png'
function Dorixona() {
  return (
    <div className='dorixona'>
        <div className="container">
  <NavLink to="/hero"><img src={rasm} alt="" /></NavLink>
<div className="map">
<iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24371.718212710533!2d69.2239147743164!3d40.22096719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1964a26c943e1%3A0x19609a3fbfc95a05!2sDorixona%2024!5e0!3m2!1suz!2s!4v1723390926751!5m2!1suz!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"> </iframe>
</div>
        </div>
      
    </div>
  )
}

export default Dorixona
