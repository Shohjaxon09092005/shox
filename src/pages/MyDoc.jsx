import React from 'react'
import rasm1 from '../images/strelka.png'
import rasm2 from '../images/bildirishnoma.png'
import '../styles/myDoc.css'
import '../styles/hero.css'
import HeroCard from '../components/HeroCard'
import kardiolog from '../images/kardiolog.png'
import ortoped from '../images/1.png'
import stoma from '../images/stomatolog.png'
import dentist from '../images/dentist.png'
import hirurg from '../images/Hirurg.png'
import nevr from '../images/nevrapatolog.png'
import glav from '../images/glavrach.png'
import oku from '../images/okulist.png'
import yulduz from "../images/star'.png"
import { NavLink } from 'react-router-dom'
function MyDoc() {
    return (
        <div className='myDoc'>
            <div className="container">
                <div className="myDOc_header">
                    <div className="myDoc_img">
                       <NavLink to="/hero"> <img src={rasm1} alt="" /></NavLink>
                        <h2>Mening shifokorlarim</h2>
                        <img src={rasm2} alt="" />

                    </div>
                    <div className="hero_grid">
<h4>Bugun</h4>
                        <HeroCard rasm={kardiolog} ism="Dr.Jamilar Rahimova" kasb="Kardiolog" son="20" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                        <HeroCard rasm={ortoped} ism="Dr.Zokir Sharipov" kasb="Ortoped" son="21" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                        <HeroCard rasm={stoma} ism="Dr.Humora Karimova" kasb="Stomotolog" son="120" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                        <h4>Kecha</h4>
                        <HeroCard rasm={dentist} ism="Dr.Aliya Jumayeva" kasb="Dentist" son="100" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                        <HeroCard rasm={hirurg} ism="Dr.Doniyor" kasb="Hirurg" son="50" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                        <HeroCard rasm={nevr} ism="Dr.Madina Aliyeva" kasb="Nevropatolog" son="25" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                        <HeroCard rasm={glav} ism="Dr.Jamshid Aliyev" kasb="Glavrach" son="60" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                        <HeroCard rasm={oku} ism="Dr.Ilhom Shukurov" kasb="Okulist" son="40" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyDoc
