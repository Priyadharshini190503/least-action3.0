import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import brand1 from "../../assets/client/brand1.png";
import brand2 from "../../assets/client/brand2.png";
import brand3 from "../../assets/client/brand3.png";
import brand4 from "../../assets/client/brand4.png";
import brand5 from "../../assets/client/brand5.jpg";
import brand6 from "../../assets/client/brand6.png";
import brand7 from "../../assets/client/brand7.png";

function Testimonial() {
  const brands = [
    { src: brand1, alt: "Book My Services" },
    { src: brand2, alt: "City Wash" },
    { src: brand3, alt: "Vellore vegan" },
    { src: brand4, alt: "Star DMC" },
    { src: brand5, alt: "Anandham Cabs" },
    { src: brand6, alt: "Milo Cabs" },
    { src: brand7, alt: "Stay Good" },
  ];

  const testimonials = [
    {
      text1: "Least Action's Product sprint cut out prototype time in half",
      text2: "Their AI recommendations were spot on.",
      author: "-Asha Menon, Head of Product, Nimbus Labs",
    },
    {
      text1: "The team's agile process helped us launch faster than expected.",
      text2: "Communication and delivery were excellent.",
      author: "-Rahul Sharma, CTO, TechVantage",
    },
    {
      text1: "They understood our vision perfectly and delivered top quality.",
      text2: "Highly recommend Least Action for digital innovation.",
      author: "-Sneha Patel, Founder, GreenSpace",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  // ✅ Auto-scroll brands (unchanged)
  useEffect(() => {
    let animation;
    const scrollContainer = scrollRef.current;
    const step = () => {
      if (!paused && autoScroll && scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animation = requestAnimationFrame(step);
    };
    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [paused, autoScroll]);

  // ✅ Auto-change testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // ✅ Manual navigation (arrows)
  const moveLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const moveRight = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="overflow-hidden py-8">
      {/* ===== Heading ===== */}
      <div className="text-center px-4 text-white">
        <h1 className="text-3xl md:text-3xl font-bold leading-snug p-4 ">
          Testimonial
        </h1>
        <p className="text-lg md:text-xl lg:text-xl xl:text-3xl font-medium leading-snug font-sans transition-all duration-700 ease-in-out">
          {testimonials[currentIndex].text1}
        </p>
        <p className="text-lg md:text-xl lg:text-xl xl:text-3xl font-medium leading-snug font-sans transition-all duration-700 ease-in-out">
          {testimonials[currentIndex].text2}
        </p>
        <p className="text-lg md:text-xl lg:text-xl xl:text-3xl font-medium leading-snug font-sans p-2 transition-all duration-700 ease-in-out">
          {testimonials[currentIndex].author}
        </p>
      </div>

      {/* ===== Brand Slider ===== */}
      <div className="relative w-full text-white">
        {/* Desktop Buttons */}
        <button
          onClick={moveLeft}
          className="hidden sm:block absolute left-8 lg:left-20 top-[-70px] 2xl:left-80 -translate-y-1/2 rounded-xl active:scale-90 transition"
        >
          <span className="w-12 h-12 flex items-center justify-center border-2 bg-white text-black rounded-full text-2xl font-bold">
  &lt;
</span>

        </button>

        <button
          onClick={moveRight}
          className="hidden sm:block absolute right-8 top-[-70px] lg:right-20 2xl:right-80 -translate-y-1/2 rounded-xl active:scale-90 transition"
        >
          <span className="w-12 h-12 flex items-center justify-center border-2 bg-white text-black rounded-full text-2xl font-bold">
              &gt;
            </span>
        </button>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden justify-center items-center gap-16 mt-4 text-white">
          <button onClick={moveLeft} className="active:scale-90 transition">
            <FaArrowLeft size={20} />
          </button>
          <button onClick={moveRight} className="active:scale-90 transition">
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Scrollable Brand Row */}
        <div
          ref={scrollRef}
          className="flex space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-14 py-6 sm:py-8 scroll-smooth overflow-x-scroll scrollbar-hide"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setAutoScroll(true);
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              title={brand.alt}
              className="object-contain transition-transform duration-300 hover:scale-[1.05] sm:h-16 md:h-20 lg:h-23 rounded-[18px]"
              style={{ height: "auto", maxHeight: "180px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
