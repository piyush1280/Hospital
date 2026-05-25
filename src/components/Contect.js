import React from 'react';
import './Contect.css';

function Contact() {
  return (
    <section id="contact" className="contact-page">

      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            We are here to help you with your health and medical needs.
          </p>

          <p><strong>Address:</strong> 123 Health Street, Kanpur, India</p>

          <p><strong>Phone:</strong> +91 9876543210</p>

          <p><strong>Email:</strong> hospital@gmail.com</p>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <input
              type="text"
              placeholder="Enter Subject"
            />

            <textarea
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;