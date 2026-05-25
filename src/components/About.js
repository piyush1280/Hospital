import React from 'react'
import './About.css';
function About() {
  return (
    
    <section id="about" className="about">
  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
      alt="Doctors"
    />
  </div>

  <div className="about-content">
    <h2>About Our Hospital</h2>

    <p>
      MediCare Hospital is one of the leading healthcare centers providing
      world-class medical facilities and patient care services.
    </p>

    <p>
      Our experienced doctors, nurses, and staff are dedicated to delivering
      high-quality treatment using modern technology and advanced equipment.
    </p>

    <div className="about-boxes">
      <div className="box">
        <h3>2</h3>
        <p>Years Experience</p>
      </div>

      <div className="box">
        <h3>20+</h3>
        <p>Expert Doctors</p>
      </div>

      <div className="box">
        <h3>1k</h3>
        <p>Happy Patients</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
