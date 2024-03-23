import React from "react";
import Meeting from "../Assets/consulting.png";
import SecondMeeting from "../Assets/choose-image.png";
import Delivery from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Meeting,
      title: "Meeting",
      text: "Free consulting meeting were we go through different templates and ideas",
    },
    {
      image: SecondMeeting,
      title: "Choose",
      text: "Free second consulting you are certain at what template you want",
    },
    {
      image: Delivery,
      title: "Product",
      text: "Product will be built and made within 3 days to a week",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We go through a three stage process on how we conduct our business
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
