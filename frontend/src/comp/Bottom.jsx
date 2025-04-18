import React from 'react'
import {Instagram,Facebook,YouTube} from "@mui/icons-material"
import { Link } from 'react-router-dom'
const Bottom = () => {
  return (
    <div>

      {/* Newsletter Signup */}
      <div className="card text-center mt-5 border-0" style={{ backgroundColor: '#7C4EE4', color: '#FFFFFF' }}>
        <div className="card-body py-5">
          <h3 className="card-title mb-3">
            Get our stories delivered <br /> from us to your inbox weekly.
          </h3>
          <form className="d-flex mx-auto my-4 shadow-sm rounded-pill overflow-hidden" style={{ maxWidth: '500px' }}>
            <input
              className="form-control border-0 px-4"
              type="email"
              placeholder="Your email"
              aria-label="Email"
              style={{ borderRadius: 0 }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: '#ffffff',
                color: '#7C4EE4',
                fontWeight: '600',
                padding: '0.5rem 1.5rem',
                borderRadius: 0,
                borderLeft: '1px solid #ddd'
              }}
            >
              Get Started
            </button>
          </form>
          <p className="card-text px-3" style={{ fontSize: '0.9rem' }}>
            Get a response tomorrow if you submit by 9pm today. <br className='d-none d-md-block' />
            Submissions after 9pm will be addressed the following day.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="text-center py-4" style={{ backgroundColor: '#FFFFFF', color: '#7C4EE4' }}>
        <h3 className="fw-bold mb-3">Hops.</h3>

        <ul className="d-flex justify-content-center gap-4 list-unstyled mb-3 flex-wrap">
          <li><Link to="/" className="text-decoration-none text-reset">Home</Link></li>
          <li><Link to="/contact/" className="text-decoration-none text-reset">contact</Link></li>
          <li><Link to="/blog" className="text-decoration-none text-reset">Blog</Link></li>
        </ul>

        <ul className="d-flex justify-content-center gap-4 list-unstyled flex-wrap mb-3">
          <li><a href="#" className="text-decoration-none text-reset"><Instagram/></a></li>
          <li><a href="#" className="text-decoration-none text-reset"><YouTube/></a></li>
          <li><a href="#" className="text-decoration-none text-reset"><Facebook/></a></li>
        </ul>

        <p className="text-secondary small mt-4">
          Copyright &copy; Ideapeel Inc 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Bottom
