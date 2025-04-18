import React from 'react';
import heroimg from '../assets/herosec.png';

const HeroSec = ({ latest }) => {
  const title = latest?.title||'' 
  const description = latest?.description ||''
  const author = latest?.name	 || latest?.author	;
  const imageSrc = latest?.urlToImage||''	;

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-5" 
         style={{ backgroundColor: "#7C4EE4", borderRadius: '1rem' }}>

      {/* Text Section */}
      <div className="text-container mb-4 mb-md-0" style={{ maxWidth: '650px' }}>
        <div className="card-body text-white">
          <p className="text-uppercase text-light mb-2" style={{ fontSize: '0.9rem' }}>
            {author}
          </p>
          <h2 className="fw-bold mb-3">{title}</h2>
          <p className="card-text mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {description.slice(0,60)}
          </p>
    
        </div>
      </div>

      {/* Image Section */}
      <div className="img-container text-center mt-4 mt-md-0">
        <img
          src={imageSrc}
         
          className="rounded shadow-lg"
          style={{
            
         aspectRatio:"2/1",
            width: '100%',
            borderRadius: '0.8rem',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    </div>
  );
};

export default HeroSec;
