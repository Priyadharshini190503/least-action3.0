import React from "react";
import ServiceCard from "./ServiceCard";

import webImg from "../../assets/Service/web.png";
import appImg from "../../assets/Service/app.png";
import uiuxImg from "../../assets/Service/uiux.png";
import softImg from "../../assets/Service/software.png";
import cloudImg from "../../assets/Service/cloud.png";
import supportImg from "../../assets/Service/support.png";
import blockchainImg from "../../assets/Service/blockchain.png";
import aiImg from "../../assets/Service/ai.png";
import digiImg from "../../assets/Service/digital.png";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites that strengthen your digital presence. From high-impact landing pages to full-scale web applications, our team delivers seamless performance and modern, user-centric design.",
    img: webImg,
  },
  {
    title: "App Development",
    description:
      "Least Action builds powerful, user-focused mobile apps that fit your business needs. We deliver seamless, scalable experiences across iOS, Android, and cross-platform solutions smooth performance, modern design.",
    img: appImg,
  },
  {
    title: "UI / UX Design",
    description:
      "We craft visually stunning, ultra-intuitive interfaces that keep users hooked. Every design is built with sharp usability, strong accessibility, and an user World class experience that feels effortless from the very first tap.",
    img: uiuxImg,
  },
  {
    title: "Software Development",
    description:
      "At least action We Develop software solutions tailored to your workflows and business goals. We build scalable, future-ready systems that boost productivity, streamline operations, and drive long-term efficiency.",
    img: softImg,
  },
  {
    title: "Cloud Services",
    description:
      "The full power of cloud computing to scale your business with ease. We handle seamless migration, secure deployment, and reliable maintenance across AWS, Azure, and GCP, ensuring performance, flexibility, and growth.",
    img: cloudImg,
  },
  {
    title: "IT Support & Maintenance",
    description:
      "Keep your systems running at their best with proactive monitoring and expert troubleshooting. Our team ensures maximum uptime, fortified security, and smooth, hassle-free operations—every single day.",
    img: supportImg,
  },
  {
    title: "Blockchain Solutions",
    description:
      "At Least Action We build secure, transparent, and decentralized solutions powered by blockchain. From smart contracts to crypto wallets, we bring cutting-edge blockchain innovation directly into your business.",
    img: blockchainImg,
  },
  {
    title: "AI / ML",
    description:
      "Unlock powerful insights with AI and machine learning. Automate workflows, analyze complex data, and predict future trends with intelligent, cutting-edge solutions built to accelerate your business.",
    img: aiImg,
  },
  {
    title: "Digital Marketing",
    description:
      "Unlock powerful insights with AI and machine learning. Automate workflows, decode complex data, and forecast future trends with intelligent, high-performance solutions engineered to accelerate your business.",
    img: digiImg,
  },
];

const AllService = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 space-y-10">
      {services.map((service, i) => (
        <ServiceCard
          key={i}
          title={service.title}
          description={service.description}
          img={service.img}
          reverse={i % 2 === 1} // 🔥 zig-zag layout
        />
      ))}
    </section>
  );
};

export default AllService;
