import React, { useRef, useState, useEffect } from "react";
import webImg from "../../assets/Service/web.png";
import appImg from "../../assets/Service/app.png";
import uiuxImg from "../../assets/Service/uiux.png";
import softImg from "../../assets/Service/software.png";
import cloudImg from "../../assets/Service/cloud.png";
import supportImg from "../../assets/Service/support.png";
import blockchainImg from "../../assets/Service/blockchain.png";
import aiImg from "../../assets/Service/ai.png";
import dataImg from "../../assets/Service/digital.png";

const items = [
  { img: webImg, title: "Web Development" },
  { img: appImg, title: "App Development" },
  { img: uiuxImg, title: "UI / UX Design" },
  { img: softImg, title: "Software Development" },
  { img: cloudImg, title: "Cloud Services" },
  { img: supportImg, title: "IT Support" },
  { img: blockchainImg, title: "Blockchain Solutions" },
  { img: aiImg, title: "AI & Machine Learning" },
  { img: dataImg, title: "Digital Marketing" },
];

export default function ServiceCarousel() {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(2);

  // Update centerIndex on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const itemWidth = 260 + 24; // item width + gap
    const index = Math.round(container.scrollLeft / itemWidth) + 2; // center adjustment
    setCenterIndex(index);
  };

  // Optional: Center the 3rd item on initial load
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = 260 + 24;
    container.scrollLeft = itemWidth * 2; // center 3rd item initially
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-10">
      {/* Heading */}
      <h1 className="text-5xl text-white text-center mb-20">
        Our Core Services
        <br />
        Scroll to discover each one
      </h1>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-scroll scrollbar-hide flex gap-6 snap-x snap-mandatory"
      >
        {items.map((item, index) => {
          const isCenter = index === centerIndex;

          return (
            <div
              key={index}
              className="snap-center flex-shrink-0 flex flex-col items-center transition-all duration-300"
              style={{
                width: isCenter ? "291px" : "256.5px",
              }}
            >
              {/* Image */}
              <div
                className="rounded-xl overflow-hidden shadow-md transition-all"
                style={{
                  width: isCenter ? "291px" : "256.5px",
                  height: isCenter ? "291px" : "256.5px",
                }}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>

              {/* Title */}
              <p className="text-center text-lg font-semibold mt-4 text-white mb-10">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
