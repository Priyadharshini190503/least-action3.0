import React from "react";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-black px-5 py-10 md:px-20 md:mb-10">
      <div
        className="
          relative w-full 
          h-[220px]        /* mobile */
          sm:h-[280px]     /* small tablets */
          md:h-[350px]     /* tablets */
          lg:h-[420px]     /* desktops */
          rounded-2xl 
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content inside image */}
        <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-xl text-center md:text-right px-3 md:pr-10">
          <h2 className="text-base sm:text-lg md:text-2xl leading-relaxed">
            Every Infoscion is the navigator of our clients <br /> digital
            transformation
          </h2>

          <button className="mt-4 px-4 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
