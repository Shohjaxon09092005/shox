import React from 'react'
import '../styles/heroBanner.css'
import kardiolog from '../images/kardiolog.png'
import ortoped from '../images/1.png'
import stoma from '../images/stomatolog.png'
import dentist from '../images/dentist.png'
import hirurg from '../images/Hirurg.png'
import nevr from '../images/nevrapatolog.png'
import glav from '../images/glavrach.png'
import oku from '../images/okulist.png'
import yulduz from "../images/star'.png"
import HeroCard from '../components/HeroCard'
import strelka from '../images/strelka.png'
import { NavLink } from 'react-router-dom'
function HeroBanner() {
    return (
        <div className='hero_banner'>
            <div className="container">
                <div className="heroBanner_header">
                    <NavLink to="/hero"><img src={strelka} alt="" /></NavLink>
                    <h3>Eng yaxshi shifokorlar</h3>
                </div>
                <div className="heroBanner_grid">

                    <HeroCard rasm={kardiolog} ism="Dr.Jamilar Rahimova" kasb="Kardiolog" son="20" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={ortoped} ism="Dr.Zokir Sharipov" kasb="Ortoped" son="21" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                    <HeroCard rasm={stoma} ism="Dr.Humora Karimova" kasb="Stomotolog" son="120" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                    <HeroCard rasm={dentist} ism="Dr.Aliya Jumayeva" kasb="Dentist" son="100" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={hirurg} ism="Dr.Doniyor" kasb="Hirurg" son="50" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={nevr} ism="Dr.Madina Aliyeva" kasb="Nevropatolog" son="25" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={glav} ism="Dr.Jamshid Aliyev" kasb="Glavrach" son="60" yulduz={yulduz} yulSon="5" btn_nomi="Ko'rish" />
                    <HeroCard rasm={oku} ism="Dr.Ilhom Shukurov" kasb="Okulist" son="40" yulduz={yulduz} yulSon="4.8" btn_nomi="Ko'rish" />
                </div>


            </div>

        </div>
    )
}

export default HeroBanner
