import React from 'react'
import {Trekinfo, Imptips} from '..'
import { ContainerBox } from '../trekinfo/Trekinfo'
import kedarkan from '../../asset/kedarkantha.jpg'
import '../trekinfo/trekinfo.css'
const Kedarkantha=()=>{
    const heading1 = "Day 1 Dehradun to Sankri"
    const content1 = "Start your journey from Dehradun early in the morning. Drive to Sankri, which usually takes around 8-9 hours. Sankri is the base camp for the Kedarkantha trek. It's a picturesque village surrounded by pine forests and snowy pea "

    const heading2 = "Day 2 Sankri to Juda Ka Talab"
    const content2 = "Begin your trek from Sankri to Juda Ka Talab. The trekking distance is around 4-5 kilometers and takes approximately 4-5 hours. Juda Ka Talab is a beautiful lake surrounded by dense forests. It serves as the campsite for the night. "

    const heading3 = "Day 3 Juda Ka Talab to Kedarkantha Base"
    const content3 = "Trek from Juda Ka Talab to Kedarkantha Base. The distance is around 3-4 kilometers and takes about 3-4 hours. Kedarkantha Base offers stunning views of snow-clad peaks and is your campsite for the night. "

    const heading4 = "Day 4 Kedarkantha Summit and back to Hargaon"
    const content4 = "Start early in the morning to reach the Kedarkantha summit. The trek to the summit is challenging but rewarding, offering panoramic views of the Himalayas. After spending some time at the summit, trek back to Kedarkantha Base. From there, descend to Hargaon, which is another campsite for the night. The total trekking distance for the day is approximately 6-7 kilometers and takes around 7-8 hours. "

    const heading5 = "Day 5 Hargaon to Sankri and back to Dehradun"
    const content5 = "Descend from Hargaon to Sankri. The trekking distance is around 5-6 kilometers and takes about 4-5 hours. From Sankri, drive back to Dehradun, completing your Kedarkantha trek. Depending on the timing, you might reach Dehradun by evening or night"

    return (
      <div>
        <Trekinfo 
        img1={kedarkan}
        alt="auli"
        text="Package of Sankri, Juda Lake, Kedarkantha @ INR 12,500 per person duration 05 days.
        Trek Include - Hotel/Homestay/Camping Tent, Sightseeing, Transport, Breakfast, Lunch ,
        Dinner(Veg meal only) Basic first aid, Necessary permits.
        Destinations: Sankri, Juda Lake, Kedarkantha
        Distance /Altitude: Trek of approx 20 km/ 3,800 m
        Duration: 5 days
        Experiences: Trekking, hiking (easy to moderate)"
        heading="The Kedarkantha trek is named after the Kedarkantha Peak, which is located in the Garhwal
        region of the Indian state of Uttarakhand. The peak is part of the Himalayan mountain range
        and stands at an elevation of approximately 12,500 feet (3,800 meters) above sea level. The
        trek to Kedarkantha Peak is popular among adventurers and trekkers due to its stunning
        natural beauty, including dense pine forests, meadows adorned with wildflowers, and
        panoramic views of the surrounding snow-capped peaks. The name Kedarkantha likely
        derives from the combination of Kedar, which is a name of Lord Shiva, and Kantha, which
        means neck or peak in Sanskrit, referring to the peak's resemblance to Lord Shiva's neck."
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

            </div>
          </div>

        </div>
      </div>
    </div>
          <Imptips/>
    </div>
        
    )
  
}

export default Kedarkantha
