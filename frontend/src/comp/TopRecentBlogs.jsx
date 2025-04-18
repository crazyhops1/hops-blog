import React from 'react';
import { Link } from 'react-router-dom';

const TopRecentBlogs = ({ allpost }) => {
  
  return (
    <div className="mt-5">
      {/* Heading */}
      <div className="container d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold text-capitalize">Our Recent Posts</h5>
        <Link to='/blog' className="btn btn-primary btn-sm" style={{ backgroundColor: '#7C4EE4' }}>
          View All
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="container">
        <div className="row justify-content-center g-4">
          {allpost.length === 0 ? (
            <p className="text-muted text-center">No blog posts available.</p>
          ) : (
            allpost.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <a href={item.url || '#'} style={{ display: 'inline-block', textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ display: 'inline-flex', flexDirection: 'column', width: '100%' }}>
                    {/* Conditionally render image */}
                    {item.urlToImage && (
                      <img
                        src={item.urlToImage} 
                        className="card-img-top"
                        style={{ objectFit: 'cover', aspectRatio:"3/4" }}
                        alt={item.title || 'Blog Thumbnail'}
                      />
                    )}

                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-semibold mb-2">
                        {item.title?.slice(0, 60) || 'Untitled Blog'}
                      </h6>
                      <p className="card-text text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                        {item.description
                          ? item.description.slice(0, 15) + '...'
                          : 'No description available.'}
                      </p>
                      <Link to={item.url}   style={{backgroundColor:'#7C4EE4',color:"#ffffff"}} className="btn  btn-sm rounded-pill mt-auto">
                        Read More
                      </Link>
                    </div>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRecentBlogs;
