import React from "react";
import Brochure from "../assets/download-broucher.png";
import Explore from "../assets/explore-recidence-at-360.png";
import About from "../assets/about-max-estates.png";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] w-full py-12 px-4 sm:px-6 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        {/* About Max Estates */}
        <div className="w-full md:flex-1">
          <div className="text-[#98b594]">
            <h2 className="text-lg sm:text-xl font-semibold">About Max Estates</h2>
            <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
          </div>
          <p className="text-justify text-sm sm:text-base mt-4 sm:mt-5">
            Max Estates Limited is the listed real estate development entity of
            Max Group. Established in 2016, Max Estates Limited envisions itself
            as a well-being company enabled by real estate.
          </p>
        </div>

        {/* About Antara */}
        <div className="w-full md:flex-1">
          <div className="text-[#98b594]">
            <h2 className="text-lg sm:text-xl font-semibold">About Antara</h2>
            <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
          </div>
          <p className="text-justify text-sm sm:text-base mt-4 sm:mt-5">
            Launched in 2013, Antara is a wholly owned subsidiary of Max India
            Limited, one of the three listed entities of the Max Group. It is an
            integrated service provider for all senior care needs, operating two
            main lines of businesses: Residences for Seniors and Assisted Care
            Services, including products to manage chronic health conditions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:flex-1">
          <div className="text-[#98b594]">
            <h2 className="text-lg sm:text-xl font-semibold">Quick Links</h2>
            <div className="w-16 h-0.5 bg-[#98b594] mt-1"></div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-5 justify-start">
            {/* Item */}
            <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/2 sm:w-28">
              <img src={Brochure} alt="Brochure" className="w-12 sm:w-16 mx-auto" />
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-snug">
                Download <br /> Brochure
              </p>
            </div>

            <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/2 sm:w-28">
              <img src={Explore} alt="Explore" className="w-12 sm:w-16 mx-auto" />
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-snug">
                Explore <br /> Residences <br /> at Estate 360
              </p>
            </div>

            <div className="text-center cursor-pointer hover:text-[#98b594] transition w-1/2 sm:w-28">
              <img src={About} alt="About" className="w-12 sm:w-16 mx-auto" />
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-snug">
                About <br /> Max Estates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 text-xs sm:text-sm text-black space-y-2 sm:space-y-3 leading-relaxed">
        <p className="text-justify font-semibold">
          <b>Disclaimer:</b> The Project ‘Estate 360’ is registered with the
          HARERA with registration no. RC/REP/HARERA/GGM/860/592/2024/87. Please
          refer to project details on the website of HARERA{" "}
          <a
            href="https://haryanarera.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-[#98b594] underline"
          >
            https://haryanarera.gov.in
          </a>{" "}
          prior to making any decision. The promoter of Estate 360 is Max
          Estates Gurgaon Ltd. (CIN no. U70109UP2022PLC170197) having its
          Registered office at Max Towers, C – 001/A/1, Sector-16B, Noida,
          Gautam Buddha Nagar, Noida UP 201301.
        </p>
        <p className="text-justify font-semibold">
          Max Estates Gurgaon limited has appointed Antara Senior Living Limited
          to manage the senior living residences and dedicated spaces for senior
          living, along with primary healthcare services at Estate 360.
        </p>
        <p className="font-semibold">© 2024 by Max Estates Limited, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
