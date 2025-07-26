import active from "../../assets/hm.png"
import findHome from "../../assets/clc.png"
import service from "../../assets/safe.png"


export default function WhyChoose() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800  uppercase mb-4">
       Why Choose Us
      </h2>
     

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 justify-center lg:px-12">
     
        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col gap-4 justify-between py-8 px-6 text-center">
          

           
    

          <div className="text-start">
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Simple Online Application</h3>
            <p className="text-gray-500  text-sm">Easy 2 minute online application, with no credit pull required.</p>
          </div>
               <img src={active} alt="" className="h-12 w-14"/>
        </div>







        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col justify-between gap-4  py-8 px-6 ">
           
          <div className="text-start">
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Quick Turn Around</h3>
            <p className="text-gray-500 text-sm">Receive a Term Sheet within the hour.</p>
          </div>
      <img src={findHome} alt="" className="h-12 w-14"/>
        </div>














        <div className=" bg-white border border-gray-300 rounded-xl shadow-md flex flex-col gap-4 justify-between py-8 px-6 text-center">
             
          <div className="text-center">
            <h3 className="text-xl mb-2 text-[#016630] font-bold">Reliable Financing</h3>
            <p className="text-gray-500 text-sm">Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.</p>
          </div>
       <img src={service} alt="" className="h-12 w-14"/>
        </div>
      </div>
    </section>
  );
}


