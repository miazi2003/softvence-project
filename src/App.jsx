import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import LoanProducts from './Component/LoanProducts/LoanProducts';
import WhereWeLand from './Component/Land/WhereWeLand';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LoanProducts></LoanProducts>
      <WhereWeLand></WhereWeLand>
    </div>
  );
};

export default App;