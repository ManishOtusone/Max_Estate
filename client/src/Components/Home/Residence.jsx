import React from 'react';
import sectionTwo from '../../assets/section-two-blob-icon.png';
import Buildings from '../../assets/Buildings.jpg';
import logoWhite from '../../assets/antara-logo-white.png';

const Residence = () => {
    return (
        <div
            id="residences"
            className="bg-[#b25d49] w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-10 gap-10 md:gap-20"
        >
            {/* Left Div - Image Section */}
            <div className="flex-1 relative w-full flex justify-center">
                <div className="w-full max-w-sm h-64 sm:h-80 md:h-[500px] relative">
                    {/* Background blob image */}
                    <img
                        src={sectionTwo}
                        alt="Background"
                        className="w-full h-full object-contain rounded-lg"
                    />

                    {/* Circular Buildings image */}
                    <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full overflow-hidden blob-animate top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img
                            src={Buildings}
                            alt="Buildings"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Right Div - Text Content */}
            <div className="flex-1 text-white text-center md:text-left mt-10 md:mt-0 relative z-20">
                {/* Heading and Divider */}
                <div className="inline-block">
                    <h2 className="text-2xl sm:text-2.5xl md:text-3xl font-semibold text-[#67132f] leading-snug custom-domaine">
                        Senior Living Residences <br className="hidden md:block" />
                        at Estate 360
                    </h2>
                    <div className="w-16 sm:w-24 md:w-40 h-1 bg-[#67132f] mt-2 md:mx-0"></div>
                </div>

                {/* Paragraphs */}
                <div className="mt-5 space-y-4 text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] font-semibold leading-6 text-justify md:text-left">
                    <p>
                        Estate 360 offers a vibrant ecosystem that provides seniors with companionship, emotional support, and a sense of safety, helping them develop a deeper understanding of young people while still maintaining their privacy and individuality.
                    </p>
                    <p>
                        Hence, Antara, a pioneer in the field and the only integrated senior care ecosystem in India, will manage the senior living residences and dedicated spaces for senior living, along with primary healthcare services at Estate 360, developed by Max Estates.
                    </p>
                </div>

                {/* Logo */}
                <div className="mt-5 flex justify-center md:justify-start">
                    <img src={logoWhite} alt="Logo" className="w-28 sm:w-32 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Residence;