import React from "react";
import careersImg from "../../assets/careers.png";

const Careers = () => {
  return (
    <section className="bg-[#E9ECF1] py-20 px-6 md:px-16 rounded-t-[40px] mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT — Image with special rounded shape */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={careersImg}
            alt="Careers"
            className="w-full h-auto object-cover rounded-[60px]"
            style={{
              borderTopLeftRadius: "120px",
              borderBottomRightRadius: "120px",
            }}
          />
        </div>

        {/* RIGHT — Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1B1B1B] mb-6">
            Careers
          </h1>

          <p className="text-lg md:text-xl text-[#3D3D3D] leading-relaxed mb-10">
            Every Infoscion is the navigator of our clients<br />
            digital transformation
          </p>

          {/* Apply Button */}
          <button className="flex items-center justify-center gap-4 bg-black text-white px-10 py-4 rounded-full text-xl font-medium hover:bg-gray-800 transition mx-auto lg:mx-0">
            Apply Now
            <span className="w-8 h-8 flex items-center justify-center border-2 bg-white text-black rounded-full">
              &gt;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
