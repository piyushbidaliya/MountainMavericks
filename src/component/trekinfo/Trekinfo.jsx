import React from 'react'
import './trekinfo.css'

const ContainerBox=({heading,content})=>{
    return(
        <div className="trekde_container-box">
        <h4>{heading}</h4>
        <h3>{content}</h3>
      </div>
    )
}


const Trekinfo=({heading, mainheading, img1, alt, text})=> {
    return (
      <div className='Trek_info'> 
      {img1 && (
        <div className="Trek_info-img">
          <img src={img1} alt={alt}/>
          <div className="text-overlay">
                <h2>{text}</h2>
          </div>
        </div>
        )}
        <div className="Trek_info-heading">
          <h1>{mainheading}</h1>
        </div>
        <div className="Trek_info-container">
            <div className="Trek_info-content">
                <h2>Tour Overview</h2>
                <h1>{heading}</h1>
            </div>
            <div className="Trek_info-itinerary">
            <h2>Trek Itinerary</h2>

            </div>
        </div>
      </div>
    )
  }

export default Trekinfo
export {ContainerBox}