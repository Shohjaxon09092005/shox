import React from 'react'
import '../styles/xabarDoc.css'
import strelka from '../images/strelka.png'
import kardiolog from '../images/kardiolog.png'
import xabarDoc_img from '../images/xabarDoc.png'
import img from '../images/xabarDoc_btn.png'
import { NavLink } from 'react-router-dom'
function XabarDoc() {
  return (
    <div className='xabarDoc'>
        <div className="container">
            <div className="xabarDoc_header">
                <div className="xabarDoc_header_cont">
               <NavLink to="/timeXabar"><img src={strelka} alt="" /></NavLink> 
                <h2>Dr.Humora Karimova</h2>
                </div>
            </div>
            <div className="xabarDoc_content">
                <div className="xabarDoc_cont_wrapper">
                        <div className="xabarDoc_card1">
                            <p>Salom Humora opa, sizning yordamingiz kerak</p>
                        </div>

                </div>
                <div className="xabarDoc_cont_wrapper2">
                    <img width={50} height={50} src={kardiolog} alt="" />
                        <div className="xabarDoc_card2">
                            <p>Salom Fotima.Nima muammo?</p>
                        </div>

                </div>
                <div className="xabarDoc_cont_wrapper">
                        <div className="xabarDoc_card1">
                            <p>Yuragim og'riyabdi</p>
                        </div>

                </div>
                <div className="xabarDoc_cont_wrapper2">
                    <img width={50} height={50} src={kardiolog} alt="" />
                        <div className="xabarDoc_card2">
                            <p>Sizga tavsiya etilgan dorilarni vaqtida qabul qilyabsizmi?</p>
                        </div>

                </div>
                <div className="xabarDoc_cont_wrapper">
                        <div className="xabarDoc_card1">
                            <img src={xabarDoc_img} alt="" />
                        </div>

                </div>
                <div className="xabarDoc_cont_wrapper2">
                    <img width={50} height={50} src={kardiolog} alt="" />
                        <div className="xabarDoc_card2">
                            <p>Yozyabdi.......</p>
                        </div>

                </div>
                <img className='xabarDoc_btn' src={img} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default XabarDoc
