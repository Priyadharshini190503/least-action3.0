import React from "react";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-black px-30 py-30">
        <div
      className="relative w-full h-[420px] rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      {/* Content */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white max-w-xl text-center pr-10">
        <h2 className="text-xl md:text-2xl leading-relaxed">
          Every Infoscion is the navigator of our clients <br /> digital
          transformation
        </h2>

        <button className="mt-5 px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300">
          Contact Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
