import React from "react";

const homes = [
  {
    address: "4321 Alton Rd, Miami Beach, FL",
    size: "2350 Sq Ft",
    garages: 4,
    bedrooms: 2,
    bathrooms: 3,
    price: "$328,000",
    status: "Available",
  },
  {
    address: "1103 Bellaire Blvd, Houston, TX",
    size: "1800 Sq Ft",
    garages: 2,
    bedrooms: 3,
    bathrooms: 2,
    price: "$295,000",
    status: "Available",
  },
  {
    address: "2107 Pine St, Tampa, FL",
    size: "2000 Sq Ft",
    garages: 2,
    bedrooms: 4,
    bathrooms: 3,
    price: "$310,000",
    status: "Pending",
  },
  {
    address: "5204 Oak Ln, Orlando, FL",
    size: "2400 Sq Ft",
    garages: 3,
    bedrooms: 4,
    bathrooms: 3,
    price: "$340,000",
    status: "Available",
  },
  {
    address: "904 Cedar Rd, Jacksonville, FL",
    size: "1500 Sq Ft",
    garages: 1,
    bedrooms: 3,
    bathrooms: 2,
    price: "$250,000",
    status: "Sold",
  },
  {
    address: "1333 Riverwalk Dr, Austin, TX",
    size: "2600 Sq Ft",
    garages: 3,
    bedrooms: 5,
    bathrooms: 4,
    price: "$389,000",
    status: "Available",
  },
  {
    address: "701 Ocean Dr, Fort Lauderdale, FL",
    size: "2200 Sq Ft",
    garages: 2,
    bedrooms: 4,
    bathrooms: 3,
    price: "$320,000",
    status: "Available",
  },
  {
    address: "1608 Hilltop Ave, Dallas, TX",
    size: "2100 Sq Ft",
    garages: 2,
    bedrooms: 3,
    bathrooms: 2,
    price: "$298,000",
    status: "Pending",
  },
  {
    address: "443 Sunset Blvd, San Antonio, TX",
    size: "2300 Sq Ft",
    garages: 3,
    bedrooms: 4,
    bathrooms: 3,
    price: "$330,000",
    status: "Available",
  },
  {
    address: "302 Beach Rd, Naples, FL",
    size: "1700 Sq Ft",
    garages: 2,
    bedrooms: 3,
    bathrooms: 2,
    price: "$270,000",
    status: "Sold",
  },
];

const FindHome = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">
          Find a Home
        </h2>

        <div className="overflow-x-auto border border-green-900 rounded-lg">
          <table className="table w-full">
            <thead className="bg-green-900 text-white">
              <tr>
                <th className="text-left py-3 px-4">Address</th>
                <th className="text-left py-3 px-4">Size</th>
                <th className="text-left py-3 px-4">Garages</th>
                <th className="text-left py-3 px-4">Bedrooms</th>
                <th className="text-left py-3 px-4">Bathrooms</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {homes.map((home, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-50 border-b border-green-100"
                >
                  <td className="py-3 px-4">{home.address}</td>
                  <td className="py-3 px-4">{home.size}</td>
                  <td className="py-3 px-4">{home.garages}</td>
                  <td className="py-3 px-4">{home.bedrooms}</td>
                  <td className="py-3 px-4">{home.bathrooms}</td>
                  <td className="py-3 px-4">{home.price}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      home.status === "Available"
                        ? "text-green-700"
                        : home.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {home.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FindHome;
