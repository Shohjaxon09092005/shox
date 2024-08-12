import React from 'react'
import '../styles/profil.css'
import strelka from "../images/strelka.png"
import bildrish from "../images/bildirishnoma.png"
import '../styles/dori.css'
import carta from '../images/carta_doti.png'
import carta_av from '../images/carta_logo_avatar.png'
import carta_logo from '../images/carta_logo.png'
import { NavLink } from 'react-router-dom'
function Dori() {
    return (
        <div className='dori'>
            <div className="container">
                <div className="dori_bg">
                    <div className="profil_header">
                        <div className="profil_header_cont">
                         <NavLink to="/royxat"><img src={strelka} alt="" /></NavLink>   
                            <h3>Dori uchun to'lov</h3>
                            <img src={bildrish} alt="" />
                        </div>

                    </div>
                    <div className="carta_card">
                        <img className='carta' src={carta} alt="" />
                    </div>
                    <div className="doriKarta_text">
                        <p>Yangi karta ulash</p>
                        <NavLink >Xavfsizlik bilan tanishish</NavLink>
                    </div>
                    <div className="doriCard_content">
                        <div className="carta_logo">
                            <img src={carta_av} alt="" />
                            <h3>Ism</h3>
                        </div>
                        <h4>Karta nomini kiriting</h4>
                        <hr />
                    </div>
                    <div className="doriCard_content">
                        <div className="carta_logo">
                            <img src={carta_logo} alt="" />
                            <h3>Karta raqami</h3>
                        </div>
                        <h4>Karta raqamini kiriting</h4>
                        <hr />
                    </div>
                    <div className="karta_grid">

                    <div className="doriCard_content salom">
                        <div className="carta_logo">
                            <img src={carta_logo} alt="" />
                            <h3>Amal qilishi</h3>
                        </div>
                        <h4> DD-MM-YYYY</h4>
                        <hr />
                    </div>
                    <div className="doriCard_content salom">
                        <div className="carta_logo">
                            <img src={carta_logo} alt="" />
                            <h3>Karta CVV raqami</h3>
                        </div>
                        <h4>CVV raqam</h4>
                        <hr />
                    </div>
                    </div>
                    <div className="carta_btn">
                        <button>To'lov turlari</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Dori
