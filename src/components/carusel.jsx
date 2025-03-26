import React, { useState } from 'react';

const Carusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url: "https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM",
      aspectRatio: 1 // 1:1 (cuadrada)
    }
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const styles = {
    container: {
      position: 'relative',
      width: '250px',
      height: '250px',
      margin: '20px auto',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
      backgroundColor: 'white'
   
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
      display: 'block'
    },
    control: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.7)',
      color: '#333',
      border: 'none',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      zIndex: 10,
      transition: 'all 0.2s ease'
    },
    prev: { left: '10px' },
    next: { right: '10px' },
    controlHover: {
      background: 'rgba(255,255,255,0.9)',
      transform: 'translateY(-50%) scale(1.1)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={images[currentIndex].url} 
          alt="Profile" 
          style={styles.image}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/250';
          }}
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            style={{ ...styles.control, ...styles.prev }}
            onClick={handlePrev}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.controlHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = styles.control.background;
              e.currentTarget.style.transform = 'translateY(-50%)';
            }}
          >
            ‹
          </button>
          <button 
            style={{ ...styles.control, ...styles.next }}
            onClick={handleNext}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.controlHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = styles.control.background;
              e.currentTarget.style.transform = 'translateY(-50%)';
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Carusel;