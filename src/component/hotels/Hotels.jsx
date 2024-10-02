import React, { useState } from 'react';
import './hotels.css';
import Modal from 'react-modal';
import img1 from '../../asset/camp1.jpg'
import img2 from '../../asset/camp2.jpg'
import img3 from '../../asset/camp3.jpg'
import img4 from '../../asset/camp4.jpg'
import img5 from '../../asset/camp5.jpg'
import img6 from '../../asset/camp6.jpg'
import img7 from '../../asset/camp7.jpg'
import hr from '../../asset/hr.jpg'
import hr1 from '../../asset/hr-reception.jpg'
import hr2 from '../../asset/hr-hall.jpg'
import hr3 from '../../asset/hr-dining.jpg'
import hr4 from '../../asset/hr-room.jpg'

const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 5' },
  { src: img7, alt: 'Image 5' },
];

const images2 = [
  { src: hr, alt: 'Image 1' },
  { src: hr1, alt: 'Image 2' },
  { src: hr2, alt: 'Image 2' },
  { src: hr3, alt: 'Image 2' },
  { src: hr4, alt: 'Image 2' },

];

function Hotels() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  return (
    <div className="Hotels">
      <div className="Hotels-heading">
        <h1>Our Hotels And CampSite</h1>
      </div>
      <div className='Hotels-Subheading'>
      <h1>Chopta CampSite</h1>
      <div className="Hotels-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="Hotels__item"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      </div>
      <div className='Hotels-Subheading'>
      <h1>Hotel Rudraksh</h1>
      <div className="Hotels-images">
        {images2.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="Hotels__item"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close-btn" onClick={closeModal}>Close</button>
        {selectedImageIndex !== null && (
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].alt}
            className="modal-image"
          />
        )}
      </Modal>
    </div>
  );
}

export default Hotels;
