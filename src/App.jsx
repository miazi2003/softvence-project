import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import LoanProducts from './Component/LoanProducts/LoanProducts';
import WhereWeLand from './Component/Land/WhereWeLand';
import Review from './Component/Review/Review';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LoanProducts></LoanProducts>
      <WhereWeLand></WhereWeLand>
      <Review></Review>
    </div>
  );
};

export default App;