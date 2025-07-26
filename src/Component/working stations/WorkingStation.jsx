import active from "../../assets/hand.jpg"
import findHome from "../../assets/findHome.png"
import service from "../../assets/service.png"
import { GoArrowUpRight } from "react-icons/go";

export default function WorkingSection() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2 uppercase">
        Interested in working with us?
      </h2>
      <p className="text-gray-600 mb-10 text-sm md:text-base">
        We work with real estate investors across the country every day. How can we help?
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 justify-center lg:px-12">
     
        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-between py-8 px-6 text-center">
          
      <img src={active} alt="" className="h-12 w-18"/>
           
    

          <div>
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Active Deal</h3>
            <p className="text-gray-500  text-sm">I have an active deal and would like a Term Sheet</p>
          </div>
          <button className=" mt-4 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-[#175730] text-gray-800">
            Find a home
            <GoArrowUpRight />
          </button>
        </div>







        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-between py-8 px-6 text-center">
           <img src={findHome} alt="" className="h-12 w-18"/>
          <div>
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Pre-Approval</h3>
            <p className="text-gray-500 break-words w-3/4 text-sm">I'd like to get pre-approved so I can find my next deal.</p>
          </div>
          <button className="mt-4 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-[#175730] text-white">
            Find a home
           <GoArrowUpRight />
          </button>
        </div>














        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-between py-8 px-6 text-center">
             <img src={service} alt="" className="h-12 w-18"/>
          <div>
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Schedule A Call</h3>
            <p className="text-gray-500 break-words w-3/4 text-sm">I'd like to schedule a call.</p>
          </div>
          <button className="mt-4 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-[#175730] text-gray-800">
            Find a home
           <GoArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}


