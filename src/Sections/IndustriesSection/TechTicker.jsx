import React from "react";
import Marquee from "react-fast-marquee";
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaPython, 
  FaFigma, FaGitAlt, FaCode
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFlutter, SiAdobexd, SiAdobeillustrator, 
  SiPostman, SiPycharm, SiCardano, SiPytorch, SiReact
} from "react-icons/si";

const techStacks = [
  { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-300 text-8xl" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400 text-8xl" />, name: "ReactJS" },
  { icon: <SiTailwindcss className="text-cyan-400 text-8xl" />, name: "TailwindCSS" },
  { icon: <FaNodeJs className="text-green-500 text-8xl" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-300 text-8xl" />, name: "Express" },
  { icon: <SiMongodb className="text-green-400 text-8xl" />, name: "MongoDB" },
  { icon: <FaBootstrap className="text-purple-500 text-8xl" />, name: "Bootstrap" },
  { icon: <SiFlutter className="text-blue-400 text-8xl" />, name: "Flutter" },
  { icon: <SiReact className="text-sky-400 text-8xl" />, name: "React Native" },
  { icon: <FaJava className="text-red-500 text-8xl" />, name: "Java" },
  { icon: <FaPython className="text-yellow-400 text-8xl" />, name: "Python" },
];

const techTools = [
  { icon: <FaFigma className="text-pink-500 text-8xl" />, name: "Figma" },
  { icon: <SiAdobeillustrator className="text-orange-400 text-8xl" />, name: "Adobe Illustrator" },
  { icon: <SiAdobexd className="text-pink-400 text-8xl" />, name: "Adobe XD" },
  { icon: <SiPostman className="text-orange-500 text-8xl" />, name: "Postman" },
  { icon: <FaCode className="text-blue-400 text-8xl" />, name: "VS Code" }, // ✅ Replaced missing icon
  { icon: <SiPycharm className="text-green-400 text-8xl" />, name: "PyCharm" },
  { icon: <SiCardano className="text-blue-300 text-8xl" />, name: "Cardano" },
  { icon: <SiPytorch className="text-orange-400 text-8xl" />, name: "PyTorch" },
  { icon: <FaGitAlt className="text-red-500 text-8xl" />, name: "Git" },
];

const TechItem = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 px-4 py-3 mx-3 min-w-[120px]">
    {icon}
    <span className="text-white font-semibold text-xl mt-2">{name}</span>
  </div>
);

const TechTicker = () => {
  return (
    <div className="w-full py-8 flex flex-col gap-4">

      <h1 className="text-white text-3xl md:text-5xl font-semibold text-center px-4 mx-auto mb-15">
  Elevating ideas with smart technology.
</h1>


      {/* Row 1 - Tech Stacks */}
      <Marquee gradient={false} speed={60} pauseOnHover autoFill>
        {techStacks.map((tech, index) => (
          <TechItem key={`stack-${index}`} icon={tech.icon} name={tech.name} />
        ))}
      </Marquee>

      {/* Row 2 - Tech Tools */}
      <Marquee gradient={false} speed={50} direction="right" pauseOnHover autoFill>
        {techTools.map((tool, index) => (
          <TechItem key={`tool-${index}`} icon={tool.icon} name={tool.name} />
        ))}
      </Marquee>

    </div>
  );
};

export default TechTicker;
