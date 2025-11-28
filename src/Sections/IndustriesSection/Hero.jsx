import React from "react";
import industries from '../../assets/industries.png';

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${industries})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <h1 className="relative text-white text-3xl md:text-5xl font-semibold text-center px-4 w-5xl">
        We do more than build tech — we build new possibilities. Keep scrolling to learn about our services.
      </h1>
    </section>
  );
};

export default Hero;
