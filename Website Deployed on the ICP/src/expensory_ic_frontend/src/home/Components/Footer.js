import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <span className="nav-logo-text" style={{ color: "#01C8FF", fontSize: "30px", fontWeight: "bold" }}>SimHaven</span>
        </div>
        <div>
          <p className="footer-text" style={{ color: '#333', fontSize: '16px', lineHeight: '1.5', textDecoration: 'none' }}>
            Secure smart home simulations for developers, ensuring safety, privacy,<br/> and energy efficiency. Welcome to a smarter way of living! 🏠🔒
          </p>
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com"><BsTwitter /></a>
          <a href="https://linkedin.com"><SiLinkedin /></a>
          <a href="https://youtube.com"><BsYoutube /></a>
          <a href="https://facebook.com"><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h3>Categories</h3>
          <span ><Link to="/#home-container">Home</Link></span>
          <span><Link to="/#about-section-container">Our Features</Link></span>
          <span><Link to="/#container">Our Team</Link></span>
          <span><Link to="/#contact-page-wrapper">Contact</Link></span>
        </div>
        <div className="footer-section-columns">
          <h3>Contact</h3>
          <span>Phone no: +91 1234567890</span>
          <span>Email id: tanishqgupta322@gmail.com</span>
          <span>Location: Germany</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
