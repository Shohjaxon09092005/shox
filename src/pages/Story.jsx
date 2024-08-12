import React from 'react'
import '../styles/xulosa.css'
import strelka from '../images/strelka.png'
import avatar from '../images/video_avatar.png'

import details_img from "../images/2005.png"
import details_btn from "../images/details_btn.png"
import { NavLink } from 'react-router-dom'
function Story() {
    return (
        <div className='story'>
            <div className="container">
                <div className="xulosa_header_bg">
                    <div className="xulosa_header">
                       <NavLink to="/hero"><img src={strelka} alt="" /></NavLink> 
                        <h3>Kasallik tarixi</h3>
                        <p>Barchasi</p>
                    </div>
                </div>
                <div className='docPro'>
                    <div className="container">
                        <div className="bac_img">
                            <div className="docPro_header">
                                <div className="docPro_logo">
                                    <img className='doc_logo' width={80} height={80} src={avatar} alt="" />
                                    <div className="doc_header_content_wrapper">
                                        <div className="doc_header_content">

                                            <h4>Fotima Ilhomova</h4>
                                            
                                        </div>
                                        <div className="doc_header_star">
                                         

                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className="blue_wrapper">
                                <div className="blue_logo">
                                    <div className="blue_logo_content">
                                       
                                        <div className="blue_cont_num">
                                          
                                        </div>

                                    </div>
                                    <div className="blue_logo_content">
                                      
                                        <div className="blue_cont_num">
                                           
                                        </div>

                                    </div>
                                </div>
                                <div className="details">
                                    <div className="details_content">
                                        <h4>Bemor haqida</h4>
                                        <p>Fotima Ilhomava 2000 yilda tug'ilgan.Yurak og'rishi bilan og'riydi.Doimiy kuzatuvda shifokor tomonidan maslahat oladi</p>
                                        <h4>Shifokor tomonidan qabul qilish kunlari</h4>
                                        <p>Du-Ju 09:00 am - 08:00 pm</p>
                                        <h4>May</h4>
                                        <img src={details_img} alt="" />
                                        <div className="details_btn">
                                            <img src={details_btn} alt="" />
                                            <button className='det_btn'><NavLink to="/royxat">Shifokor tomonidan dori retseptini kiriting</NavLink></button>
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

export default Story
