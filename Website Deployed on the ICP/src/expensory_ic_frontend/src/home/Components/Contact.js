import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact-page-wrapper">
      <p className="primary-subheading">Contact</p>
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Enter Your Email" />
        <input type="text" placeholder="Your Message"/>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
