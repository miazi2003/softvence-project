import React from "react";

const GetStartedSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:flex justify-between items-center max-w-7xl mx-auto bgImage bg-no-repeat bg-size-[100vw]">

      <div className="md:w-1/2 space-y-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-tight">
          READY TO GET <br /> STARTED
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          With Ridge Street, obtaining a private mortgage loan is easier than you think!
          You can get pre-approved online and a Term Sheet that Meet’s your needs will be sent to you within the hour.
        </p>
        <button className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-md shadow-md transition duration-300 text-sm">
          GET PRE-APPROVED ONLINE
          <span className="ml-2">➜</span>
        </button>
      </div>


      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
        <div className="w-[300px] h-[250px] relative">

          
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
