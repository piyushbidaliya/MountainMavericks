import React from "react";
import './footer.css';

const Footer = () =>{
    return(
<div className="footer">
  <div className="container">
  
    <div className="row">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">about us</a></li>
          <li><a href="/ouroffer">Treks</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/hotels">Hotels</a></li>
        </ul>
        <h4>Treks</h4>
        <ul>
        <li><a href="/chardham">Chardham Yatra</a></li>
          <li><a href="/auli">Auli</a></li>
          <li><a href="/chopta">Chopta-Tungnath-Chandrashilla</a></li>
          <li><a href="/valley">Valley Of Flowers</a></li>
          <li><a href="/nagtiba">Nag Tibba Trek</a></li>
          <li><a href="/kedarkan">Kedarkantha Trek</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li><a href="/contact">contact us</a></li>
          <li><i className="fas fa-phone-alt"></i> <span> 8800867279</span></li>
          <li><a href="mailto:info@mountainmavericks.in"><i className="fas fa-envelope"></i> <span> info@mountainmavericks.in</span></a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 id="follow">join us</h4>
        <div className="social-links">
          <a href="https://www.facebook.com/people/Mountain-Mavericks-Trekking-Soul/61555810337252/?sfnsn=wiwspwa&mibextid=RUbZ1f" target='_blank' rel='noopener noreferrer' >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/mountainsmavericks/" target='_blank' rel='noopener noreferrer' ><i className="fab fa-instagram"></i></a>
          <a href="#wh" target='_blank' rel='noopener noreferrer' ><i className="fab fa-youtube"></i></a>
          <a href="#wh" target='_blank' rel='noopener noreferrer' ><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Address/Office</h4>
        <ul>
          <li>Registered Address</li>
          <p>Rawat Arts, Majri Mafi, <br/> Mohkampur, Dehradun, Uttarakhand <br/> Pin 248001 </p>
          <li>Branch Office</li>
          <p>Hotel Rudraksh <br/> Indira Gandhi Marg, Saharanpur Road Opposite, Niranjanpur Sabzi Mandi, Dehradun, Uttarakhand <br/> Pin 248001 </p>
        </ul>
      </div>
    </div>

  </div>
  </div> 
    )
}

export default Footer;


/*
<div className="footer-map">
<iframe title="Unique Title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.726064396137!2d78.0103202!3d30.301859199999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b27e28b0913%3A0xfcc37ab677707b97!2sCapital%20O%20Hotel%20Rudraksh!5e0!3m2!1sen!2sin!4v1707989644455!5m2!1sen!2sin"
  width="100%"
  height="auto"
  allowFullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
     </iframe>
</div>
*/