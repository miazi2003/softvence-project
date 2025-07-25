import React from "react";
import map from "../../assets/Group.png";
import "./WhereWeLand.css"
import land1 from "../../assets/land1.jpg";
import land2 from "../../assets/land2.png";

const WhereWeLand = () => {
  return (
    <div className="relative min-h-screen bg-[#165831] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#499668] rounded-full blur-[160px] opacity-60 z-0" />
      {/* {content} */}
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

      {/* {map} */}
      <div className="mt-24 w-full  flex items-center justify-center px-42">
        <img src={map} alt="" />
      </div>

      {/* {card} */}

  <div className="flex gap-[120px] w-full items-center justify-center py-24">
  
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

    <div className="relative z-10 flex flex-col gap-4">
      <h1 className="text-[40px] text-center font-bold">Texas</h1>
      <p>Hard Money Loans | DSCR Loans</p>
      <button className="btn bg-transparent border border-white rounded-[60px] text-white hover:bg-white hover:text-black duration-300">
        View All Locations
      </button>
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

 
    <div className="relative z-10 flex flex-col gap-4">
      <h1 className="text-[40px] text-center font-bold">Florida</h1>
      <p>Hard Money Loans | DSCR Loans</p>
      <button className="btn bg-transparent border border-white rounded-[60px] text-white hover:bg-white hover:text-black duration-300">
        View All Locations
      </button>
    </div>
  </div>
</div>

{/* {button} */}

    </div>
  );
};

export default WhereWeLand;
