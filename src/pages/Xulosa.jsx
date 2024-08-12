import React from 'react'
import '../styles/xulosa.css'
import strelka from '../images/strelka.png'
import yulduz from '../images/xulosa_yuluz.png'
import kard from '../images/kardiolog.png'
import { NavLink } from 'react-router-dom'
function Xulosa() {
  return (
    <div className='xulosa'>
        <div className="container">
            <div className="xulosa_bg">
              <div className="xulosa_header_bg">
                <div className="xulosa_header">
                  <NavLink to="/hero"><img src={strelka} alt="" /></NavLink>  
                    <h3>Shifokor to'g'risida xulosa</h3>
                </div>
            </div>  
            <div className="xulosa_logo">
                <img width={100}height={100} src={kard} alt="" />
                <h4>Siz shifokorni qanday baholaysiz?</h4>
                <p>Dr.Humora Karimova</p>
                <img src={yulduz} alt="" />

            </div>
            <div className="xulosa_cont">
                <h4>Izoh qoldirish</h4>
                <h6>600 ta so'z yozish mumkin</h6>
            </div>
            <div className="input_xulosa">
                   
                   <p>Humora Karimova juda ajoyib shifokor,sizga o'z minnatdorchiligimni bildiraman,siz hayotimini yaxshi tomonga o'zgartirdingiz,rahmat</p>
                   
            </div>
            <div className="xulosa_check">

            <h3 >Boshqalarga ham tavsiya etasizmi?</h3>
            <div className="xulosaCheck">
                <div className="check_card">
                    <input type="radio" name="" id="" />
                    <p>Ha</p>
                </div>
                <div className="check_card">
                    <input type="radio" name="" id="" />
                    <p>Yo'q</p>
                </div>
            </div>
               <NavLink to="/docPro"><button>Give Review</button></NavLink> 
            </div>
            </div>
         
            
        </div>
      
    </div>
  )
}

export default Xulosa
