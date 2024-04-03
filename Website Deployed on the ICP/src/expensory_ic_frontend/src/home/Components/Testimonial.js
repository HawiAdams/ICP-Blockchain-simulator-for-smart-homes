import React from "react";
import ProfilePic from "../Assets/unnamed.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          I tested the project and it works perfectly. I am very happy with the result and I will definitely use it in the future. I would recommend this project to anyone who wants to gain control over their financial activities.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ashish Singh</h2>
      </div>
    </div>
  );
};

export default Testimonial;
