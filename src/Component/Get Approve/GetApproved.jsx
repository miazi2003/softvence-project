import React from "react";

const GetApprovedOnline = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Get Approved Online
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Submit your application in minutes and get fast approval for your home loan.
          </p>
        </div>

        <div className="bg-green-900/5 p-6 md:p-10 rounded-lg shadow-lg">
          <form className="grid gap-6 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-green-900">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-green-900">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-green-900">Loan Amount</span>
              </label>
              <input
                type="number"
                placeholder="e.g. 500000"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-green-900">Property Location</span>
              </label>
              <input
                type="text"
                placeholder="City or Area"
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button className="btn bg-green-900 text-white w-full hover:bg-green-800 text-lg font-semibold">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetApprovedOnline;
