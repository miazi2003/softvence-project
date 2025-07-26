import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import location from "../../assets/location.png"
import menu from "../../assets/ep_menu.png"
import car from "../../assets/ant-design_car-filled.png"
import bed from "../../assets/fa-solid_bed.png"
import bath from "../../assets/fa-solid_bath.png"
const projects = [
  {
    id: 1,
    title: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxFDFtr8u0MrftGGCD0k2s_N5gjc3hXv8HA&s",
    squareFeet: "2350",
    garages: "4",
    bedrooms: "2",
    bathrooms: "3",
    loanAmount: "$328,000",
    ltv: "84.65%",
    rate: "11.75%",
    term: "12 Months",
    price: "$3,45,000"
  },
  {
    id: 2,
    title: "742 Evergreen Terrace",
    location: "Springfield, USA",
    image: "https://hips.hearstapps.com/toc.h-cdn.co/assets/16/48/1480373892-screen-shot-2016-11-28-at-55748-pm.png?crop=0.8875809299587993xw:1xh;center,top&resize=1200:*",
    squareFeet: "3100",
    garages: "2",
    bedrooms: "4",
    bathrooms: "3",
    loanAmount: "$450,000",
    ltv: "80.15%",
    rate: "10.25%",
    term: "24 Months",
    price: "$5,20,000"
  },
  {
    id: 3,
    title: "11 Beacon Hill, Boston",
    location: "Boston, Massachusetts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIW3KAgvgVgYj8VIpvWhUX6-i5zdG66qqZQ&s",
    squareFeet: "2800",
    garages: "3",
    bedrooms: "3",
    bathrooms: "2",
    loanAmount: "$390,000",
    ltv: "79.80%",
    rate: "9.95%",
    term: "18 Months",
    price: "$4,95,000"
  },
  {
    id: 4,
    title: "88 Sunset Blvd",
    location: "Los Angeles, California",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSaPdVbMdAmU3IIj3Zde-FLdJveahrfG8CA&s",
    squareFeet: "3600",
    garages: "2",
    bedrooms: "5",
    bathrooms: "4",
    loanAmount: "$600,000",
    ltv: "82.40%",
    rate: "10.55%",
    term: "36 Months",
    price: "$7,25,000"
  },
  {
    id: 5,
    title: "Ocean View Resort",
    location: "Malibu, California",
    image: "https://www.esperiri.com/wp-content/uploads/2021/06/5-star-hotels-in-excelsior-bedroom-interior.jpg",
    squareFeet: "4000",
    garages: "5",
    bedrooms: "6",
    bathrooms: "5",
    loanAmount: "$890,000",
    ltv: "85.75%",
    rate: "12.25%",
    term: "48 Months",
    price: "$1,200,000"
  },
  {
    id: 6,
    title: "Luxury Modern Villa",
    location: "Palm Beach, Florida",
    image: "https://materiacollection.com/wp-content/uploads/2023/05/MATERIA-Collection-2023-slider-photos-3.webp",
    squareFeet: "3900",
    garages: "3",
    bedrooms: "4",
    bathrooms: "4",
    loanAmount: "$720,000",
    ltv: "81.00%",
    rate: "11.15%",
    term: "30 Months",
    price: "$980,000"
  },
  {
    id: 7,
    title: "Urban Penthouse",
    location: "New York City, NY",
    image: "https://img.freepik.com/premium-photo/luxurious-interior-design-lounge-area-five-stars-luxury-hotel-interior-design-3d-rendering_295714-3588.jpg",
    squareFeet: "2600",
    garages: "2",
    bedrooms: "3",
    bathrooms: "3",
    loanAmount: "$650,000",
    ltv: "78.85%",
    rate: "9.85%",
    term: "24 Months",
    price: "$860,000"
  },
  {
    id: 8,
    title: "Modern Luxe Residence",
    location: "Chicago, Illinois",
    image: "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/06/Cover-Inspiration-1-3-1024x683.png",
    squareFeet: "3000",
    garages: "3",
    bedrooms: "4",
    bathrooms: "3",
    loanAmount: "$560,000",
    ltv: "82.20%",
    rate: "10.95%",
    term: "36 Months",
    price: "$750,000"
  },
  {
    id: 9,
    title: "Grand Royal Lobby Home",
    location: "San Diego, California",
    image: "https://img.freepik.com/premium-photo/interior-five-star-hotel-lobby-3d-rendering_295714-3893.jpg",
    squareFeet: "4200",
    garages: "4",
    bedrooms: "5",
    bathrooms: "4",
    loanAmount: "$970,000",
    ltv: "88.00%",
    rate: "13.25%",
    term: "60 Months",
    price: "$1,450,000"
  },
  {
    id: 10,
    title: "Prestige Lounge Suite",
    location: "Atlanta, Georgia",
    image: "https://media.istockphoto.com/id/1333257934/photo/3d-render-of-a-hotel-waiting-lounge-with-sofa-and-armchair.jpg?s=612x612&w=0&k=20&c=_eaLqdLzuDE8-921VGZY6oujnev5NNieNMiH0mlPo8g=",
    squareFeet: "3100",
    garages: "3",
    bedrooms: "3",
    bathrooms: "2",
    loanAmount: "$460,000",
    ltv: "77.50%",
    rate: "9.50%",
    term: "24 Months",
    price: "$635,000"
  },
  {
    id: 11,
    title: "Dream Suite Downtown",
    location: "Houston, Texas",
    image: "https://i.ytimg.com/vi/A83syCB5LJs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDm4CMGCOUWYmO7LRqnZKQsIn7YnA",
    squareFeet: "3500",
    garages: "3",
    bedrooms: "4",
    bathrooms: "3",
    loanAmount: "$530,000",
    ltv: "80.90%",
    rate: "10.40%",
    term: "36 Months",
    price: "$700,000"
  },
  {
    id: 12,
    title: "Elegant Bedroom Escape",
    location: "Scottsdale, Arizona",
    image: "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww",
    squareFeet: "2800",
    garages: "2",
    bedrooms: "3",
    bathrooms: "2",
    loanAmount: "$410,000",
    ltv: "79.40%",
    rate: "10.10%",
    term: "30 Months",
    price: "$600,000"
  }
];



const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [cardHeight, setCardHeight] = useState("h-[380px]");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerPage(1);
        setCardHeight("h-[340px]");
      } else if (window.innerWidth < 1024) {
        setPerPage(2);
        setCardHeight("h-[360px]");
      } else {
        setPerPage(3);
        setCardHeight("h-[380px]");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / perPage);
  const startIndex = currentSlide * perPage;
  const visibleProjects = projects.slice(startIndex, startIndex + perPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">

      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="hidden sm:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-2xl hover:bg-gray-200 font-bold py-2 px-4 rounded-full disabled:opacity-40 transition shadow-md"
        aria-label="Previous projects"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={handleNext}
        disabled={currentSlide >= totalSlides - 1}
        className="hidden sm:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-2xl hover:bg-gray-200 font-bold py-2 px-4 rounded-full disabled:opacity-40 transition shadow-md"
        aria-label="Next projects"
      >
        <MdOutlineArrowForwardIos />
      </button>

   
      <div className="flex justify-center gap-4 mt-6 sm:hidden">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full disabled:opacity-40 transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide >= totalSlides - 1}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full disabled:opacity-40 transition"
        >
          →
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16 lg:px-18">
        {visibleProjects.map((review) => (
    <div
  key={review.id}
  className={`min-h-[450px] bg-white rounded-[10px] shadow-3xl text-center relative flex flex-col`}
>
  
  <div>
    <div className="lg:h-[200px] shadow-lg rounded-tr-[10px] rounded-tl-[10px] overflow-hidden">
      <img
        src={review.image}
        alt={review.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150?text=Image";
        }}
      />
    </div>
  </div>

  
  <div className="pt-4 px-4 pb-5 flex-grow flex flex-col text-left">
    <h3 className="text-base font-semibold text-[#175730] mb-1 text-center">{review.title}</h3>
    <p className="text-sm text-gray-500 mb-2 text-center flex items-center gap-1 justify-center"> <img src={location} alt="" />  {review.location}</p>

        <div className="border border-gray-300 w-full mb-2"></div>
    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
      <p className=" flex items-center gap-2"><img src={menu} alt="" className="h-4 w-4" /> {review.squareFeet} Sq Ft</p>
      <p className=" flex items-center gap-2"><img src={car} alt=""  className="h-4 w-4"/> {review.garages} Garages</p>
      <p className=" flex items-center gap-2"><img src={bed} alt=""  className="h-4 w-4"/> {review.bedrooms} Bedrooms</p>
      <p className=" flex items-center gap-2"><img src={bath} alt="" className="h-4 w-4" /> {review.bathrooms} Bathrooms</p>
    </div>

    <div className="border border-gray-300 w-full mb-2"></div>

    <div className="text-[12px] text-gray-500 space-y-1 mb-4 grid md:grid-cols-2 grid-cols-1 ">
      <p>• Loan: <strong>{review.loanAmount}</strong></p>
      <p>• LTV: <strong>{review.ltv}</strong> </p>
     <p>• Rate: <strong>{review.rate}</strong></p>
      <p>• Term: <strong>{review.term}</strong></p>
    </div>


    <div className="flex-grow" />
  </div>


  <div className="bg-[#114a28] text-white text-center py-3 rounded-b-[10px] font-bold text-base">
    {review.price}
  </div>
</div>


        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;