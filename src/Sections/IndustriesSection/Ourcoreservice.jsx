import React, { useRef, useEffect, useState } from "react";

import webImg from "../../assets/Service/web.png";
import appImg from "../../assets/Service/app.png";
import uiuxImg from "../../assets/Service/uiux.png";
import softImg from "../../assets/Service/software.png";
import cloudImg from "../../assets/Service/cloud.png";
import supportImg from "../../assets/Service/support.png";
import blockchainImg from "../../assets/Service/blockchain.png";
import aiImg from "../../assets/Service/ai.png";
import digiImg from "../../assets/Service/digital.png";

const OurCoreService = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const services = [
    { title: "Web Development", img: webImg },
    { title: "App Development", img: appImg },
    { title: "UI / UX Design", img: uiuxImg },
    { title: "Software Development", img: softImg },
    { title: "Cloud Services", img: cloudImg },
    { title: "IT Support", img: supportImg },
    { title: "Blockchain Solutions", img: blockchainImg },
    { title: "AI / ML", img: aiImg },
    { title: "Digital Marketing", img: digiImg },
  ];

  // Center 3rd card initially
  useEffect(() => {
    const container = scrollRef.current;
    const items = container.querySelectorAll(".carousel-item");
    if (items.length > 0) {
      const target = items[2];
      container.scrollLeft =
        target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2;
    }
  }, []);

  // Detect active card on scroll
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      const items = container.querySelectorAll(".carousel-item");
      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white px-4 md:px-10 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Our Core Services
      </h2>
      <p className="text-center text-lg mt-2 mb-10">
        Scroll to discover each one
      </p>

      <div className="overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-scroll scrollbar-hide w-full py-6"
        >
          {services.map((item, index) => {
            const distance = Math.abs(index - activeIndex);

            // SCALE LOGIC
            let scale = 1;
            let size = 256.5; // default side card size
            if (distance === 0) {
              scale = 1; // no extra scaling
              size = 291; // center card size
            } else if (distance === 1) {
              scale = 1;
            } else if (distance === 2) {
              scale = 0.9;
            }

            // Only show 5 cards initially
            let opacity = distance <= 2 ? 1 : 0;
            let pointerEvents = opacity === 1 ? "auto" : "none";

            return (
              <div
                key={index}
                className="carousel-item flex flex-col items-center min-w-[20%] transition-all duration-300"
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  pointerEvents,
                }}
              >
                <div
                  className="rounded-xl overflow-hidden shadow-2xl"
                  style={{ width: size, height: size }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-center text-lg font-semibold">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCoreService;
