import React from 'react'
import { useState } from "react";


const images = [
    "https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM" ,

    
  ];

  const Carusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    return (
      <div className="container">
        <div className="carousel slide">
          <div className="carousel-inner">
        
            
                <img src="https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM"  className="d-flex w-25" />
          
              </div>
          
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    
    );
  };
  
  export default Carusel;