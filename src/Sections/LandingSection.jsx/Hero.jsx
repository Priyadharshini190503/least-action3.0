import React, { useState, useEffect } from "react";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

const slides = [
  {
    image: hero1,
    smallTitle: "AI Solution | Web & Mobile",
    bigTitle: "We Develop",
    description:
      "We create intelligent AI systems, modern websites, and seamless mobile applications that enhance everyday life and deliver meaningful results.",
  },
  {
    image: hero2,
    smallTitle: "Bring your ideas into tech reality",
    bigTitle: "Web & Mobile Development",
    description:
      "We build scalable, user-friendly websites and applications with top-notch performance and clean design.",
  },
  {
    image: hero3,
    smallTitle: "Future-Ready Intelligence",
    bigTitle: "Smart AI Agents",
    description:
      "We design AI-driven automation tools that simplify decision-making and accelerate your business growth.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // auto switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center relative transition-all duration-700"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* TEXT CONTENT */}
      <div className=" px-8 text-white">
        <h2 className="text-2xl max-w-3xl md:text-3xl font-light mb-3">
          {slide.smallTitle}
        </h2>

        <h1 className="text-4xl max-w-4xl md:text-6xl font-bold mb-6">
          {slide.bigTitle}
        </h1>

        <p className="text-lg max-w-3xl md:text-xl text-gray-200 mb-10">
          {slide.description}
        </p>

        <button className="bg-white text-black px-1 rounded-full flex items-center gap-6 text-lg font-medium hover:bg-gray-200 transition">
          <h1 className="px-3 py-3">Get Started</h1>
          <span className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full text-2xl">
            &gt;
          </span>
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              current === index ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
