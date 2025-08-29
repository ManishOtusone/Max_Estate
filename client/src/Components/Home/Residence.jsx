import React, { useState, useEffect } from 'react';
import sectionTwo from '../../assets/section-two-blob-icon.png';
import Buildings from '../../assets/Buildings.png';
import logoWhite from '../../assets/antara-logo-white.png';

const Residence = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        // Mobile layout
        return (
            <div className="bg-[#b25d49] w-full flex flex-col items-center justify-center px-6 py-10 gap-10">
                {/* Image on top */}
                <div className="w-full flex justify-center">
                    <div className="w-60 max-w-sm h-64 relative">
                        <img src={sectionTwo} alt="Background" className="object-contain rounded-lg" />
                        <div className="absolute w-60 h-60 rounded-full overflow-hidden top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 blob-animate">
                            <img src={Buildings} alt="Buildings" className="w-full h-full object-cover " />
                        </div>
                    </div>
                </div>

                {/* Text below */}
                <div className="text-white mt-5">
                    <h2 className="text-xl font-semibold text-[#67132f] leading-snug">
                        Senior Living Residences <br /> at Estate 360
                    </h2>
                    <div className="w-16 h-1 bg-[#67132f] mt-2 "></div>
                    <div className="mt-5 space-y-4 text-[1rem] font-semibold leading-6 text-justify">
                        <p>
                            Estate 360 offers a vibrant ecosystem that provides seniors with companionship, emotional support, and a sense of safety, helping them develop a deeper understanding of young people while still maintaining their privacy and individuality.
                        </p>
                        <p>
                            Hence, Antara, a pioneer in the field and the only integrated senior care ecosystem in India, will manage the senior living residences and dedicated spaces for senior living, along with primary healthcare services at Estate 360, developed by Max Estates.
                        </p>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <img src={logoWhite} alt="Logo" className="w-28 h-auto" />
                    </div>
                </div>
            </div>
        );
    }

    // Desktop / Large screen layout
    return (
        <div className="bg-[#b25d49] w-full flex flex-row items-center justify-center px-6 py-10 gap-20">
            {/* Left Div - Image Section */}
            <div className="flex-1 flex justify-center">
                <div className="w-full max-w-lg h-[500px] relative">
                    <img src={sectionTwo} alt="Background" className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute w-80 h-80 rounded-full overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 blob-animate">
                        <img src={Buildings} alt="Buildings" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Right Div - Text Content */}
            <div className="flex-1 text-white text-left">
                <h2 className="text-3xl font-semibold text-[#67132f] leading-snug">
                    Senior Living Residences <br /> at Estate 360
                </h2>
                <div className="w-40 h-1 bg-[#67132f] mt-2"></div>
                <div className="mt-5 space-y-4 text-[1.1rem] font-semibold leading-6">
                    <p>
                        Estate 360 offers a vibrant ecosystem that provides seniors with companionship, emotional support, and a sense of safety, helping them develop a deeper understanding of young people while still maintaining their privacy and individuality.
                    </p>
                    <p>
                        Hence, Antara, a pioneer in the field and the only integrated senior care ecosystem in India, will manage the senior living residences and dedicated spaces for senior living, along with primary healthcare services at Estate 360, developed by Max Estates.
                    </p>
                </div>
                <div className="mt-5 flex justify-start">
                    <img src={logoWhite} alt="Logo" className="w-32 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Residence;
