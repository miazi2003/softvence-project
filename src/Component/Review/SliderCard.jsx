import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
       
import { MdOutlineArrowForwardIos } from "react-icons/md";
const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "I had a great experience applying for a loan here. The process was fast and straightforward, and the support team answered all my questions clearly. I appreciated their honesty—no hidden fees or surprises. The funds arrived quickly!"},
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "The application was simple, and I got approved within a day. Their customer support was friendly and helpful throughout the process. I felt confident and well-informed at every step. A trustworthy company I would use again."
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "I needed quick funding for a renovation, and this company delivered. The process was smooth, transparent, and fast. They kept me updated and explained everything clearly. I’m very satisfied and will recommend them."
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Their service was fast and easy to use. I appreciated how clear the terms were and how quickly I got my funds. The support team was always available to answer my questions. Would use again without hesitation."
  },
  {
    id: 5,
    name: "Chris Evans",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "As a small business owner, this company helped me manage cash flow with quick and fair loans. The team was responsive and professional, making the entire process hassle-free. Highly recommended."
  },
  {
    id: 6,
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "I was impressed by their personal attention and clear communication. The application was easy, and funds arrived fast. They truly care about their customers and provide excellent service."
  },
  {
    id: 7,
    name: "Liam Turner",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "I found the loan process fast, transparent, and customer-friendly. They helped me choose the best repayment plan and kept me informed throughout. Great experience overall."
  },
  {
    id: 8,
    name: "Olivia Harris",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "I appreciated the transparency and speed of their service. The website was easy to use, and the team was helpful with every question. Funds arrived quickly and as promised."
  },
  {
    id: 9,
    name: "Noah Wilson",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    text: "The support team was caring and responsive. They made a stressful time easier by offering quick funding and clear guidance. The repayment options were flexible, too."
  },
  {
    id: 10,
    name: "Isabella Moore",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "This company made borrowing easy and stress-free. The approval was quick, the terms were fair, and the team was friendly and supportive from start to finish."
  },
  {
    id: 11,
    name: "James Anderson",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "I got fast access to funds when I needed it most. The team was professional and kept me informed every step of the way. No surprises, just honest service."
  },
  {
    id: 12,
    name: "Mia Thompson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Their quick and transparent loan process helped me cover an unexpected expense. The team was supportive and communicated clearly. I highly recommend this company."
  }
];

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / perPage);
  const startIndex = currentSlide * perPage;
  const visibleReviews = reviews.slice(startIndex, startIndex + perPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
 

      {/* Desktop arrows - positioned vertically center left/right */}
      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="hidden sm:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-2xl hover:bg-gray-400 font-bold py-2 px-4 rounded-full disabled:opacity-40 transition"
        aria-label="Previous reviews"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={handleNext}
        disabled={currentSlide >= totalSlides - 1}
        className="hidden sm:flex absolute top-1/2 -right-6 transform -translate-y-1/2  text-2xl hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full disabled:opacity-40 transition"
        aria-label="Next reviews"
      >

<MdOutlineArrowForwardIos />
      </button>

      {/* Mobile arrows - shown at bottom center */}
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

      {/* Review cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-24 md:mt-18">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/70 p-6 rounded-[20px] shadow-2xl text-center  relative"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto -mt-16 object-cover border-2 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold mt-4">{review.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
