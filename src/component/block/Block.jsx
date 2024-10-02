import React from 'react'
import './block.css'
import img1 from '../../asset/guide.jpg'
import img2 from '../../asset/hill station.jpg'
import img3 from '../../asset/firstaid.jpg'
import img4 from '../../asset/cleaning.jpg'

const Block =()=>{

    return (
      <div className='block'>
        <div className="block_grid">
            <div className="block_grid-content">
                <img src={img1} alt="hill station" loading="lazy"/>
                <h2>Passionate Experts</h2>
                <p>Our guides are not just professionals;
                     they're passionate individuals with extensive knowledge 
                     of the trails and a love for sharing their expertise.</p>
                <a href='/about'><p>Know Us</p></a>
            </div>
            <div className="block_grid-content">
                <img src={img2} alt="hill station" loading="lazy"/>
                <h2>Unforgettable Experiences</h2>
                <p>We craft experiences that go beyond the ordinary,
                     offering treks that challenge,
                     inspire, and immerse you in the breathtaking landscapes.</p>
                <a href='/about'><p>Know Us</p></a>

            </div>
            <div className="block_grid-content">
                <img src={img3} alt="hill station" loading="lazy"/>
                <h2>Safety First</h2>
                <p>Your safety is our top priority. Our experienced guides are trained in wilderness first aid,
                     and we adhere to the highest safety standards to ensure a secure trekking experience.</p>
                <a href='/about'><p>Know Us</p></a>

            </div>
            <div className="block_grid-content">
                <img src={img4} alt="hill station" loading="lazy"/>
                <h2>Sustainability</h2>
                <p>We are committed to minimizing our environmental impact.
                     From eco-friendly practices to supporting local communities, we believe in trekking responsibly.
                </p>
                <a href='/about'><p>Know Us</p></a>

            </div>
        </div>
        
      </div>
    )
}

export default Block
