import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#333333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo */}
      <div className="nav-logo-container">
        <Link to="/" className="h4 fw-bold text-decoration-none"  style={{color:'#7C4EE4'}}>
          Hops
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links-container d-flex align-items-center gap-4 ">
        <ul className="d-flex m-0 p-0 gap-2 align-items-center" style={{ listStyle: 'none',  maxWidth:"60%"}}>
          <li>
            <Link to="/blog" className="nav-link text-dark fw-medium" style={navLinkStyle}>
              Blog
            </Link>
          </li>
         
          {/* <li>
            <span className="nav-link text-dark fw-medium" style={navLinkStyle}>
              Search
            </span>
          </li> */}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="btn btn-sm"
          style={{
            backgroundColor: '#7C4EE4',
            color: '#fff',
            borderRadius: '30px',
            padding: '6px 16px',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

// Custom nav link styles with hover
const navLinkStyle = {
  textDecoration: 'none',
  position: 'relative',
  paddingBottom: '2px',
  transition: 'color 0.3s ease',
};

export default Nav;
