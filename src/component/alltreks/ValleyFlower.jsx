import React from 'react'
import {Trekinfo, Imptips} from '../../component'
import { ContainerBox } from '../trekinfo/Trekinfo'
import valley from '../../asset/valleyflower.jpg'
import '../trekinfo/trekinfo.css'
const ValleyFlower=()=>{
    const heading1 = "Day 1 Haridwar to Joshimath"
    const content1 = "Start your journey early from Haridwar to Joshimath, a picturesque town in Uttarakhand.The journey takes approximately 9-10 hours by road, so make sure to leave early to reachJoshimath by evening.On the way, you'll pass through beautiful landscapes, small villages, and winding roadsamidst the Himalayas.Upon arrival in Joshimath, check into a hotel and relax for the evening."

    const heading2 = "Day 2 Joshimath to Govindghat and Trek to Ghangaria"
    const content2 = "After breakfast, drive from Joshimath to Govindghat, which is the starting point of thetrek to Valley of Flowers.The drive takes about 1-2 hours.From Govindghat, begin your trek to Ghangaria, a base camp for Valley of Flowers andHemkund Sahib.The trek is around 13 kilometers long and takes approximately 5-6 hours, passing throughbeautiful forests and alongside the Pushpavati River.Reach Ghangaria by late afternoon or evening, and check into a guesthouse/hotel for anovernight stay"

    const heading3 = "Day 3 Explore Valley of Flowers"
    const content3 = "Have an early breakfast in Ghangaria.Begin your trek to the Valley of Flowers, which is around 3 kilometers from Ghangaria.Spend the day exploring the vibrant meadows filled with diverse flora, includingnumerous species of flowers, plants, and possibly some wildlife.Enjoy the serene beauty of the valley, take photographs, and soak in the tranquility ofnature.After exploring to your heart's content, trek back to Ghangaria by late afternoon.Relax and unwind in Ghangaria for the rest of the day."

    const heading4 = "Day 4 GHANGARIA TO HEMKUND SAHIB AND BACK TO GHANGARIA"
    const content4 = "Have an early breakfast and start for Sri Hemkund Sahib. Amidst snow-clad mountains and abeautiful lake alongside, this place is serene and spiritual. Brahmakamal and Blue Poppy aretwo rare species of flowers you will find here. Expect steep climbs at some places. Once there, soak in the beauty of the place as sip on the piping hot tea served at the Gurudwara.Visit Laxman Mandir next to the Gurudwara. Head back to Ghangria after lunch. Stay in acampsite."

    const heading5 = "Day 5 Ghangaria to Govindghat and Return to Haridwar"
    const content5 = "After breakfast, trek back to Ghangaria from Govindghat.From Govindghat, drive back to Haridwar.The journey from Govindghat to Haridwar takes approximately 9-10 hours.Reach Haridwar by late evening or night, concluding your memorable trip to the Valley ofFlowers"

    return (
      <div>
        <Trekinfo 
        img1={valley}
        alt="auli"
        text="Package of Haridwar, Govindghat , Ghangaria , Valley of Flowers 
        @ INR 12,500 per person duration 05 days.
        Trek Include - Hotel/Homestay/Camping Tent, Sightseeing, Transport, Breakfast, Lunch ,
        Dinner(Veg meal only) Basic first aid, Necessary permits.
        "
        heading='The Valley of Flowers trek is named after the stunningly beautiful valley it traverses, which is
        famously known for its vibrant floral diversity. Located in the Indian state of Uttarakhand
        Chamoli district , in the Himalayas, this trek takes visitors through a valley filled with a vast
        variety of alpine flowers, making it seem like a natural garden. The valley boasts an incredible
        array of flora, including many rare and endangered species.The valley is adorned with a wide
        variety of colorful flowers, including numerous species of orchids, poppies, primulas,
        marigold, daisies, and many others, creating a picturesque landscape. The sheer diversity and
        abundance of flowers give the valley its name.
        The name "Valley of Flowers" encapsulates the essence of this trekking route, highlighting its
        primary attraction—the breathtaking display of colorful flowers that carpet the valley during
        the blooming season, typically from June to September. This natural wonderland has been
        declared a UNESCO World Heritage Site due to its outstanding universal value in terms of
        biodiversity and scenic beauty. Consequently, the name "Valley of Flowers" perfectly
        captures the essence and allure of this trekking destination.
        Destination: Haridwar, Govindghat, Ghangaria, Valley of Flowers
        Duration: 5 days
        Distance : Approx 20 km trek
        Altitude:4,389 m
        Experiences: Trekking, hiking (Easy to moderate)'
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

export default ValleyFlower
