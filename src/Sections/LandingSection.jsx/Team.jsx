import React from "react";
import founder from "../../assets/founder1.png";
import vishnu from "../../assets/vishnu1.png";
import prabhu from "../../assets/prabhu.jpg";
import maha from "../../assets/maha.jpg";

const teamData = [
  { name: "G GOPINATH", role: "Founder & CEO", img: founder },
  { name: "K ADHIVISHNU", role: "CTO & COO", img: vishnu },
  { name: "Dr. M Prabhu", role: "Co-Founder | Advisor", img: prabhu },
  { name: "S Mahalakshmi", role: "Co-Founder | Business Development", img: maha },
];

const Team = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">The People Who Drive Our Impact</h2>
        <p className="text-gray-300 mt-3 text-lg">About the Team Behind Least Action</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teamData.map((member, index) => (
          <div key={index} className="relative rounded-3xl overflow-hidden pb-16 flex flex-col">
            
            <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />

            <div className="absolute w-full bottom-4 left-1/2 -translate-x-1/2 bg-white text-black text-center px-6 py-3 rounded-[25px] shadow-md w-[85%]">
              <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
              <p className="text-sm mt-1">{member.role}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Team;
