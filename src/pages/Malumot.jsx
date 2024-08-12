import React from 'react'
import strelka from '../images/strelka.png'
import bil from '../images/bildirishnoma.png'
import cont from '../images/carta_logo_avatar.png'
import yosh from '../images/yosh.png'
import tell from '../images/tell.png'
import jinsi from '../images/jinsi.png'
import '../styles/xulosa.css'
import '../styles/malumot.css'
import { NavLink } from 'react-router-dom'
function Malumot() {
  return (
    <div className='malumot'>
        <div className="container">
            <div className="xulosa_bg">
                 <div className="xulosa_header_bg">
                <div className="xulosa_header">
                 <NavLink to="/navbat"> <img src={strelka} alt="" /></NavLink>  
                    <h3>Bemor ma'lumotlari</h3>
                    <img src={bil} alt="" />
                </div>
            </div> 
            <div className="malumot_width">
                <div className="malumot_name">
                <img src={cont} alt="" />
                <h3>Ism</h3>
            </div>
            <div className="malumot_text">
                <p>Fotima</p>
                <hr />
            </div> 
            <div className="malumot_name">
                <img src={yosh} alt="" />
                <h3>Yoshingizni tanlang yoki kiriting</h3>
            </div>
            <div className="malumot_btn">
                <button>10+</button>
                <button>20+</button>
                <button>30+</button>
                <button>50+</button>
                <button>60+</button>
            </div>
            <div className="malumot_name">
                <img src={tell} alt="" />
                <h3>Telefon raqam</h3>
            </div>
            <div className="malumot_text">
                <p>+99899 123-45-67</p>
                <hr />
            </div> 
            <div className="malumot_name">
                <img src={jinsi} alt="" />
                <h3>Jinsi</h3>
            </div>
            <div className="malumot_check">
                <div className="malumot_check_text">
                    <input type="radio" name="" id="" />
                    <p>Ayol </p>
                </div>
                <div className="malumot_check_text">
                    <input type="radio" name="" id="" />
                    <p>Erkak </p>
                </div>
            </div>
            <div className="malumot_mal">
            <h3>O'z ma'lumoti qisqacha</h3>
            <div className="mal_cont">
                <p>Men kardiolog ko'rigiga borishim kerak,yuragim ko'p og'riyabdi</p>
                
            </div>

            </div>
            <NavLink to="/navbatTime"><button className='mal_btn'>Davom etish</button></NavLink>
            </div>
           
            </div>
       
        </div>
      
    </div>
  )
}

export default Malumot
