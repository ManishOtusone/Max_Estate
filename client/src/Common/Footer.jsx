import React, { useState, useEffect } from "react";
import Brochure from "../assets/download-broucher.png";
import Explore from "../assets/explore-recidence-at-360.png";
import About from "../assets/about-max-estates.png";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint: md
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f3f3f3] w-full py-12 px-4 sm:px-6 lg:px-20">
      {isMobile ? (
        // ================= MOBILE LAYOUT =================
        <div className="flex flex-col gap-10">
          {/* About Max Estates */}
          <div className="w-full">
            <div className="text-[#98b594]">
              <h2 className="text-lg font-semibold">About Max Estates</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <p className="text-justify text-sm mt-4">
              Max Estates Limited is the listed real estate development entity of
              Max Group. Established in 2016, Max Estates Limited envisions itself
              as a well-being company enabled by real estate.
            </p>
          </div>

          {/* About Antara */}
          <div className="w-full">
            <div className="text-[#98b594]">
              <h2 className="text-lg font-semibold">About Antara</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <p className="text-justify text-sm mt-4">
              Launched in 2013, Antara is a wholly owned subsidiary of Max India
              Limited, one of the three listed entities of the Max Group. It is an
              integrated service provider for all senior care needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <div className="text-[#98b594]">
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <div className="flex flex-wrap gap-6 mt-4 justify-start">
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/3">
                <img src={Brochure} alt="Brochure" className="w-12 mx-auto" />
                <p className="text-xs mt-2 font-medium">Download Brochure</p>
              </div>
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/3">
                <img src={Explore} alt="Explore" className="w-12 mx-auto" />
                <p className="text-xs mt-2 font-medium leading-snug">
                  Explore Residences
                </p>
              </div>
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/3">
                <img src={About} alt="About" className="w-12 mx-auto" />
                <p className="text-xs mt-2 font-medium">About Max Estates</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ================= DESKTOP LAYOUT =================
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* About Max Estates */}
          <div className="w-full md:flex-1">
            <div className="text-[#98b594]">
              <h2 className="text-xl font-semibold">About Max Estates</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <p className="text-justify text-base mt-5">
              Max Estates Limited is the listed real estate development entity of
              Max Group. Established in 2016, Max Estates Limited envisions itself
              as a well-being company enabled by real estate.
            </p>
          </div>

          {/* About Antara */}
          <div className="w-full md:flex-1">
            <div className="text-[#98b594]">
              <h2 className="text-xl font-semibold">About Antara</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <p className="text-justify text-base mt-5">
              Launched in 2013, Antara is a wholly owned subsidiary of Max India
              Limited, one of the three listed entities of the Max Group. It is an
              integrated service provider for all senior care needs, operating two
              main lines of businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:flex-1">
            <div className="text-[#98b594]">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
            </div>
            <div className="flex gap-2 mt-5 justify-start">
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-28">
                <img src={Brochure} alt="Brochure" className="w-10 mx-auto" />
                <p className="text-sm mt-2 font-medium leading-snug">
                  Download <br /> Brochure
                </p>
              </div>
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-28">
                <img src={Explore} alt="Explore" className="w-10 mx-auto" />
                <p className="text-sm mt-2 font-medium leading-snug">
                  Explore <br /> Residences <br /> at Estate 360
                </p>
              </div>
              <div className="text-center cursor-pointer hover:text-[#98b594] transition w-28">
                <img src={About} alt="About" className="w-10 mx-auto" />
                <p className="text-sm mt-2 font-medium leading-snug">
                  About <br /> Max Estates
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer (same for both) */}
      <div className="mt-10 text-xs sm:text-sm text-black space-y-2 sm:space-y-3 leading-relaxed">
        <p className="text-justify font-semibold">
          <b>Disclaimer:</b> The Project ‘Estate 360’ is registered with HARERA
          with registration no. RC/REP/HARERA/GGM/860/592/2024/87. Please refer
          to project details on the website of HARERA{" "}
          <a
            href="https://haryanarera.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-[#98b594] underline"
          >
            https://haryanarera.gov.in
          </a>{" "}
          prior to making any decision. The promoter of Estate 360 is Max Estates
          Gurgaon Ltd.
        </p>
        <p className="text-justify font-semibold">
          Max Estates Gurgaon limited has appointed Antara Senior Living Limited
          to manage the senior living residences and healthcare services at Estate
          360.
        </p>
        <p className="font-semibold">
          © 2024 by Max Estates Limited, All Rights Reserved.
        </p>
      </div>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>
        {/* Call */}
        <a
          href="tel:+911234567890"
          className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
