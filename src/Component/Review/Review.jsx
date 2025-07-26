import React from "react";
import CardSlider from "./SliderCard";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";


const Review = () => {
  return (
    <div className="w-full h-[500px] ">
       <div className="w-full h-[500px] absolute -z-1">
         <div className="h-1/2 bg-white  ">

        </div>
        <div className="h-1/2 bg-[#165831]">
            
        </div>
       </div>

       <div className="py-4">
  <h1 className="text-[40px] font-bold text-[#165831] text-center uppercase">Ridge Street Client Reviews</h1>
<div>
    <CardSlider></CardSlider>
</div>
       </div>
        <Link to={"/approve"}>
 <div className="mt-6 flex justify-center">
            <button className="relative inline-flex items-center justify-between bg-white text-green-900 font-semibold px-5 py-2 rounded shadow-lg transition-transform hover:scale-105 clipThree">
              GET APPROVED ONLINE
              <span className="ml-2 bg-green-900 text-white p-1 rounded clipSec h-full p-2"><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></span>
            </button>
          </div>
</Link>
    </div>
  );
};

export default Review;
