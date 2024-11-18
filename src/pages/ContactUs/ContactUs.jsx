import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input type="text" id="phone" placeholder="Enter your phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Inquiry</button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="map">
        <iframe
          title="IT Training Nepal Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.473875588125!2d85.31600731506155!3d27.705235232052682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fc631ab77%3A0x3ffb5b54a6b631e2!2sIT%20Training%20Nepal!5e0!3m2!1sen!2snp!4v1694606360915!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
