import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


import img1 from "../../assets/agre.png";
import img3 from "../../assets/education.png";
import img4 from "../../assets/energy.png";
import img5 from "../../assets/health.png";
import img7 from "../../assets/log.png";
import img8 from "../../assets/publick.png";
import img9 from "../../assets/retail.png";
import img10 from "../../assets/tour.png";
import img11 from "../../assets/travel.png";


const data = [
  { id: 1, name: "Agriculture", icon: img1 },
  { id: 2, name: "Education", icon: img3 },
  { id: 3, name: "Energy", icon: img4 },
  { id: 4, name: "Health", icon: img5 },
  { id: 5, name: "Logistics", icon: img7 },
  { id: 6, name: "Public Sector", icon: img8 },
  { id: 7, name: "Retail", icon: img9 },
  { id: 8, name: "Tourism", icon: img10 },
  { id: 9, name: "Travel", icon: img11 },
];

const MobileIndustriesData = () => {
  const rowRefs = [useRef(null), useRef(null), useRef(null)];
  const tlRefs = useRef([]); // store animations

  useEffect(() => {
    const animateRow = (rowRef, speed = 50, reverse = false, index) => {
      const row = rowRef.current;
      if (!row) return;

      const rowChildren = Array.from(row.children);
      const rowWidth = rowChildren.reduce((acc, el) => acc + el.offsetWidth, 0);
      const containerWidth = row.parentElement.offsetWidth;

      const duplicateCount = Math.ceil(containerWidth / rowWidth) + 4;
      const originalHTML = row.innerHTML;
      for (let i = 0; i < duplicateCount; i++) {
        row.innerHTML += originalHTML;
      }

      const totalWidth = Array.from(row.children).reduce((acc, el) => acc + el.offsetWidth, 0);

      if (reverse) row.style.transform = `translateX(-${totalWidth / duplicateCount}px)`;

      const tl = gsap.to(row, {
        x: reverse
          ? `+=${totalWidth / duplicateCount}px`
          : `-=${totalWidth / duplicateCount}px`,
        duration: (totalWidth / duplicateCount) / speed,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            return reverse
              ? `${((val + totalWidth / duplicateCount) % (totalWidth / duplicateCount)) - totalWidth / duplicateCount}px`
              : `${(val % (totalWidth / duplicateCount)) - totalWidth / duplicateCount}px`;
          },
        },
      });

      tlRefs.current[index] = tl;

      // Pause animation when hovered
      row.addEventListener("mouseenter", () => tl.pause());
      row.addEventListener("mouseleave", () => tl.play());
    };

    animateRow(rowRefs[0], 50, false, 0);
    animateRow(rowRefs[1], 50, true, 1);
    animateRow(rowRefs[2], 50, false, 2);
  }, []);

  const renderRow = (rowData) =>
    rowData.map((item) => (
      <div
        key={item.id}
        className="flex-shrink-0 mx-4 relative group transition-transform duration-300"
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-40 h-32 lg:h-55 lg:w-88 object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-2xl"
        />
        {/* <p className="absolute bottom-0 left-0 bg-black/50 text-white text-sm px-2 py-1">
          {item.name}
        </p> */}
      </div>
    ));

  return (
    <div className="overflow-hidden pt-5 pb-5">
     
      <div className="flex flex-col space-y-0">
        <div ref={rowRefs[0]} className="flex whitespace-nowrap mb-4 cursor-pointer">
          {renderRow(data)}
        </div>
        <div ref={rowRefs[1]} className="flex whitespace-nowrap mb-4 cursor-pointer">
          {renderRow(data)}
        </div>
        <div ref={rowRefs[2]} className="flex whitespace-nowrap cursor-pointer">
          {renderRow(data)}
        </div>
      </div>
    </div>
  );
};

export default MobileIndustriesData;
