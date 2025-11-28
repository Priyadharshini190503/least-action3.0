import React from "react";
import logistics from "../../assets/images/logistics.png";
import agri from "../../assets/images/agriculture.png";
import finance from "../../assets/images/finance.png";
import energy from "../../assets/images/energy.png";
import manu from "../../assets/images/manu.png";
import media from "../../assets/images/media.png";
const industries = [
  {
    title: "Logistics & Distribution",
    image: logistics,
    description:
      "Real-time tracking, IoT monitoring, automation, and predictive analytics help make warehouse operations more efficient, improve delivery speed, strengthen logistics networks, and support a sustainable supply chain.",
  },
  {
    title: "Agriculture",
    image: agri,
    description:
      "IoT-based crop monitoring, precision farming, and data analytics are transforming agriculture. These technologies empower farmers with actionable insights to optimize yields, improve efficiency, reduce waste, and promote sustainable practices.",
  },
  {
    title: "Finance",
    image:finance,
    description:
      "Digital banking, robust fraud detection, and innovative investment platforms are modernizing finance. By ensuring secure transactions and streamlining operations, these technologies mitigate risks and build customer trust.",
  },
  {
    title: "Energy",
    image: energy,
    description:
      "Smart grids, renewable energy monitoring, and automation technologies are transforming energy distribution worldwide. These solutions enhance consumption efficiency, reduce waste, and improve sustainability.",
  },
  {
    title: "Manufacturing",
    image: manu,
    description:
      "Predictive maintenance, process automation, quality control, and data-driven insights are optimizing manufacturing operations. These technologies reduce downtime, improve efficiency, and increase productivity.",
  },
  {
    title: "Media & Entertainment",
    image: media,
    description:
      "Streaming platforms are redefining entertainment through personalization, interactive content, and immersive media. These technologies enhance user engagement and deliver innovative digital experiences.",
  },
];

const Success = () => {
  return (
    <div className="w-full text-white py-16 px-5 md:px-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-center mb-14 leading-snug">
        Turning real-world industry hurdles  
        <br className="hidden md:block" />
        into measurable success
      </h1>

      {/* Content List */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {industries.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start gap-6 bg-black/30 p-5 rounded-xl backdrop-blur-md"
          >
            {/* Left Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-70 h-55 object-cover rounded-md shadow-lg"
            />

            {/* Right Content */}
            <div>
              <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 xl:text-2xl md:text-sm lg:text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
