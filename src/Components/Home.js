import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/image1.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Website Solutions at the forefront
          </h1>
          <p className="primary-text">
          Crafting Your Digital Masterpiece: Let's Build Your Dream Website Together!
          </p>
          <button className="secondary-button">
            <a href="https://calendly.com/osm-warsame">Book Now</a> <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
