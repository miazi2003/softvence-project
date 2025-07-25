import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay-bg"></div>
      <div className="banner-content text-black">
        <h1>
          FLORIDA AND TEXAS <br /> HARD MONEY LENDERS
        </h1>
        <p>
          Fast Closing Fix and Flip and Rental Loans <br />
          For Your Investment Properties.
        </p>
        <button className="cta-button">
          GET APPROVED ONLINE <span className="arrow">»</span>
        </button>
      </div>

      <div className="shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
    </div>
  );
};

export default Banner;