import React from 'react'
import '../styles/docPro.css'
import '../styles/time.css'
import strelkaBlack from '../images/strelka black.png'
import kardiolog from '../images/kardiolog.png'
import star from "../images/star'.png"
import tel from "../images/tel_black.png"
import mess from "../images/time_mess.png"
import video from "../images/video_white.png"
import time from "../images/time_time.png"
import soat from "../images/soat.png"
import avatar from "../images/avatar.png"
import { NavLink } from 'react-router-dom'
function TimeVideo() {
    return (
        <div className='timeVideo'>
            <div className='time'>
                <div className="container">
                    <div className='docPro'>
                        <div className="container">
                            <div className="bac_img">
                                <div className="docPro_header">
                                    <NavLink to="/navbat"> <img src={strelkaBlack} alt="" /></NavLink>
                                    <div className="docPro_logo">
                                        <img className='doc_logo' width={80} height={80} src={kardiolog} alt="" />
                                        <div className="doc_header_content_wrapper">
                                            <div className="doc_header_content">

                                                <h4>Dr.Jamila Rahimova</h4>
                                                <p>Kardiolog</p>
                                                <h5>7 shahar klinikasi</h5>
                                            </div>
                                            <div className="doc_header_star">
                                                <img width={30} height={30} src={star} alt="" />
                                                <h6>5</h6>

                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="blue_wrapper">
                                    <div className="blue_logo">
                                        <NavLink to="/navbatTime"><img src={tel} alt="" /></NavLink>
                                      <NavLink to="/timeXabar"><img src={mess} alt="" /></NavLink>  
                                        <img src={video} alt="" />
                                        <img src={time} alt="" />

                                    </div>
                                    <div className="details">
                                        <div className="details_content">

                                            <div className="details_soat_logo">
                                                <img src={soat} alt="" />
                                                <div className="det_soat_cont">
                                                    <h4>Navbat vaqti</h4>
                                                    <p>Ertalab</p>
                                                    <p>Bugun-19 may .2024</p>
                                                    <p>11:30 am - 12:30 pm</p>
                                                </div>


                                            </div>



                                            <div className="details_soat_logo">
                                                <img src={avatar} alt="" />
                                                <div className="det_soat_cont">
                                                    <h4>Bemor malumotlari</h4>
                                                    <p>Ism : Fotima</p>
                                                    <p>Yosh : 23</p>
                                                    <p>Telefon : +99899-123-45-67</p>
                                                </div>


                                            </div>




                                            <div className="details_btn">
                                                <button className='det_btn'><NavLink to="/videoDoc"> Video qo'ng'iroq qilish</NavLink></button>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimeVideo
