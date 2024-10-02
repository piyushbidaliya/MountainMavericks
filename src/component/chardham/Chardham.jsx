import React from 'react'
import {Trekinfo, Carousel, Imptips} from '../../component'
import { ContainerBox } from '../trekinfo/Trekinfo'
import img1 from '../../asset/kedarnath.jpg'
import img2 from '../../asset/badrinath.jpg'
import img3 from '../../asset/yamnotri.jpg'
import img4 from '../../asset/gangotri.jpg'
import img5 from '../../asset/dharidevi.jpg'
import '../trekinfo/trekinfo.css'

const Chardham=()=>{
    const heading1 = "Day 1(Pick-up Location) Dehradun, Rishikesh or Haridwar to Barkot (Yamunotri)"
    const content1 = "After an early breakfast, drive to Barkot, the base for your journey to Yamunotri. En route, visit the picturesque town of Barkot and enjoy the scenic beauty of theHimalayas.Overnight stay in Barkot."

    const heading2 = "Day 2 Barkot to Yamunotri and Back"
    const content2 = "Begin your day with a trek or pony ride to Yamunotri, the source of the Yamuna River.Visit the sacred temple dedicated to Goddess Yamuna and seek her blessingsAfter the darshan, return to Barkot for an overnight stay."

    const heading4 = "Day 4 Uttarkashi to Gangotri and Back"
    const content4 = "Today, embark on a scenic drive to Gangotri, the origin of the holy River Ganges.Visit the Gangotri Temple and offer prayers to Goddess Ganga.Later, return to Uttarkashi for an overnight stay."

    const heading3 = "Day 3 Barkot to Uttarkashi (Gangotri)"
    const content3 = "After breakfast, proceed to Uttarkashi, the next destination on your Char Dham Yatra. En route, visit the Vishwanath Temple and other attractions in Uttarkashi.Overnight stay in Uttarkashi."

    const heading5 = "Day 5 Uttarkashi to Guptkashi (Kedarnath) "
    const content5 = "After breakfast, depart for Guptkashi, the gateway to Kedarnath. Upon arrival, check-in to your hotel and relax.Spend the rest of the day at leisure, preparing for your visit to Kedarnath."

    const heading6 = "Day 6 Guptkashi to Kedarnath and Back"
    const content6 = "Early morning, proceed to Gaurikund, the starting point of the trek to Kedarnath. Embark on a picturesque trek or opt for a helicopter ride to reach Kedarnath.Visit the sacred Kedarnath Temple, dedicated to Lord Shiva.After the darshan, return to Guptkashi for an overnight stay."

    const heading7 = "Day 7 Guptkashi to Badrinath"
    const content7 = "After breakfast, drive to Badrinath, the final destination of your Char Dham Yatra. En route, visit the confluence of Alaknanda and Mandakini Rivers at Rudraprayag.Upon arrival in Badrinath, check-in to your hotel and relax.In the evening, visit the Badrinath Temple and take part in the evening Aarti."

    const heading8 = "Day 8 (Drop Location) Badrinath to Dehradun, Rishikesh or Haridwar"
    const content8 = "After breakfast, bid farewell to Badrinath and embark on your journey back to Haridwar.En route, visit the sacred Mana Village, Vyas Cave, and other attractions.Arrive in Haridwar and check-in to your hotel for an overnight stay."


    const images = [
      { src: img1, alt: 'kedarnath' },
      { src: img2, alt: 'badrinath' },
      { src: img3, alt: 'yamnotri' },
      { src: img4, alt: 'gangotri' },
      { src: img5, alt: 'dharidevi' },
    ];

    return (
      <div>
        <Carousel
          images={images} text='Package of Yamunotri, Gangotri, Kedarnath, Badrinath 
          @30000/-(per person) duration 8 days
          Hotel, Transport, Breakfast, lunch & Dinner (Veg only), Basic First Aid and Medical Kit.
          Experienced Trek leaders and support staff.
          Accommodation on a triple sharing or Quad sharing basis.'
        />
        <Trekinfo 

        heading='Embark on a divine journey to the sacred Char Dhams nestled amidst the majestic Himalayas.
        This spiritually enriching pilgrimage will take you through four revered Hindu shrines:
        Yamunotri, Gangotri, Kedarnath, and Badrinath. Each destination holds profound significance
        in Hindu mythology and offers a unique spiritual experience. Our meticulously crafted Char
        Dham Yatra Package ensures a seamless and soul-stirring journey, allowing you to immerse
        yourself in devotion while surrounded by breathtaking natural beauty.
        '
        />
        <div className="Trek_info-container">
        <div className='trekde_container' id='trekde'>
        <div className="trekde_container-row">
          <div className="trekde_container-col">
            <div className="trekde_container-content">
                <ContainerBox heading={heading1} content={content1}/>
                <ContainerBox heading={heading2} content={content2}/>

                <ContainerBox heading={heading3} content={content3}/>


                <ContainerBox heading={heading4} content={content4}/>



            </div>
          </div>

          <div className="trekde_container-col">
            <div className="trekde_container-content">
            <ContainerBox heading={heading5} content={content5}/>

            <ContainerBox heading={heading6} content={content6}/>

            <ContainerBox heading={heading7} content={content7}/>

            <ContainerBox heading={heading8} content={content8}/>
            </div>
          </div>

        </div>
      </div>
    </div>
        <Imptips/>

    </div>
        
    )
  
}

export default Chardham
