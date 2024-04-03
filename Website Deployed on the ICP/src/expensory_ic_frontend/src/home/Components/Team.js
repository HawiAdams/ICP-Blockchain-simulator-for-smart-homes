import React from "react";
import img1 from "../Assets/me.jpg";
import img2 from "../Assets/adam.jpg"; // Add the image for the other team member
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      image: img1,
      name: "Tanishq",
      role: "Full Stack Blockchain Developer",
      github: "https://github.com/spydiecy",
      linkedin: "https://linkedin.com/in/tanishqgupta-tech",
      twitter: "https://twitter.com/tanishqistaken",
      bio: "Greetings! 👋 I'm Tanishq Gupta, a computer science enthusiast currently pursuing a B.Tech degree. Experienced in both frontend and backend development, and comfortable with concepts such as Blockchain and Smart Contracts."
    },
    {
      image: img2,
      name: "Adam",
      role: "Cybersecurity Specialist",
      github: "https://github.com/HawiAdams",
      linkedin: "https://www.linkedin.com/in/ernest-adams-hawi",
      twitter: "https://twitter.com/ErnestA81722748?t=16YIafArRpj1xu1r_xJzEQ&s=09",
      bio: "hey 👋Ernest Adams here  a Cybersecurity Specialist & Full-Stack Developer - Dedicated to fortifying digital landscapes with robust security measures and crafting innovative solutions for evolving cyber threats."
    }
  ];

  return (
    <div className="container" id="container">
      <p className="primary-subheading">About Us</p>
      <h1 className="about-heading">Meet Our Team</h1>
      <div className="row centr">
        {teamMembers.map((teamMember) => (
          <div className="col-md-4 col-sm-6" key={teamMember.name}>
            <div className="our-team">
              <div className="pic">
                <img src={teamMember.image} alt={teamMember.name} />
              </div>
              <div className="team-content">
                <h3 className="title">{teamMember.name}</h3>
                <span className="post">{teamMember.role}</span>
                <p className="bio">{teamMember.bio}</p>
                <div className="socials">
                  <a href={teamMember.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;