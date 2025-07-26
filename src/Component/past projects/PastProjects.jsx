import React from "react";
import ReviewSlider from "./ReviewSlider";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const PastProjects = () => {
  return (
    <div className="bg-[#165831] py-38 lg:py-24">
      <div className="pt-18 px-14">
        <h1 className="text-[56px] text-white tracking-[4%] font-[700] mb-2">
          PAST PROJECTS
        </h1>
        <p className="text-[20px] text-white text-shadow-2xs text-shadow-black">
          A Proven Track Record Funding Projects Like These
        </p>
      </div>

      <div>
        <ReviewSlider></ReviewSlider>
      </div>


       <div className="mt-6 flex justify-center">
                  <button className="relative inline-flex items-center justify-between bg-white text-green-900 font-semibold px-5 py-2 rounded shadow-lg transition-transform hover:scale-105 clipThree">
                   Get Terms For Your Project
                    <span className="ml-2 bg-green-900 text-white p-1 rounded clipSec h-full p-2"><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></span>
                  </button>
                </div>
    </div>
  );
};

export default PastProjects;
