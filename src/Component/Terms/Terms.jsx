import React from "react";

const Terms = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Terms and Conditions
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Please read the following terms carefully before applying for a loan.
          </p>
        </div>

        <div className="bg-green-50 border border-green-900 rounded-lg shadow-md p-6 md:p-10 space-y-6 text-gray-800 leading-relaxed">
          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">1. Loan Eligibility</h3>
            <p>
              Applicants must be at least 18 years of age and provide valid identification. Loan approval is subject to creditworthiness, property evaluation, and our internal policies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">2. Interest Rates and Fees</h3>
            <p>
              Interest rates may vary based on loan type, term, and applicant’s financial history. All fees, including origination, processing, and prepayment penalties (if applicable), will be disclosed prior to approval.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">3. Property Requirements</h3>
            <p>
              The property must meet local zoning and safety standards. It must also be located within eligible areas (currently: Texas and Florida).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">4. Repayment Terms</h3>
            <p>
              Monthly payments are required as per the loan schedule. Late payments may incur additional charges and negatively impact credit scores.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">5. Documentation</h3>
            <p>
              All borrowers must submit proof of income, bank statements, property documents, and other necessary paperwork during the application process.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">6. Privacy and Data Use</h3>
            <p>
              We value your privacy. All personal data collected is used solely for loan processing and is protected in compliance with data protection laws.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-2">7. Changes and Updates</h3>
            <p>
              We reserve the right to update these terms at any time without prior notice. Please check this page regularly for changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
