import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>City Hospital</h2>

          <p>
            Providing quality healthcare services with expert doctors
            and advanced medical facilities.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>

          <p>📍 Kanpur, Uttar Pradesh, India</p>

          <p>📞 +91 9876543210</p>

          <p>✉️ hospital@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 City Hospital | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;