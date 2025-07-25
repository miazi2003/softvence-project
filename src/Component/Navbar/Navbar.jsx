import React from 'react';

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-[154px] flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <span className="text-green-900 font-bold text-lg tracking-wide">RIDGE</span>
            <span className="text-gray-500 font-bold text-lg tracking-wide">STREET</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Fix and Flip</a>
            <a href="#" className="hover:text-black">Rental Loans</a>
            <a href="#" className="hover:text-black">Where We Lend</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Resources</a>
          </div>
          <div className="hidden md:block">
            <a href="#" className="bg-green-900 hover:bg-green-800 text-white text-sm font-semibold py-2 px-5 rounded-md shadow-md">
              GET APPROVED ONLINE
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;