import React, { useState } from "react";
import mobileApp from "../../assets/portfolio/android1.jpg";
import shopping from "../../assets/portfolio/static1.jpg";
import tourism from "../../assets/portfolio/tourism.jpg";
import aiagent from "../../assets/portfolio/aiagent.webp";
import medical from "../../assets/portfolio/medical.jpg";
import nutrition from "../../assets/portfolio/nutrition.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import arrow from "../../assets/arrow.png";
import por1 from "../../assets/por1.png";

const projects = [
  { title: "Shopping Website", link: shopping },
  { title: "Mobile & App Development", link: mobileApp },
  { title: "Tourism Website", link: tourism },
  { title: "AI Agent", link: aiagent },
  { title: "Medical Website", link: medical },
  { title: "Nutrition Website", link: nutrition },
];

// --------------------------
// Project Item Component
// --------------------------
const ProjectItem = ({ title, image, isLeftText }) => (
  <div
    className={`flex w-full mx-auto mb-8 md:mb-12 
      gap-0 lg:gap-8
      flex-col-reverse lg:flex-row 
      h-auto lg:h-[350px]
      ${isLeftText ? "lg:flex-row" : "lg:flex-row-reverse"}`}
  >
    {/* Text Box */}
    <div
  className="
    w-full lg:w-2/5 
    p-4 md:p-8 lg:p-10 
    relative 
    bg-white lg:bg-transparent
    rounded-none 
    lg:rounded-tl-[80px] lg:rounded-bl-[10px] 
    lg:rounded-tr-[10px] lg:rounded-br-[80px]
    flex flex-col justify-end   /* ⬅ pushes content to bottom */
    h-[140px] md:h-[180px] lg:h-auto
  "
  style={{
    backgroundImage: `url(${por1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
  }}
>
  {/* Title bottom-left */}
 <h3 className="font-bold text-2xl md:text-3xl lg:text-2xl leading-tight text-left w-[180px] md:w-[240px]">
  {title}
</h3>


  {/* Arrow bottom-right */}
  <div
    className="
      absolute 
      bottom-3 right-4 
      xl:bottom-1 xl:right-6
      w-12 h-12 
      xl:w-15 xl:h-15
      bg-gray-300 
      rounded-full 
      flex items-center justify-center 
      cursor-pointer shadow-md 
      hover:scale-110 transition-transform
    "
  >
    <img src={arrow} alt="arrow" className="w-5 h-5 xl:w-8 xl:h-8" />
  </div>
</div>


    {/* Image Section */}
    <div className="w-full lg:w-3/5 h-[220px] md:h-[280px] lg:h-full shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="
          object-cover w-full h-full 
          rounded-none 
          lg:rounded-4xl
        "
        draggable={false}
      />
    </div>
  </div>
);


// --------------------------
// Main Portfolio Component
// --------------------------
export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="min-h-screen p-6 lg:px-10 xl:p-6">
      {/* Header */}
      <div className="text-center mb-10 p-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Portfolio And Case Studies
        </h1>
        <p className="text-sm md:text-base max-w-xl mx-auto opacity-70">
          Real Projects, Real Results Powered by Least Action
        </p>
      </div>

      {/* Projects Section */}
      <section className="space-y-6 md:space-y-12 max-w-6xl mx-auto">
        {visibleProjects.map((project, idx) => (
          <ProjectItem
            key={idx}
            title={project.title}
            image={project.link}
            isLeftText={idx % 2 === 0} // alternate on desktop only
          />
        ))}

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold border border-white rounded-full px-6 py-3 bg-white text-black transition"
          >
            {showAll ? "Show Less" : "View More Works"}
            <img src={arrow} alt="" className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
