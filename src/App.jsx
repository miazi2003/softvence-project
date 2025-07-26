import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import LoanProducts from './Component/LoanProducts/LoanProducts';
import WhereWeLand from './Component/Land/WhereWeLand';
import Review from './Component/Review/Review';
import PastProjects from './Component/past projects/PastProjects';
import WorkingSection from './Component/working stations/WorkingStation';
import OtherResourcesSection from './Component/other resources/OtherResources';
import GetStartedSection from './Component/get started/GetStarted';
import Footer from './Component/Footer/Footer';
import WhyChoose from './Component/why choose/WhyChoose';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LoanProducts></LoanProducts>
      <WhereWeLand></WhereWeLand>
      <WhyChoose></WhyChoose>
      <Review></Review>
      <PastProjects></PastProjects>
      <WorkingSection></WorkingSection>
      <OtherResourcesSection></OtherResourcesSection>

      <Footer></Footer>
    </div>
  );
};

export default App;