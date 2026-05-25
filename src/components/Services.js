import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-page">

      <h2>Our Hospital Services</h2>

      <div className="services-container">

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Emergency Service"
          />

          <h3>Emergency Care</h3>

          <p>
            24/7 emergency medical services with expert doctors and staff.
          </p>

          <button>Read More</button>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
            alt="Cardiology"
          />

          <h3>Cardiology</h3>

          <p>
            Advanced heart care treatment with modern medical technology.
          </p>

          <button>Read More</button>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df"
            alt="Neurology"
          />

          <h3>Neurology</h3>

          <p>
            Specialized treatment for brain and nervous system disorders.
          </p>

          <button>Read More</button>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
            alt="Pediatrics"
          />

          <h3>Pediatrics</h3>

          <p>
            Complete healthcare services for infants, children, and teenagers.
          </p>

          <button>Read More</button>
        </div>

      </div>

    </section>
  );
}

export default Services;