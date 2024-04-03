import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const openVideoPopup = () => {
    window.open("https://www.loom.com/share/319c7d852d79493da4a9866cedfabb12?sid=02eede5d-8c81-4063-aa7f-33b26b071fe8", "_blank", "width=800,height=600");
  };

  const openGithubPopop = () => {
    window.open("https://github.com/HawiAdams/ICP-Blockchain-simulator-for-smart-homes");
  };

  return (
    <div className="about-section-container" id="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">
          Experience Secure Smart Living with SimHaven
        </h1>
        <p className="primary-text">
          Key features of SimHaven include:
        </p>
        <ul className="feature-list">
          <li>Assessment of vulnerabilities.</li>
          <li>Analysis of security challenges in home security systems.</li>
          <li>Intuitive home security system design using blockchain technology.</li>
          <li>Development of a home-based security system leveraging blockchain technology.</li>
          <li>Simulation and testing of the home security system with blockchain technology.</li>
        </ul>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={openGithubPopop}>Learn more</button>
          <button className="watch-video-button" onClick={openVideoPopup}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
