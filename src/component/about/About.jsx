import React from "react";
import './about.css';
import image from '../../asset/LOGO.jpg'
import img from '../../asset/hill station.jpg'



const About = () => {
  return (
    <div className="about">
      <div className="header">
        <img src={image} alt="About Us" className="img-fluid" loading="lazy"/>
      </div>
      <div className="about-content">
        <h2><span>Mountain Mavericks Trekking Soul</span> represent a group, community, or mindset characterized 
            by an adventurous and independent spirit, particularly focused on the soul-enriching experiences
             of trekking in mountainous landscapes. It encapsulates a love for exploration, a non-traditional
              approach to trekking, and a deep connection to the spiritual aspects of the journey.</h2>
        <div className="about-content-part">
            <div className="about-content-part1">
            <p><span>Welcome to Mountain Mavericks Trekking Soul</span></p>
            <p> At <span>Mountain Mavericks Trekking Soul</span> we believe that the journey is 
                    just as important as the destination. Our passion for adventure, exploration,
                     and the great outdoors has inspired us to create a platform dedicated to trekking
                      enthusiasts and nature lovers.</p>
            </div>
            <div className="about-content-part1">
                <p><span>Our Story</span></p>
                <p><span>Mountain Mavericks Trekking Soul</span> is a group of avid trekkers who found 
                solace, joy, and a deep connection with nature through the trails less traveled. We embarked on this
                 journey to share our experiences, insights, and a wealth of information about trekking destinations.</p>
            </div>
        </div>
      </div>



        <div className="about_grid-container">
            <h1><span>Mountain Mavericks Trekking Soul</span><br/> What Sets Us Apart</h1>
        <div className="about_grid">
            <div className="about_grid-content">
                <img src={img} alt="hill station" loading="lazy"/>
                <h2>Expertise</h2>
                <p>Our team consists of seasoned trekkers and outdoor enthusiasts who have traversed diverse terrains.
                     We bring firsthand knowledge and expertise to help you plan and execute memorable trekking adventures.
                     </p>
            </div>
            <div className="about_grid-content">
                <img src={img} alt="hill station" loading="lazy"/>
                <h2>Comprehensive Guides</h2>
                <p>From beginner-friendly trails to challenging expeditions, we provide comprehensive guides for a wide 
                    range of trekking destinations. Our detailed itineraries, packing lists, and tips ensure that you are
                     well-prepared for your trek.</p>

            </div>
            <div className="about_grid-content">
                <img src={img} alt="hill station" loading="lazy"/>
                <h2>Community Focus</h2>
                <p>Mountain Mavericks trekking soul is more than just a source of information; it's a community. Join our
                     forums to connect with like-minded individuals, share your experiences, and seek advice from fellow 
                     trekkers.</p>

            </div>
            <div className="about_grid-content">
                <img src={img} alt="hill station" loading="lazy"/>
                <h2>Environmentally Conscious</h2>
                <p>We are committed to responsible trekking. Our guides include Leave No Trace principles and 
                    promote eco-friendly practices to ensure that our beautiful natural landscapes are preserved for
                     future generations.
                </p>

            </div>
        </div>
        </div>


        <div className="about_intro-card">
              <div className="about_intro-content">
                <h1>Our Mission</h1>
                <p>At <span>Mountain Mavericks Trekking Soul</span> our mission is to inspire and empower individuals
                 to embrace the spirit of adventure, explore the wonders of the great outdoors, and foster a deeper 
                 appreciation for the environment. We aim to be your go-to resource for all things trekking, from 
                 planning your first trek to discovering hidden gems off the beaten path.Whether you're a seasoned 
                 trekker or a novice explorer, join us in celebrating the thrill of the trek and the beauty of nature. 
                 Let <span>Mountain Mavericks Trekking Soul</span> be your companion on your next great adventure.Thank you for being
                  part of our trekking community!</p>
                </div>
            </div>

      </div>
  )
}

export default About;
