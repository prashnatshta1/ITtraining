import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Important Links */}
        <div className="footer-section">
          <h4>Important Links</h4>
          <ul>
            <li>Corporate-social-responsibility</li>
            <li>Facilities</li>
            <li>Why-it-training-nepal</li>
            <li>Computer-training</li>
            <li>Methodology</li>
            <li>Instructors</li>
            <li>Scholarships</li>
            <li>Hiring-developers</li>
            <li>Join-us</li>
            <li>Internship</li>
            <li>Privacy-policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Popular Topics */}
        <div className="footer-section">
          <h4>Popular Topics</h4>
          <ul>
            <li>Computer Education</li>
            <li>IT Careers</li>
            <li>Computer Training for SEE Appeared Students</li>
            <li>Job Opportunities for IT and non-IT Graduates</li>
            <li>Website And Blog For Small And Mid Size Organizations</li>
            <li>Importance of professional qualification after an academic degree</li>
            <li>Computer Education In Nepal</li>
            <li>Choosing Best Computer Training Institute</li>
            <li>Best Computer Courses and Programming Languages to Learn for Jobs</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Online Training</li>
            <li>Fast Track Courses</li>
            <li>Job Oriented Training</li>
            <li>Professional Web Design</li>
            <li>Job Placement</li>
            <li>Web Hosting and Domain Registration services</li>
            <li>Hire PHP Programmer</li>
            <li>Hire Web Designers</li>
            <li>Hire WordPress Developers</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h4>Contact Details</h4>
          <p>Putalisadak, Kathmandu 44600, Nepal</p>
          <p>977-1-5340005, 4246070</p>
          <p>9818255337, 9801169144</p>
          <p>info@ittrainingnepal.com</p>

          {/* Social Media Links */}
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaPinterestP />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2010 - 2022 ittrainingnepal.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
