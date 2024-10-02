import React from 'react'
import {Trekinfo, Imptips} from '../../component'
import { ContainerBox } from '../trekinfo/Trekinfo'
import nagtibba from '../../asset/nagtibba.jpg'
import '../trekinfo/trekinfo.css'
const NagTiba=()=>{
    const heading1 = "Day 1 Dehradun to Pantwari Village"
    const content1 = "Morning departure from Dehradun to Pantwari Village Arrival at Pantwari Village, the starting point of the Nag Tibba trek.Trek commencement from Pantwari Village to Nag Tibba base camp.Enjoy picturesque views of the surrounding landscapes and Himalayan peaks.Set up camp at the base camp.Evening bonfire and dinner at the campsite.Overnight stay in tents."

    const heading2 = "Day 2  Nag Tibba Summit and Return to Pantwari Village"
    const content2 = "Early morning wake-up call and breakfast at the campsite.Begin the ascent towards Nag Tibba summit, the highest peak in the Nag Tibba range.En route, pass through dense forests, meadows, and rocky terrain. Reach the summit and soak in breathtaking panoramic views of the snow-capped Himalayan peaks. Spend some time exploring the summit and taking photographs.Descend back to the base camp.Pack up camp and trek back to Pantwari Village.Departure from Pantwari Village to Dehradun.Arrival in Dehradun by late evening."

    return (
      <div>
        <Trekinfo 
        img1={nagtibba}
        alt="auli"
        text="Package of Dehradun, Panthwari, Nag Tibba @ INR 5,500 per person duration 02 days.
        Trek Include - Hotel/Homestay/Camping Tent, Sightseeing, Transport, Breakfast, Lunch ,
        Dinner(Veg meal only) Basic first aid, Necessary permits.
        "
        heading='The Nag Tibba Trek is named after the Nag Tibba peak, which is the highest peak in the Nag
        Tibba range of the Lesser Himalayas in Uttarakhand, India. "Nag" means "snake" and "Tibba"
        means "hill" or "peak" in the local language. The name "Nag Tibba" possibly originates from
        the belief that the peak resembles the hood of a snake when viewed from certain angles.
        Additionally, the area surrounding the peak is believed to be inhabited by Nag Devta (Snake
        God) according to local folklore and mythology. Hence, the trek is named after this prominent
        peak in the region.
        Destination-Dehradun, Panthwari, Nag Tibba
        Altitude: 3.022 m
        For family and groups
        Experiences: Trekking – Easy to moderate
        GST Included- No Hidden or Extra Charge
        '
        />
        <div className="Trek_info-container">
        <div className='trekde_container' id='trekde'>
        <div className="trekde_container-row">
          <div className="trekde_container-col">
            <div className="trekde_container-content">
                <ContainerBox heading={heading1} content={content1}/>
            </div>
          </div>

          <div className="trekde_container-col">
            <div className="trekde_container-content">
                <ContainerBox heading={heading2} content={content2}/>
            </div>
          </div>

        </div>
      </div>
    </div>
          <Imptips/>
    </div>
        
    )
  
}

export default NagTiba
