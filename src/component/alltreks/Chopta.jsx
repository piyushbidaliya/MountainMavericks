import React from 'react'
import {Trekinfo, Imptips, Carousel} from '../../component'
import { ContainerBox } from '../trekinfo/Trekinfo'
import '../trekinfo/trekinfo.css'
import img1 from '../../asset/deorital.jpg'
import img2 from '../../asset/chopta.jpg'
import img3 from '../../asset/tungnath.jpg'
import img4 from '../../asset/chandrashilla.jpg'
const Chopta=()=>{
    const heading1 = "Day 1: Rishikesh to Sari Village"
    const content1 = "Morning: Depart from Rishikesh early in the morning.Afternoon: Arrive at Sari Village (approx. 7-8 hours drive).Evening: Rest, acclimatize, and enjoy the serene surroundings of Sari Village."

    const heading2 = "Day 2: Sari Village to Deoriatal"
    const content2 = "Morning: Trek from Sari Village to Deoriatal (approx. 2.5 km, 1-2 hours).Afternoon: Reach Deoriatal and set up camp.Evening: Explore Deoriatal Lake and its surroundings, enjoy sunset views."

    const heading3 = "Day 3: Deoriatal to Chopta"
    const content3 = "Morning: Trek from Deoriatal to Chopta (approx. 14 km, 5-6 hours).Afternoon: Arrive at Chopta, a picturesque meadow, and set up camp.Evening: Relax and enjoy the tranquility of the Himalayas."

    const heading4 = "Day 4: Chopta to Tungnath Temple"
    const content4 = "Morning: Trek from Chopta to Tungnath Temple (approx. 3.5 km, 2-3 hours).Afternoon: Visit Tungnath, the highest Shiva temple in the world.Evening: Explore the serene surroundings and camp near Tungnath."

    const heading5 = "Day 5: Tungnath Temple to Chandrashila Summit and back to Chopta"
    const content5 = "Morning: Trek from Tungnath to Chandrashila Summit (approx. 1.5 km, 1 hour).Afternoon: Enjoy the breathtaking panoramic views from Chandrashila Peak.Evening: Descend back to Chopta and camp overnight."

    const heading6 = "Day 6: Chopta to Rishikesh"
    const content6 = "Morning: Depart from Chopta and drive back to Rishikesh.Afternoon: Arrive in Rishikesh and conclude the trek."

    const images = [
      { src: img1, alt: 'Image 1' },
      { src: img2, alt: 'Image 2' },
      { src: img3, alt: 'Image 3' },
      { src: img4, alt: 'Image 4' },
    ];

    return (
      <div>
        <Carousel
          images={images} text='Package of Rishikesh, Deoriatal, Chopta, Tungnath temple, Chandrashila @ INR 12,000 per
          person duration 06 days.
          Trek Include - Hotel/Homestay/Camping Tent, Sightseeing, Transport, Breakfast, Lunch ,
          Dinner(Veg meal only) Basic first aid, Necessary permits'
        />
        <Trekinfo 
        heading="The Deoriatal-Chopta-Tungnath-Chandrashila Trek is named after the four main destinations
        along the trek route
        Deoria Tal is a beautiful lake located near the village of Sari in the Rudraprayag district of
        Uttarakhand, India. It is surrounded by lush greenery and offers stunning reflections of the
        Chaukhamba peaks in its crystal-clear waters.
        Chopta: Chopta is a small region in the Rudraprayag district of Uttarakhand, India, which
        serves as the base camp for this trek. It is also known as the Mini Switzerland of India due to
        its picturesque meadows and stunning natural beauty.
        Tungnath: Tungnath is a sacred Hindu temple dedicated to Lord Shiva and is located at an
        altitude of about 3,680 meters (12,073 feet) above sea level. It is the highest Shiva temple in
        the world and one of the Panch Kedar temples in Uttarakhand. The Tungnath temple is a
        significant pilgrimage site and an essential stop along the Chopta-Tungnath-Chandrashila
        Trek.
        Chandrashila: Chandrashila is the summit point of the trek, located at an altitude of about
        4,000 meters (13,123 feet) above sea level. It offers breathtaking panoramic views of the
        surrounding Himalayan peaks, including Nanda Devi, Trishul, Chaukhamba, and others. The
        word Chandrashila translates to Moon Rock in Hindi, and it is said that this is the place
        where Lord Rama meditated after defeating the demon king Ravana in the Hindu epic
        Ramayana.
        Combining these four destinations, the trek is known as the Chopta-Tungnath-Chandrashila Trek. It's a
        popular trekking route in Uttarakhand, offering not only religious significance but also stunning natural
        beauty and breathtaking views of the Himalayas.
        The trek route from Deoria Tal to Chopta, Tungnath, and Chandrashila offers a diverse range
        of experiences, from serene lakeside camping to steep ascents through dense forests and
        alpine meadows, culminating in panoramic vistas from the summit of Chandrashila.
        "

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

export default Chopta
