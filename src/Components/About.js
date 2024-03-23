import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/image2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          WebEClear is a company that creates websites like noone else
        </h1>
        <p className="primary-text">
        We explore innovative solutions. empowering our developers to focus more on high-level problem-solving and creativity.This approach can lead to increased productivity, improved code quality, and ultimately, quality work in a shorter frame of time.
        </p>
        <p className="primary-text">
        For more information on this, check out videos of previous clientele work.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
