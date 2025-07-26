import React from "react";
import "./Banner.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="banner">
      <div className="main min-h-screen w-full relative py-6 sm:py-12">
        <div className="overlay"></div>
        <div className="hero"></div>
        <div className="mask"></div>
        <div className="mask2"></div>

        <div className="banner-content text-black">
          <h1 className="uppercase font-bold">
            FLORIDA AND TEXAS <br /> HARD MONEY LENDERS
          </h1>
          <p>
            Fast Closing Fix and Flip and Rental Loans <br />
            For Your Investment Properties.
          </p>

          <div className="mt-6 flex justify-center sm:justify-start">
            <button className="relative inline-flex items-center justify-between bg-green-900 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded shadow-lg transition-transform hover:scale-105 clipThree text-sm md:text-base w-full sm:w-auto">
              <span className="whitespace-nowrap">GET APPROVED ONLINE</span>
              <span className="ml-2 text-green-900 bg-white rounded clipSec p-2 flex items-center justify-center">
                <MdOutlineKeyboardDoubleArrowRight className="text-base md:text-lg" />
              </span>
            </button>
          </div>
        </div>
      </div>


      <div className="mainTwo">
        <div className="banner-content text-black">
          <h1 className="uppercase font-bold">
            FLORIDA AND TEXAS <br /> HARD MONEY LENDERS
          </h1>
          <p>
            Fast Closing Fix and Flip and Rental Loans <br />
            For Your Investment Properties.
          </p>

          <div className="mt-6 flex justify-center sm:justify-start">
            <button className="relative inline-flex items-center justify-between bg-green-900 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded shadow-lg transition-transform hover:scale-105 clipThree text-sm md:text-base w-full sm:w-auto">
              <span className="whitespace-nowrap">GET APPROVED ONLINE</span>
              <span className="ml-2 text-green-900 bg-white rounded clipSec p-2 flex items-center justify-center">
                <MdOutlineKeyboardDoubleArrowRight className="text-base md:text-lg" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
