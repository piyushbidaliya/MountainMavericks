import React from 'react'
import {Trekinfo, Imptips} from '../../component'
import { ContainerBox } from '../trekinfo/Trekinfo'
import auli from '../../asset/auli.jpg'
import '../trekinfo/trekinfo.css'
const Auli=()=>{
    const heading1 = "Day 1 HARIDWAR"
    const content1 = "The first stop on the trek trip from Auli to Gorson (Gurson) Bugyal Trek is Haridwar, where a feeling of spirituality will embrace you. Explore the city before you travel to your next destination, Rishikesh and stay the night."

    const heading2 = "Day 2 RISHIKESH TO JOSHIMATH"
    const content2 = "Indulge in an early breakfast and prepare to drive to Joshimath. On the way, you will pass through three of the Panchprayags, Devprayag, Rudraprayag and Karnaprayag. At each of these holy destinations, five different rivers merge into River Alaknanda to ultimately form River Ganga.Enjoy your evening by taking a stroll of the beautiful vistas of Joshimath, which is the gateway to the magnificent Valley of Flowers and Auli.By road: The distance to be covered is around 245 km and it should take you approximately 8 hours. The journey is smooth and beautiful, snaking through the heart of Uttarakhand."

    const heading3 = "Day 3 JOSHIMATH TO AULI"
    const content3 = "Transfer to Auli by taking a ride on the longest and highest ropeway in India. The Auli Ropeway, a man-made marvel covers a distance of 3.96 km. The journey, a once in a life-time experience, offers a dazzling view of the ice-capped mountains of the Himalayas. Some of the peaks that you can spot, include Mt Nanda Devi, Dunagiri (or Dronagiri), Neelkanth, Hathi Parbat, Gori Parbat, Nar Parvat and Kamet.Savour a warm meal enjoying the beautiful starry skies in Auli"

    const heading4 = "Day 4 AULI TO GORSON BUGYAL"
    const content4 = "Have a hearty breakfast before packing your bags to explore the exalting sights offered by Auli. Continue your adventure with trekking uphill to Gorson Bugyal, at a distance of around 6 km. A remarkable trekking route that passes through dense alpine forests of oak and deodar trees, will take you to the rolling alpine meadow of Gorson Bugyal at an altitude of 3,049 m. During your trek, do not miss out the spellbinding sights of the verdant vistas silhouetted against the backdrop of the high mountains of the mighty Himalayas romancing with the clouds. After the day’s trek, rest in Auli at night and the next day, spend exploring the natural beauty of the premier skiing destination. In you are there in the skiing season (January to March), you can enjoy a ride down the snowy slopes."

    const heading5 = "Day 5 Joshimath "
    const content5 = "Visit some of the oldest temple nearby Joshimath Narsingh Temple, Bhavishya badri temple & Shri kalpeshwar Mahadev"

    const heading6 = "Day 6 AULI TO RISHIKESH"
    const content6 = "After two eventful days in Auli, make your way back to the spiritual town of Joshimath , relishing the stunning views of the majestic Himalayan ranges. From Joshimath avail a transport to arrive at Rishikesh. Take in the sights and sounds of Devbhoomi on this eight-hour-drive. SavourPack your bags and tie your shoelaces and head to the Rishikesh or Haridwar Railway Station where you can board a Train to Delhi. Or, head to Jolly Grant airport for a flight.By Road: Drive down to Delhi, at a distance of around 250 km, which can be covered in approximately 5 hours.By Rail: Rishikesh is connected with the rest of the country by rail.By Air: Rishikesh is around 30 km from Jolly Grant Airport."

    return (
      <div>
        <Trekinfo 
        img1={auli}
        alt="auli"
        text="Package of Haridwar, Rishikesh & Auli @15000/-(per person)
        duration six days
        Package of Auli only@8000/-(per person) duration three days
        Trek include-Hotel, Transport, Breakfast, Lunch & Dinner (Veg 
        only), Basic First Aid and Medical Kit."
        heading='Destination: Haridwar, Rishikesh, Auli
        Experience: Trekking (Easy to Moderate; Families can also participate)
        Maximum Altitude: 3,519 m Approx.
        Ideal time: April to June and October to February
        Nearest airport: Jolly Grant, Dehradun
        Nearest railway/bus stand station: Rishikesh, Haridwar
        *GST Included – No Hidden or Extra Charges'
        />
        <div className="Trek_info-container">
        <div className='trekde_container' id='trekde'>
        <div className="trekde_container-row">
          <div className="trekde_container-col">
            <div className="trekde_container-content">
                <ContainerBox heading={heading1} content={content1}/>

                <ContainerBox heading={heading2} content={content2}/>

                <ContainerBox heading={heading3} content={content3}/>
            </div>
          </div>

          <div className="trekde_container-col">
            <div className="trekde_container-content">
                <ContainerBox heading={heading4} content={content4}/>

                <ContainerBox heading={heading5} content={content5}/>

                <ContainerBox heading={heading6} content={content6}/>
            </div>
          </div>

        </div>
      </div>
    </div>
          <Imptips/>
    </div>
        
    )
  
}

export default Auli
