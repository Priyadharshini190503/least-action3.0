import React from "react";
import project from "../../assets/project.png";
import services from "../../assets/services.png";
import team from "../../assets/team.png";
const Impact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-3">
        How We Create Impact
      </h2>
      <p className="text-lg md:text-xl text-gray-300 font-medium mb-12">
        Driving growth through innovation and technology.
      </p>

      {/* Paragraphs */}
      <div className="max-w-5xl mx-auto space-y-8 text-justify text-lg md:text-xl leading-relaxed text-gray-200">
        <p>
          At Least Action, we provide proactive and results-driven solutions
          that empower your business to thrive in the digital landscape. From
          website development to AI and machine learning, we build tailored,
          high-impact systems aligned with your strategic goals. With our
          expertise, your vision evolves into a powerful, scalable reality.
        </p>

        <p>
          At Least Action delivers high-impact digital solutions through
          AI-powered tools, intuitive websites, and performance-driven mobile
          applications. By combining innovation, craftsmanship, and reliability,
          we transform ideas into meaningful digital experiences—consistently
          exceeding expectations and bringing every vision to life with
          excellence.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20 max-w-4xl mx-auto">
        {/* Projects */}
        <div className="flex flex-col items-center">
          <img
            src={project}
            alt="Projects Icon"
            className="w-14 mb-4"
          />
          <h3 className="text-5xl font-bold">120+</h3>
          <p className="text-gray-300 mt-2 tracking-wide text-sm">PROJECTS</p>
        </div>

        {/* Service */}
        <div className="flex flex-col items-center">
          <img
            src={services}
            alt="Service Icon"
            className="w-14 mb-4"
          />
          <h3 className="text-5xl font-bold">90%</h3>
          <p className="text-gray-300 mt-2 tracking-wide text-sm">SERVICE</p>
        </div>

        {/* Team Size */}
        <div className="flex flex-col items-center">
          <img
            src={team}
            alt="Team Icon"
            className="w-14 mb-4"
          />
          <h3 className="text-5xl font-bold">50+</h3>
          <p className="text-gray-300 mt-2 tracking-wide text-sm">
            TEAM SIZE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
