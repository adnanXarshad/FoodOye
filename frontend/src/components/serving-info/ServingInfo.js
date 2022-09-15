import React from "react";
import Pic01 from "./Pic01.jpg";
import Pic02 from "./Pic02.jpg";
import Pic03 from "./Pic03.jpg";
import "./ServingInfo.css";

const ServingInfo = () => {
  return (
    <div className="myCards">
      <div className="card-group">
        <div className="card bg-danger text-white ">
          <img className="card-img-top" src={Pic01} alt="xxx" />
          <div className="card-body">
            <h5 className="card-title">Break Fast</h5>
            <button type="button" class="btn btn-info">
              Order Now
            </button>
          </div>
        </div>
        <div className="card bg-danger text-white">
          <img className="card-img-top" src={Pic02} alt="xxx" />
          <div className="card-body">
            <h5 className="card-title">Lunch</h5>
            <button type="button" class="btn btn-info">
              Order Now
            </button>
          </div>
        </div>
        <div className="card bg-danger text-white">
          <img className="card-img-top" src={Pic03} alt="xxx" />
          <div className="card-body">
            <h5 className="card-title">Dinner</h5>
            <button type="button" class="btn btn-info">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServingInfo;
