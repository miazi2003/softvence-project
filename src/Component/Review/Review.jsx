import React from "react";
import CardSlider from "./SliderCard";

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
  <h1 className="text-[40px] font-bold text-[#165831] text-center">Ridge Street Client Reviews</h1>
<div>
    <CardSlider></CardSlider>
</div>
       </div>
    </div>
  );
};

export default Review;
