import React from 'react'
import contactbg from '../../assets/contact-form.jpg'

const Connect = () => {
  return (
    <div className="container-fluid px-0" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* Header Section */}
      <div className="text-center py-5 bg-light">
        <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: '2px' }}>Get in Touch</p>
        <h2 className="fw-bold mb-3">Find all our blogs here</h2>
        <p className="text-muted">Contact us to publish your content, show ads on our website, and grow your reach.</p>
      </div>

      {/* Contact Info Cards */}
      <div className="d-flex flex-wrap justify-content-evenly gap-3 px-3 pb-5">
        <div className="card shadow-sm border-0" style={{ width: "18rem", borderRadius: '1rem' }}>
          <div className="card-body text-center">
            <h6 className="text-uppercase text-primary">Office</h6>
            <p className="text-muted">Victoria Street, London, UK</p>
          </div>
        </div>

        <div className="card shadow-sm border-0" style={{ width: "18rem", borderRadius: '1rem' }}>
          <div className="card-body text-center">
            <h6 className="text-uppercase text-primary">Email</h6>
            <p className="text-muted">abc@gmail.com</p>
          </div>
        </div>

        <div className="card shadow-sm border-0" style={{ width: "18rem", borderRadius: '1rem' }}>
          <div className="card-body text-center">
            <h6 className="text-uppercase text-primary">Phone</h6>
            <p className="text-muted">+91 xxxxxxx23</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
   
<div className='position-relative' style={{ minHeight: '40rem' }}>
  {/* Background image (hidden on small devices) */}
  <img
    className=''
    src={contactbg}
    alt="Contact background"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(4px) brightness(0.6)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    }}
  />

  {/* Form */}
  <div
    className='w-100 d-flex justify-content-center align-items-center'
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      height: '100%',
      overflowY: 'auto',
      padding: '1rem',
    }}
  >
    <form
      className='row g-3 px-4 py-4 shadow-lg w-100'
      style={{
        maxWidth: '720px',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '0.8rem',
      }}
    >
      <div className='col-md-6'>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Your Name" />
      </div>

      <div className='col-md-6'>
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
      </div>

      <div className='col-md-6'>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="phone" placeholder="+91 9876543210" />
      </div>

      <div className='col-md-6'>
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" className="form-control" id="subject" placeholder="Subject" />
      </div>

      <div className='col-12'>
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3" placeholder="Type your message here..." />
      </div>

      <div className='col-12 text-center'>
        <button
          type="submit"
          className="btn  px-4 py-2 mt-2"
          style={{
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            backgroundColor:'#7C4EE4',
            color:'#ffffff'
          }}
       
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Connect
