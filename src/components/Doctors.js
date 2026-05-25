import React from 'react';
import './Doctors.css';

function Doctors() {
  return (
    <section id="doctors" className="doctor-page">

      <h2>Our Specialist Doctors</h2>

      <div className="doctor-container">

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
            alt="Doctor Image"
          />

          <h3>Dr. Rahul Sharma</h3>

          <p>Cardiologist</p>

          <button>Book Appointment</button>
        </div>

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            alt="Doctor Image"
          />

          <h3>Dr. Priya Singh</h3>

          <p>Neurologist</p>

          <button>Book Appointment</button>
        </div>

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
            alt="Doctor Image"
          />

          <h3>Dr. Amit Verma</h3>

          <p>General Surgeon</p>

          <button>Book Appointment</button>
        </div>

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
            alt="Doctor Image"
          />

          <h3>Dr. Neha Kapoor</h3>

          <p>Pediatrician</p>

          <button>Book Appointment</button>
        </div>

      </div>

    </section>
  );
}

export default Doctors;