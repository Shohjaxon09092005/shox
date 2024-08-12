import React from 'react'
import '../styles/telDoc.css'
import kardiolog from '../images/kardiolog.png'
import strelka from '../images/strelka black.png'
import tel_img from '../images/tel_img.png'
import { NavLink } from 'react-router-dom'
function TelDoc() {
  return (
    <div className='telDoc'>
        <div className="container">
            <div className="telDoc_bg">
                  <div className="telDoc_header">
               <NavLink to="/navbatTime"><img src={strelka} alt="" /></NavLink> 
            </div>
            <div className="telDoc_wrapper">
                <p>Outgoing call</p>
                <img width={150} height={150} src={kardiolog} alt="" />
                <h2>Dr.Humora Karimova</h2>
                <h4>10:08</h4>
            </div>
            <div className="telDoc_logo">
                <img src={tel_img} alt="" />
            </div>
            </div>
          
        </div>
      
    </div>
  )
}

export default TelDoc
