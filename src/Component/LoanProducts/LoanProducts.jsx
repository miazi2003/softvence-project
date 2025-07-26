import React from "react";
import "./Loan.css"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


import icon1 from "../../assets/house.png";
import icon2 from "../../assets/rent.png";
import icon3 from "../../assets/cons.png";
import check from "../../assets/checkmark-circle-03.png"
import check1 from "../../assets/checkmark-circle-03 (1).png"
import info  from "../../assets/information-circle.png"
import info1  from "../../assets/information-circle (1).png"
import { Link } from "react-router";
const LoanProducts = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-16" id="rental">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10">
        LOAN PRODUCTS
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="relative  p-10 bg-green-900 text-white border-2 rounded-[20px] shadow-2xl">
          <div className="flex justify-center mb-4">
            <img src={icon1} alt="Fix and Flip Icon" className="w-18 h-18 bg-white p-2 rounded-[20px]" />
          </div>
          <h3 className="text-xl font-semibold text-center">Fix and Flip</h3>
          <p className="text-sm text-center mb-4">Funding For Rehab + Purchase</p>
          <ul className="space-y-2 text-sm">
            {[
              "$50,000 up to $3,000,000",
              "Interest Rate 10.5%–12.99%",
              "Origination Fee From 1.5%",
              "Up to 85% of Purchase and 100% of Rehab",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src={check1} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm mt-4  underline text-white flex items-center gap-2">
           <img src={info} alt="" /> Learn More
          </a>
         <Link to={"/approve"}>
          <div className="mt-6 flex justify-center">
            <button className="relative inline-flex items-center justify-between bg-white text-green-900 font-semibold px-5 py-2 rounded shadow-lg transition-transform hover:scale-105 clipThree">
              GET APPROVED ONLINE
              <span className="ml-2 bg-green-900 text-white p-1 rounded clipSec h-full p-2"><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></span>
            </button>
          </div></Link>
        </div>

       <div className="bg-[#165831] rounded-[20px] shadow-2xl">
         <div className="relative  h-full p-10 bg-white text-green-900 clip rounded-[20px] ">
          <div className="flex justify-center mb-4">
            <img src={icon2} alt="Rental Icon" className="w-18 h-18 bg-[#165831] p-2 rounded-[20px]" />
          </div>
          <h3 className="text-xl font-semibold text-center">Rental Property</h3>
          <p className="text-sm text-center mb-4">30 Year DSCR loans in Florida and Texas</p>
          <ul className="space-y-2 text-sm">
            {[
              "Up to $1,500,000",
              "Interest Rate 6.75%–8.25%",
              "Origination Fee From 1.5%",
              "Up to 85% of LTV",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src={check} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm mt-4  underline text-green-800 flex items-center gap-2">
            <img src={info1} alt="" />Learn More
          </a>
          <Link to={"/approve"}>
          <div className="mt-6 flex justify-center">
            <div className="relative inline-flex items-center justify-between bg-[#165831] text-white font-semibold px-5 py-2 rounded shadow-lg transition-transform hover:scale-105 clipThree">
              GET APPROVED ONLINE
              <span className="ml-2 bg-white text-[#165831]   flex items-center h-full clipSec py-2 px-2"><MdOutlineKeyboardDoubleArrowRight /></span>
            </div>
          </div></Link>
        </div>
       </div>


          <div className="bg-[#165831] rounded-[20px] shadow-2xl">
 <div className="relative rounded-[20px] p-10 bg-white text-green-900  clip">
          <div className="flex justify-center mb-4">
            <img src={icon3} alt="Construction Icon" className="w-18 h-18 bg-[#165831] p-2 rounded-[20px]"/>
          </div>
          <h3 className="text-xl font-semibold text-center">Ground Up Construction</h3>
          <p className="text-xs text-center mb-4">
            Ground Up Construction loans in Florida and Texas
          </p>
          <ul className="space-y-2 text-sm">
            {[
              "Up to $3,500,000",
              "Interest Rate 12.15%–13.25%",
              "Origination Fee From 1.5%",
              "Up to 80% of LTC",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
               <img src={check} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm mt-4  underline text-green-800 flex items-center gap-2">
          <img src={info1} alt="" />  Learn More
          </a>
         <Link to={"/approve"}>
          <div className="mt-6 flex justify-center">
            <button className="relative inline-flex items-center justify-between bg-[#165831] text-white font-semibold px-5 py-2 rounded shadow-lg transition-transform hover:scale-105 clipThree">
              GET APPROVED ONLINE
              <span className="ml-2 bg-white text-[#165831] flex items-center h-full clipSec py-2 px-2"><MdOutlineKeyboardDoubleArrowRight /></span>
            </button>
          </div></Link>
        </div>
          </div>
      </div>
    </div>
  );
};

export default LoanProducts;
