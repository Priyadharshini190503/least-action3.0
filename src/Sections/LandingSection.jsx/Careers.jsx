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
        <div className="text-center lg:w-1/2">
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold text-[#1B1B1B] mb-6">
            Careers
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10">
            Every Infoscion is the navigator of our clients<br />
            digital transformation
          </p>

          {/* Apply Button */}
          <button className="flex items-center justify-center gap-4 bg-black text-white  px-1 rounded-full text-xl font-medium hover:bg-gray-800 transition mx-auto ">
            <h1 className="px-20 py-4 justify">Apply Now</h1>
            <span className="w-12 h-12 flex items-center justify-center border-2 bg-white text-black rounded-full text-2xl">
              &gt;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
