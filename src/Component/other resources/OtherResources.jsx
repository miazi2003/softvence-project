import res1 from "../../assets/res1.jpg"
import res2 from "../../assets/res2.jpg"
import res3 from "../../assets/res3.jpg"



export default function OtherResourcesSection() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-16 bg-white" id="resources">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 uppercase">
          OTHER RESOURCES <br className="block md:hidden" /><br />
          <span className="text-green-700">YOU’LL LIKE</span>
        </h2>
        <button className="bg-green-700 text-white px-6 py-2 text-sm font-semibold rounded-full hover:bg-green-800 transition-all">
          VIEW MORE
        </button>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <img
            src={res1}
            alt="House 1"
            className="w-full h-[230px] object-cover p-4 "
          />
          <div className="p-5 flex flex-col gap-2">
            <p className="text-xs text-gray-500">May 9, 2024</p>
            <h3 className="text-md font-semibold text-green-800">
              Investor’s Guide To Real Estate Wholesaling
            </h3>
            <p className="text-sm text-gray-600">
              Real estate wholesaling investment technique that combines the best aspects
              of two of the most common strategies - flipping houses and wholesaling. With
              wholesaling, you can earn large.
            </p>
          </div>
        </div>

      
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <img
            src={res2}
            alt="House 2"
            className="w-full h-[230px] object-cover p-4 "
          />
          <div className="p-5 flex flex-col gap-2">
            <p className="text-xs text-gray-500">May 9, 2024</p>
            <h3 className="text-md font-semibold text-green-800">
              Investor’s Guide To Real Estate Wholesaling
            </h3>
            <p className="text-sm text-gray-600">
              Real estate wholesaling investment technique that combines the best aspects
              of two of the most common strategies - flipping houses and wholesaling. With
              wholesaling, you can earn large.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <img
            src={res3}
            alt="House 3"
            className="w-full h-[230px] object-cover p-4 "
          />
          <div className="p-5 flex flex-col gap-2">
            <p className="text-xs text-gray-500">May 9, 2024</p>
            <h3 className="text-md font-semibold text-green-800">
              Investor’s Guide To Real Estate Wholesaling
            </h3>
            <p className="text-sm text-gray-600">
              Real estate wholesaling investment technique that combines the best aspects
              of two of the most common strategies - flipping houses and wholesaling. With
              wholesaling, you can earn large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
