import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ECEFF3] rounded-t-[46px] w-full px-5 sm:px-8 md:px-10 lg:px-14 py-12 sm:py-14 text-black flex justify-center">

      <div
        className="
          w-full max-w-7xl mx-auto 
          flex flex-col 
          md:flex-row 
          justify-between 
          items-start 
          gap-10 sm:gap-12 md:gap-16 lg:gap-20 
          text-center md:text-left
      "
      >
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <img
            src={footerlogo}
            alt="Least Action Company"
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] mb-6 sm:mb-8"
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
            CONTACT
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            No. 9, Thendral Nagar, Sathuvachari, Vellore - 632009 <br />
            contactus@leastactioncompany.com
          </p>

          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 pb-8 sm:pb-10 leading-relaxed">
            +91 8825965775 &nbsp; | &nbsp; +91 9597366741 <br className="md:hidden" />
            &nbsp; | &nbsp; +91 8637415761
          </p>

          {/* COPYRIGHT LEFT UNDER LOGO */}
          <p className="text-base sm:text-lg md:text-xl mt-2 w-full text-start">
            © 2025 leastactioncompany.com - A unit of SG Group
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-1 sm:px-4">

          {/* FOLLOW */}
          <div
            className="
              w-full border-b border-black pb-4 sm:pb-5 
              flex flex-wrap items-center justify-center md:justify-start 
              gap-4 sm:gap-6 mb-6 sm:mb-10
          "
          >
            <h2 className="text-2xl sm:text-3xl font-semibold whitespace-nowrap">
              Follow Us
            </h2>

            <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
              <FaFacebook className="text-[#1877F2] text-3xl sm:text-4xl" />
              <FaInstagram className="text-[#E4405F] text-3xl sm:text-4xl" />
              <FaLinkedin className="text-[#0A66C2] text-3xl sm:text-4xl" />
              <FaXTwitter className="text-black text-3xl sm:text-4xl" />
              <FaYoutube className="text-[#FF0000] text-3xl sm:text-4xl" />
            </div>
          </div>

          {/* COLUMNS */}
          <div
            className="
              w-full flex flex-col sm:flex-row justify-between 
              gap-8 sm:gap-12 
              border-b border-black pb-6 
              text-center md:text-left
          "
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl">
                <li>Dashboard</li>
                <li>About</li>
                <li>Service</li>
                <li>Career</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                GUIDES
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl">
                <li>Get Started</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Help</li>
              </ul>
            </div>
          </div>

          {/* PRIVACY + TERMS RIGHT SIDE */}
          <div
            className="
              w-full 
              flex flex-col sm:flex-row 
              items-center 
              sm:items-center 
              sm:justify-start
              gap-4 sm:gap-10 md:gap-12 
              mt-8 sm:mt-10 
              text-lg sm:text-xl
              text-center sm:text-right
          "
          >
            <p className="underline cursor-pointer">Privacy Policy</p>
            <p className="underline cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
