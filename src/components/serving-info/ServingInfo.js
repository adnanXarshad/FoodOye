import React from "react";
import serviceLogo from "./service logo.png";
import "./ServingInfo.css";

const ServingInfo = () => {
  const serveCard = [
    {
      img: serviceLogo,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: serviceLogo,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: serviceLogo,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <div className="servings">
      <h5>What We Serve</h5>
      <h4>Your Favorite Food Delivery Partner</h4>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {serveCard.map((index) => {
          return (
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={index.img} alt="LOGO" />
                <div className="card-body">
                  <p className="card-text">{index.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServingInfo;
