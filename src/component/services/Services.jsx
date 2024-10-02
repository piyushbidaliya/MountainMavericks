import React from "react";
import './services.css';
import sample2 from '../../asset/auli.jpeg';
import img1 from '../../asset/chandrashilla2.jpeg';
import img2 from '../../asset/kedarnath.jpeg';
import img3 from '../../asset/george.jpeg';
import banner from '../../asset/LOGO.jpg'
import nagtibba from '../../asset/nagtibba.jpg'
import valley from '../../asset/valleyflower.jpg'
import {Trek} from "../../component";



const Services = () =>{
    return(
      <div className="app__Services section__padding" id="bl">
        <div className="app__Services-header">
            <img src={banner} alt="info about trek" loading="lazy"/>
          <h1>Trek Related All Information Present Here</h1>
        </div>
        <div className="app__Services-container">
          <div className="app__Services-container_groupA">
            <Trek imgurl={sample2} imgurl1={img1} 
             Title="Gorsan Bugyal Trek Auli" Title1="Chandrashila Tungnath Chopta Trek"
             aboutTitle="Package of Haridwar, Rishikesh & Auli @15000/-(per person)
             duration six days
             Package of Auli only@8000/-(per person) duration three days
             Trek include-Hotel, Transport, Breakfast, Lunch & Dinner (Veg 
             only), Basic First Aid and Medical Kit"
              aboutTitle1="Package of Rishikesh, Deoriatal, Chopta, Tungnath temple, Chandrashila @ INR 12,000 per
              person duration 06 days.
              Trek Include - Hotel/Homestay/Camping Tent, Sightseeing, Transport, Breakfast, Lunch ,
              Dinner(Veg meal only) Basic first aid, Necessary permits"
                link='/auli'
                link2='/chopta'
                     />

            <Trek imgurl={img2} imgurl1={img3}  
            Title="Kedarkantha Trek Uttarkashi" Title1="George Everest Bhadraj Trek"
            aboutTitle=""
               aboutTitle1=""
               link='/kedarkan'
               link2='#'
               />

            <Trek imgurl={valley} imgurl1={nagtibba}  
            Title="Valley Of Flowers" Title1="Nag Tibba Trek"
            aboutTitle=""
               aboutTitle1=""
               link='/valley'
               link2='/nagtiba'
               />
        </div>
        </div>
      </div>
    )
}

export default Services;

