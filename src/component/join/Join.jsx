import React from 'react'
import './join.css'
import img1 from '../../asset/hill station2.png'

const Join=()=> {
    return (
      <div className='join_maincontainer'>
            <div className="join_container">
            <div className="join_container-card">
              <div className="join_card-image">
              <img src={img1} alt="btt" loading="lazy"/>
              </div>
            <div className="join_container-heading">
              <h1>Join Us In The Adventure</h1>
              <p className="join-content">Whether you're a seasoned trekker or a novice explorer, 
              <span> Mountain Mavericks Trekking Soul</span> invites you to join us in the adventure of a lifetime. 
              Discover the beauty of untouched landscapes, forge new friendships, and create memories that 
              will echo through the valleys and peaks.</p>
              <p className="join-content">Embark on a journey with <span>Mountain Mavericks Trekking Soul</span> and
               let the mountains become your playground, the trails your story, and the adventure your legacy.</p>
              <a href='#follow'><p className="join-content-btn">Join Us</p></a>
            </div>
          </div>
          </div>
      </div>
    )
  }


export default Join
