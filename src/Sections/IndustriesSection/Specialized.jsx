import React from "react";
import icon from "../../assets/specialized.png"; // your icon

const data = [
  {
    title: "Life Sciences",
    description:
      "Telehealth platforms, predictive analytics, AI-powered diagnostic tools, and mobile solutions help boost patient engagement, support remote health monitoring, strengthen collaboration, and maintain secure data management systems.",
  },
  {
    title: "Education",
    description:
      "Innovative digital tools such as e-learning platforms, mobile education solutions, interactive assessments, and individualized progress tracking reshape education by enhancing accessibility, promoting engagement, assisting teachers, and empowering students.",
  },
  {
    title: "Retail",
    description:
      "Online shops, reward programs, intelligent suggestions, and digital engagement create seamless customer experiences, enhance relationships, boost sales, tailor interactions, and foster strong brand loyalty.",
  },
  {
    title: "Public Sector",
    description:
      "Reliable digital services, citizen engagement technologies, and data-driven systems boost transparency, refine governance, streamline public operations, raise efficiency, and provide inclusive, accessible solutions centered around citizens.",
  },
  {
    title: "Healthcare",
    description:
      "Advanced technologies like AI diagnostics, telemedicine, and remote monitoring are transforming healthcare. These solutions improve patient outcomes, reduce costs, and enable a shift toward preventive care, all while optimizing processes within medical organizations.",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Effortless booking systems, intelligent guest engagement platforms, and personalized recommendations elevate guest satisfaction, optimize operations, maximize resource utilization, enrich travel experiences, and deliver memorable hospitality services around the world.",
  },
];

const Specialized = () => {
  return (
    <div className="w-full bg-[#050505] text-white py-14 px-4 md:px-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-25">
        We are Specialized in these fields
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
{data.map((item, i) => {
  let radius = "";

  if (i < 2) {
    // TOP ROW (index 0, 1)
    radius = "rounded-t-3xl";
  } 
  else if (i >= 4) {
    // BOTTOM ROW (index 4, 5)
    radius = "rounded-b-3xl";
  } 
  else {
    // MIDDLE ROW (index 2, 3)
    radius = "rounded-none";
  }

  return (
    <div
      key={i}
      className={`
        relative border border-gray-600 p-6 bg-black/20 shadow-md transition
        ${radius}
      `}
    >
      {/* ICON */}
      <img
        src={icon}
        alt="icon"
        className={`
          w-22 h-22 absolute -top-12 
          ${i % 2 === 0 ? "left-20" : "right-20"}
          bg-[#050505] p-1 rounded-full border border-gray-700
        `}
      />

      {/* Title */}
      <h2 className=" xl:text-4xl md:text-2xl text-2xl font-semibold mt-4 mb-3 mt-10">{item.title}</h2>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed xl:text-2xl md:text-sm text-xs">{item.description}</p>
    </div>
  );
})}
      </div>
    </div>
  );
};

export default Specialized;
