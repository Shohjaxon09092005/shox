import React from 'react'
import strelka from '../images/strelka.png'
import '../styles/xulosa.css'
import '../styles/royxat.css'
import rasm1 from '../images/blue_royxat.png'
import rasm2 from '../images/black_royxat.png'
import { NavLink } from 'react-router-dom'
function Royxat() {
    return (
        <div className='royxat'>

            <div className="container">
                <div className="royxat_bg">
                    <div className="xulosa_header_bg">
                        <div className="xulosa_header">
                          <NavLink to="/story"><img src={strelka} alt="" /></NavLink>  
                            <h2>Dorilar ro'yxati</h2>
                            <p>Barchasi</p>
                        </div>
                    </div>
                    <div className="royxat_wrap">
                        <h3>Kardiolog dorilari</h3>
                        <div className="kar_dori">
                            <h4>Kardio ass soat 11:00 - 12:00</h4>
                            <img src={rasm1} alt="" />
                        </div>
                        <div className="kar_dori">
                            <h4>Nevroks soat 12:00 - 12:30</h4>
                            <img src={rasm2} alt="" />
                        </div>
                    </div>
                    <div className="royxat_wrap">
                        <h3>Nevropatolog dorilari dorilari</h3>
                        <div className="kar_dori">
                            <h4>Serdallud soat 8:00 - 9:00</h4>
                            <img src={rasm1} alt="" />
                        </div>
                        <div className="kar_dori">
                            <h4>Fenibut soat 9:00 - 10:00</h4>
                            <img src={rasm2} alt="" />
                        </div>
                    </div>
                   <NavLink to="/dori"><button>Qabul qilish</button></NavLink> 
                </div>



            </div>

        </div>
    )
}

export default Royxat
