import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-green-900">GreenTrust Home Loans</span>,
          your trusted partner in making homeownership a reality. We specialize in helping
          individuals and families in <span className="font-medium">Texas and Florida</span> secure reliable
          and flexible loan solutions tailored to their needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify the home loan process and empower you with
              transparent, fast, and secure approval—entirely online. We believe that
              every dream of homeownership should be met with trust, support, and opportunity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">Why Choose Us?</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Instant Online Approval Process</li>
              <li>Competitive Rates & Flexible Terms</li>
              <li>Experienced Loan Advisors</li>
              <li>Dedicated Support Across TX & FL</li>
              <li>Transparent, No-Hassle Paperwork</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-900 mb-2">Contact Us</h3>
          <p className="text-gray-600">
            Have questions or need personalized help? Our team is here to assist you.
          </p>
          <p className="text-gray-700 mt-2">
            📍 Texas Office: 1333 Riverwalk Dr, Austin, TX
          </p>
          <p className="text-gray-700">
            📍 Florida Office: 4321 Alton Rd, Miami Beach, FL
          </p>
          <p className="text-gray-700 mt-2">📧 Email: support@greentrustloans.com</p>
          <p className="text-gray-700">📞 Phone: +1 (800) 123-4567</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
