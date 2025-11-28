import React from "react";
import arrow from "../../assets/arrow.png";

const ServiceCard = ({ title, description, img, reverse }) => {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-5 
        rounded-[40px] overflow-hidden 
        shadow-lg gap-8 md:gap-12 lg:gap-8 xl:16
      `}
    >
      {/* Image Section */}
      <div
        className={`
          w-full h-64 lg:h-100
          ${reverse ? "md:order-2 md:col-span-3" : "md:order-1 md:col-span-3"}
        `}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>

      {/* Content Section */}
      <div
        className={`
          p-6 lg:p-10 
          bg-white flex flex-col justify-between 
          rounded-[40px] 
          ${reverse ? "md:order-1 md:col-span-2" : "md:order-2 md:col-span-2"}
        `}
      >
        <div>
          <h3 className="text-2xl md:text-sm lg:text-3xl xl:text-3xl font-bold leading-tight">
            {title}
          </h3>
          <p className="mt-3 text-gray-700 text-lg md:text-xs lg:text-[15px] xl:text-xl text-justify leading-relaxed">
            {description}
          </p>
        </div>

        <button
  className="
    mt-5 border border-black 
    px-5 py-2 md:py-0 lg:py-2 rounded-full 
    text-sm md:text-sm lg:text-base font-medium 
    flex items-center gap-2 
    transition
    w-fit
  "
>
  Know More
  <img className="h-3 w-3 md:h-2 md:w-2 lg:h-4 lg:w-4" src={arrow} alt="arrow" />
</button>

      </div>
    </div>
  );
};

export default ServiceCard;
