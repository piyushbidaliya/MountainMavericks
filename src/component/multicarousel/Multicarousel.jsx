import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'
import img1 from '../../asset/auli.jpeg';
import img2 from '../../asset/chandrashilla2.jpeg';
import img4 from '../../asset/kedarnath.jpeg';
import img5 from '../../asset/valleyflower.jpg';
import img6 from '../../asset/nagtibba.jpg';
import './multicarousel.css';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Multicarousel = () => {
  return (
    <div className='multicarousel_container'>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
      }}

      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
    >
    <SwiperSlide>
    <a href='/auli'><img src={img1} alt="gorsan bugyal trek" className="img-fluid" loading="lazy"/></a>
    <div className="multi-container">
        <h2 className="Title1">Gorsan Bugyal Trek Auli</h2>
        <p className='Title2'>Located Around 3km From Auli</p>
        <p className="subTitle1"><a href='/auli'>View Details</a></p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <a href='/chopta'><img src={img2} alt='Chandrashila Tungnath Chopta Trek' className="img-fluid" loading="lazy"/></a>
        <div className="multi-container">
        <h2 className="Title1">Chandrashila Tungnath Chopta Trek</h2>
        <p className='Title2'>Popularly referred to as the 'mini Switzerland' of Uttarakhand, 
        Chopta (at an approximate altitude of 2,608 m) is a slice of paradise tucked away in the Garhwal Himalayas</p>
        <p className="subTitle1"><a href='/chopta'>View Details</a></p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <a href='/valley'><img src={img5} alt='Valley Of Flowers' className="img-fluid" loading="lazy"/></a>
    <div className="multi-container">
        <h2 className="Title1">Valley Of Flowers</h2>
        <p className='Title2'></p>
        <p className="subTitle1"><a href='/valley'>View Details</a></p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <a href='/nagtiba'><img src={img6} alt='Nag Tibba' className="img-fluid" loading="lazy"/></a>
    <div className="multi-container">
        <h2 className="Title1">Nag Tibba Trek</h2>
        <p className='Title2'></p>
        <p className="subTitle1"><a href='/nagtiba'>View Details</a></p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <a href='/kedarkan'><img src={img4} alt='Kedarkantha Trek Uttarkashi' className="img-fluid" loading="lazy"/></a>
    <div className="multi-container">
        <h2 className="Title1">Kedarkantha Trek Uttarkashi</h2>
        <p className='Title2'>The kedarkantha trek is a popular winter trekking destination in the indian state of uttarakhand,
         in the garhwal region of the himalayas. </p>
        <p className="subTitle1"><a href='/kedarkan'>View Details</a></p>
    </div>
    </SwiperSlide>


      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination">

        </div>
      </div>

  </Swiper>
  </div>

  )}

  export default Multicarousel;