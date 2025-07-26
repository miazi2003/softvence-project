import React from "react";

const locations = [
  {
    state: "Texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
  },
  {
    state: "Florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
  },
  {
    state: "Georgia",
    cities: ["Atlanta", "Savannah", "Augusta", "Macon"],
  },
  {
    state: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Durham", "Greensboro"],
  },
  {
    state: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
  },
];

const Locations = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Service Locations
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We proudly serve home buyers and investors across these major states and cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="border border-green-900 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 bg-green-50"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {loc.state}
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {loc.cities.map((city, i) => (
                  <li key={i}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
