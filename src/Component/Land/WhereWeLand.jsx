import React from "react";
import map from "../../assets/Group.png";
import "./WhereWeLand.css"
import land1 from "../../assets/land1.jpg";
import land2 from "../../assets/land2.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const WhereWeLand = () => {
  return (
    <div className="relative min-h-screen bg-[#165831] overflow-hidden py-12" id="weLand">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#499668] rounded-full blur-[160px] opacity-60 z-0" />

      <div className="pt-18 px-14">
        <h1 className="text-[56px] text-white tracking-[4%] font-[700] mb-2">
          WHERE WE LAND
        </h1>
        <p className="text-[20px] text-white text-shadow-2xs text-shadow-black">
          Ridge Street provides hard money loans to real estate investors in 35
          states.{" "}
        </p>
        <p className="text-white text-lg">
          We focus our efforts in{" "}
          <span className="text-[24px] font-bold">Texas</span> and{" "}
          <span className="text-[24px] font-bold">Florida</span>.
        </p>
      </div>


      <div className="mt-24 w-full  flex items-center justify-center px-4 lg:px-42">
        <img src={map} alt="" />
      </div>



  <div className="grid lg:grid-cols-2 grid-cols-1 px-2 lg:px-72  gap-[120px] w-full items-center justify-center py-24">
  
  <div
    className="relative border py-28 px-8 flex flex-col gap-4 border-white rounded-tr-[50px] rounded-bl-[50px] text-white overflow-hidden"
    style={{
      backgroundImage: `url(${land1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
  
    <div className="absolute inset-0 bg-black/60  z-0 rounded-tr-[50px] rounded-bl-[50px]" />

    <div className="relative z-10 flex flex-col gap-4 items-center">
      <h1 className="text-[40px] text-center font-bold">Texas</h1>
      <p>Hard Money Loans | DSCR Loans</p>
      <Link to={"/allLocation"}>
      <button className="btn bg-transparent border border-white rounded-[60px] text-white hover:bg-white hover:text-black duration-300">
        View All Locations
      </button></Link>
    </div>
  </div>

  
  <div
    className="relative border py-28 px-8 flex flex-col gap-4 border-white rounded-tl-[50px] rounded-br-[50px] text-white overflow-hidden"
    style={{
      backgroundImage: `url(${land2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >

    <div className="absolute inset-0 bg-black/60  z-0 rounded-tl-[50px] rounded-br-[50px]" />

 
    <div className="relative z-10 flex flex-col gap-4 items-center">
      <h1 className="text-[40px] text-center font-bold">Florida</h1>
      <p>Hard Money Loans | DSCR Loans</p>
   <Link to={"/allLocation"}>
      <button className="btn  bg-transparent border border-white rounded-[60px] text-white hover:bg-white hover:text-black duration-300">
        View All Locations
      </button></Link>
    </div>
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

export default WhereWeLand;
