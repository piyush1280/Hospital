import React from 'react'
import './Home.css';
function Home() {
  return (
    <section id="home" className="home">
  <div className="home-content">
    <h1>Welcome to MediCare Hospital</h1>
    <p>
      We provide the best healthcare services with experienced doctors
      and modern medical facilities.
    </p>

    <div className="home-buttons">
      <button className="btn-primary">Book Appointment</button>
      <button className="btn-secondary">Learn More</button>
    </div>
  </div>

  <div className="home-image">
    <img
      src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
      alt="Hospital"
    />
  </div>
</section>
  )
}

export default Home
