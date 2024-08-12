import React from 'react'
import '../styles/docPro.css'
import strelkaBlack from '../images/strelka black.png'
import kardiolog from '../images/kardiolog.png'
import star from "../images/star'.png"
import blue1 from "../images/blue_logo1.png"
import blue2 from "../images/blue_logo2.png"
import details_img from "../images/details_img.png"
import details_btn from "../images/details_btn.png"
import { NavLink } from 'react-router-dom'
function DocProfil() {
    return (
        <div className='docPro'>
            <div className="container">
                <div className="bac_img">
                    <div className="docPro_header">
                       <NavLink to="/hero"> <img src={strelkaBlack} alt="" /></NavLink>
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
                            <div className="blue_logo_content">
                                <img src={blue1} alt="" />
                                <div className="blue_cont_num">
                                    <h4>1000+</h4>
                                    <h5>Bemorlar</h5>
                                </div>

                            </div>
                            <div className="blue_logo_content">
                                <img src={blue2} alt="" />
                                <div className="blue_cont_num">
                                    <h4>15 Yil</h4>
                                    <h5>Malaka</h5>
                                </div>

                            </div>
                        </div>
                        <div className="details">
                            <div className="details_content">
                                <h4>Shifokor to'g'risida</h4>
                                <p>Doktor Jamila Rahimova eng yuqori kardiolog Toshkent tibbiyot markazi kasalxonasida mutaxassis.U bir qancha mukofotlarga sazovor bo'lgan o'z sohasiga ajoyib hissa qo'shgan</p>
                                <h4>Ish vaqti</h4>
                                <p>Du-Ju 09:00 am - 08:00 pm</p>
                                <h4>May</h4>
                                <img src={details_img} alt="" />
                                <div className="details_btn">
                                    <img src={details_btn} alt="" />
                                    <button className='det_btn'><NavLink to="/navbat">Navbatga yozilish</NavLink></button>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DocProfil
