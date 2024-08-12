import React from 'react'
import '../styles/navbat.css'
import { NavLink } from 'react-router-dom'
import strelkaBlack from '../images/strelka.png'
import kun from '../images/navbat_kun.png'
import tun from '../images/navbat_tun.png'
import tel from '../images/info_tel.png'
import mess from '../images/info_message.png'
import video from '../images/info_video.png'
function Navbat() {
  return (
    <div className='navbat'>
        <div className="container">
            <div className="nav_header_bg">
                 <div className="navbat_header">
        <NavLink to="/docPro"> <img src={strelkaBlack} alt="" /></NavLink>
        <h3>Navbatlarim</h3>
        </div>
            </div>
            
        <div className="navbat_card">
            <div className="navbat_card_btn_kun">
            <h4>19 May</h4>
            <div className="navbat_kun_btn">

                <button><img width={25} height={25} src={kun} alt="" /> Ertalab</button>
                <button><img width={25} height={25}  src={tun} alt="" /> Kechki</button>
            </div>
            <div className="navbat_kun_soat_btn">
                <button>09:30 am</button>
                <button>10:30 am</button>
                <button>11:30 am</button>
                <button>12:30 am</button>
                <button>01:30 am</button>
            </div>

            </div>
        <div className="navbat_info">
            <div className="info_btn">
            <h3>Fees Information</h3>
                <button><img src={tel} alt="" /> <div className="info_btn_cont">
                    <h4>Qo'ng'iroq qilish</h4>
                    <p>Shifokorga qo'ng'iroq qilish</p>
                    </div> </button>
                <button><img src={mess} alt="" /> <div className="info_btn_cont">
                    <h4>Xabar yuborish</h4>
                    <p>Shifokorga xabar yuborish</p>
                    </div> </button>
                <button><img src={video} alt="" /> <div className="info_btn_cont">
                    <h4> Video qo'ng'iroq qilish</h4>
                    <p>Video qo'ng'iroq qilish</p>
                    </div> </button>
            </div>
        </div>
                  <NavLink to="/malumot"> <button className='davom'>Davom etish</button></NavLink> 
        </div>
        </div>
       
      
    </div>
  )
}

export default Navbat
