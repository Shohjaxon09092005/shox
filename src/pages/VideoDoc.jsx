import React from 'react'
import kardiolog from '../images/videoDoc.png'
import video_img from '../images/video_img.png'
import video_avatar from '../images/video_avatar.png'
import strelkaBlack from '../images/strelka black.png'
import { NavLink } from 'react-router-dom'

function VideoDoc() {
  return (
    <div className='videoDoc'>
        <div className="container">
            <div className="videoDoc_bg">
                <div className="videoDoc_header">
                  <NavLink to="/timeVideo"> <img src={strelkaBlack} alt="" /></NavLink> 
                    <img src={video_avatar} alt="" />
                </div>
                <div className="videoDoc_logo">

                <img height={500} src={kardiolog} alt="" />
                </div>
                <div className="videDoc_content">
                    <h1>Dr.Humora Karimova</h1>
                    <h4>10:08</h4>
                    <img src={video_img} alt="" />
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default VideoDoc
