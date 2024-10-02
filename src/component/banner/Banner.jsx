import React from 'react'
import './banner.css'
const Banner=()=>{
    return (
      <div className='banner'>
        <div className="banner-content">
          <a href='/chardham'><p>Chardham Yatra Special Package</p></a>
        </div>
        <div className='banner-email'>
            <a href="mailto:info@mountainmavericks.in"><p><i className='fas fa-envelope'></i>info@mountainmavericks.in</p></a>
        </div>
      </div>
    )
  }

export default Banner;

