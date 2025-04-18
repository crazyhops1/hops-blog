import React from 'react';


const Recent = ({ latest }) => {
  const title = latest?.title || 'Light Card Title';
  const description =
    latest?.description ||
    'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
  const author = latest?.author || 'Unknown Author';
  const imageSrc = latest?.urlToImage ;

  return (
    <div className="container mt-5">
      {/* Banner recent blog */}
      <div className={`${imageSrc && 'position-relative  d-flex justify-content-center'} `}>
        <img
          src={imageSrc}
          className={`${imageSrc && 'position-relative   d-flex justify-content-center img-fluid rounded-4'} `}
      
         
          style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
        />

        {/* Overlay Card */}
        <div
          className={`card  ${imageSrc && 'position-absolute p-4 shadow-lg d-none d-md-block'} `}
          style={{
            bottom: imageSrc ? '-30px' : '0', 
            left: imageSrc ? '50%' : '0', 
            transform: imageSrc ? 'translateX(-50%)' : 'none',
            width: '90%',
            maxWidth: '500px',
            zIndex: 10,
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <div  className="card-header text-white fw-bold rounded-top"   style={{backgroundColor:'#7C4EE4',color:"#ffffff"}}>
            Featured Post
          </div>
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>By {author}</p>
            <p className="card-text" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
              {description.length > 160 ? description.slice(0, 160) + '...' : description}
            </p>
            <button    style={{backgroundColor:'#7C4EE4',color:"#ffffff"}} className="btn  rounded-pill px-4 py-2 mt-2 fw-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
