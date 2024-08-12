import React, { useRef } from 'react'
import search from '../images/search.png'
import filtr from '../images/filter-32-128.png'
import burger from '../images/burger.png'
import location from '../images/pngegg.png'
import '../styles/hero.css'
import { NavLink } from 'react-router-dom'
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
import kardiologiya from "../images/kardiologiya.png"
import ortoped_logo from "../images/ortoped_logo.png"
import stomatologiya from "../images/stomatologiya.png"
import hirurgiya from "../images/hirurgiya.png"
import nevrapatolog from "../images/nevropatolog-r.png"
import glavrch from "../images/glavrach_logo.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Hero() {
    let modal=useRef()
    let local=useRef()
    function openModal(){
        modal.current.classList.add("opModal")

    }
    function delModal(){
        modal.current.classList.remove("opModal")

    }
    function openlocal(){
        local.current.classList.add("openLocal")

    }
    function delLocal(){
        local.current.classList.remove("openLocal")

    }
    return (
        <div className='hero'>
            <div className="container">
                <div ref={local} className="modalLocal">
                    <div className="local">
                        <span onClick={delLocal}>X</span>
                    <iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388228.46073542297!2d68.18400878906249!3d40.51872080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20744f37988af%3A0x5fe5538855c9a835!2sYoshlar%20markazi!5e0!3m2!1suz!2s!4v1723392620157!5m2!1suz!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
                <div ref={modal} className="modal">
                    <span onClick={delModal}>X</span>
                    <ul>
                        <NavLink to="/profil"><li>Profilim</li></NavLink>
                        <NavLink to="/myDoc"><li>Mening shifokorlarim</li></NavLink>
                        <NavLink to="/story"><li>Kasallik tarixi</li></NavLink>
                        <NavLink to="/doriroom"><li>Eng yaqin dorixonalar</li></NavLink>
                        <NavLink to="/xulosa"><li>Izoh qoldirish</li></NavLink>
                    </ul>
                </div>
                <div className="header_hero">
                    <div className="hero_logo">
                        <img onClick={openModal} width={30} height={30} src={burger} alt="" />
                        <img onClick={openlocal} width={35} height={35} src={location} alt="" />
                    </div>
                    <div className="hero_content">
                        <h2>O'zingizga kerakli shifokorni toping</h2>
                        <h1>Eng yaxshi shifokorlar</h1>
                    </div>
                    <form >
                        <img width={18} height={18} src={search} alt="" />
                        <input type="text" placeholder='Qidirish' />

                        <span><img width={35} height={35} src={filtr} alt="" /></span>
                    </form>

                </div>
                <div className="hero_card">
                    <div className="hero_card_turkum">
                        <h4>Turkumlar</h4>


                        <NavLink>Ko'rish</NavLink>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img width={100} height={100} src={kardiologiya} alt="" />
                            <h4>Kardiologiya</h4>
                        </SwiperSlide>
                        <SwiperSlide><img width={100} height={100} src={ortoped_logo} alt="" />
                            <h4>Ortoped</h4>
                        </SwiperSlide>
                        <SwiperSlide><img width={100} height={100} src={stomatologiya} alt="" />
                            <h4>Stomatolgiya</h4>
                        </SwiperSlide>
                        <SwiperSlide><img width={100} height={100} src={hirurgiya} alt="" />
                            <h4>Hirurgiya</h4>
                        </SwiperSlide>
                        <SwiperSlide><img width={100} height={100} src={glavrch} alt="" />
                            <h4>Glavrach</h4>

                        </SwiperSlide>
                        <SwiperSlide><img width={100} height={100} src={nevrapatolog} alt="" />
                            <h4>Nevropatologiya</h4>
                        </SwiperSlide>

                    </Swiper>
                    <div className="hero_card_dr">
                        <h4>Eng yaxshi shifokorlar</h4>

                        <NavLink to="/heroBanner">Ko'rish</NavLink>
                    </div>
                    <div className="hero_grid">

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

        </div>
    )
}

export default Hero
