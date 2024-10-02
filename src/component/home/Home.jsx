import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import bg from '../../asset/homebg.jpg'
import logo from '../../asset/logo4.png'
import {Multicarousel, Block, Join} from '../../component'



const Home = ()=> {
 
  
    return (
      <div className='home_containerbg' id='home'>
        <div className="home_container">
          <img src={bg} alt='mountain' loading='lazy'/>
          <div className="home_container-title">
            <div className="home_container-title-img">
            <img src={logo} alt="logo" />
            </div>
            <h1>Connect People With The Raw Beauty Of Nature And Spirituality</h1>
          
          <div className="home_container-title-anim"> 
          <span style={{display:'inline-block'}}>
          <Typewriter
              options={{
                strings: ['Explore The Uttarakhand', 'Discover Possibilities Of Travelling', 'Enjoy Nature'],
                autoStart: true,
                loop: true,
              }}
            /> 
            </span>
          </div>
          <div className='home_container-title-btn'>
              <a href='/contact'><p>Book Now</p></a>
          </div>
        </div>
        </div>

            <div className="home_intro-container">
                <p>Welcome to <span>Mountain Mavericks Trekking Soul</span>, where the love for trekking meets unparalleled 
                    adventure! Our journey began with a shared passion for exploring the great outdoors and a 
                    deep-seated desire to share the thrill of trekking with fellow adventure enthusiasts.</p>
                </div>

            <div className="home_intro-card">
              <div className="home_intro-content">
                <p> <span>Mountain Mavericks Trekking Soul</span> started as a dream shared among avid trekkers who felt the
                     call of the wild. Our team has grown, but our commitment to providing unforgettable trekking
                      experiences remains unwavering. Each member of our team brings a unique set of skills and a 
                      shared love for nature, making <span>Mountain Mavericks trekking soul</span> family dedicated to creating 
                      memories that last a lifetime.</p>
                </div>
            </div>

            <div className='home_multicarousel'>
                <div className="home_multicarousel-heading">
                    <h1>Treks We Offer</h1>
                </div>
                <Multicarousel/>
            </div>

            <div className='home_grid'>
                <div className="home_grid-heading">
                    <h1>Why Choose <span><p>Mountain Mavericks Trekking Soul</p></span></h1>
                </div>
                <div className="home_blockgrid-container">
                <p>At <span>Mountain Mavericks Trekking Soul</span>, we believe in more than just reaching summits.
                     Our mission is to connect people with the raw beauty of nature and spirituality, 
                     fostering a deep appreciation for the outdoors. We are committed to responsible 
                     and sustainable trekking, leaving no trace behind while ensuring the preservation
                      of the environment for generations to come.</p>
                </div>
                <Block/>
            </div>

            <div className="home_joinus">
                <Join/>
            </div>

        </div>
    )
  }

export default Home

