import React from 'react'
import strelka from "../images/strelka.png"
import bildrish from "../images/bildirishnoma.png"
import logo from "../images/profil_logo.png"
import proStrelka from "../images/profil_strelka.png"
import avatar from "../images/profil_avatar.png"
import bil from "../images/profil_bil.png"
import yurak from "../images/profil_yurak.png"
import convert from "../images/profil_convert.png"
import navbat from "../images/profil_navbat.png"
import '../styles/profil.css'
import { NavLink } from 'react-router-dom'
function Profil() {
  return (
    <div className='profil'>
        <div className="container">
            <div className="profil_bg">

            <div className="profil_header">
                <div className="profil_header_cont">
                   <NavLink to="/hero"><img src={strelka} alt="" /></NavLink> 
                    <h3>Profilim</h3>
                    <img src={bildrish} alt="" />
                </div>
                <div className="profil_header_logo">
                    <img src={logo} alt="" />
                    <h3>Fotima Ilhomova</h3>
                    <h4>fotimailhomova@gmail.com</h4>
                </div>
            </div>
            <div className="profil_content">
                <div className="profil_text">
                    <div className="profil_text_img">
                        <img src={avatar} alt="" />
                        <h4>Profil sozlamalari</h4>
                    </div>
                    <img src={proStrelka} alt="" />
                </div>
                <div className="profil_text">
                    <div className="profil_text_img">
                        <img src={bil} alt="" />
                        <h4>Xabarlar</h4>
                    </div>
                    <img src={proStrelka} alt="" />
                </div>
                <div className="profil_text">
                    <div className="profil_text_img">
                        <img src={yurak} alt="" />
                        <h4>Eng yaxshilari</h4>
                    </div>
                    <img src={proStrelka} alt="" />
                </div>
                <div className="profil_text">
                    <div className="profil_text_img">
                        <img src={convert} alt="" />
                        <h4>Kasallik tarixi</h4>
                    </div>
                    <img src={proStrelka} alt="" />
                </div>
                <div className="profil_text">
                    <div className="profil_text_img">
                        <img src={navbat} alt="" />
                        <h4>Navbatlarim</h4>
                    </div>
                    <img src={proStrelka} alt="" />
                </div>

            </div>
            <div className="profil_card">
                <div className="profilCard_cont">

                <h4>Tizim haqida ma'lumot</h4>
                <h4>Qabul qilishim kerak dorilar ro'yxati</h4>
                <p>Chiqish</p>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profil
