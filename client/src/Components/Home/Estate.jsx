import React from 'react'
import Icon from '../../assets/estate-360-icon.png';
import Thumbnail from '../../assets/section-one.png';
import ThumbnailImg from '../../assets/section-one-img.jpg';
import Bubble from '../../assets/section-two-bubbles.png';
import { useMediaQuery } from "react-responsive";


const Estate = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (

        <div id='estate'>
            {/* First Section */}
            <div className="relative w-full min-h-[110vh] bg-[#67132f] flex justify-center items-center px-4 lg:px-16 gap-8 lg:gap-16 mt-5">
                {isMobile ? (

                    <div className="flex flex-col items-cente mt-13">
                        {/* Your same code but stacked */}
                        <div className="flex flex-col gap-3 mt-10 mb-10 text-center">
                            <img
                                src={Icon}
                                alt="Estate 360 Icon"
                                className="w-full max-w-[428px] h-auto"
                            />
                            <div className="w-full text-[#fcfbe8] text-[1.2rem] font-light leading-[1.2] font-[domaine_displayregular]">
                                We care for your{" "}
                                <span className="font-[domaine_displayRgIt]">smiles</span>,<br />
                                well-being, and more!
                            </div>
                        </div>

                        <div className="relative w-full max-w-[556px] rounded-lg overflow-hidden mb-20">
                            <img
                                src={Thumbnail}
                                alt="Thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="relative w-[250px] h-[250px] bg-white shadow-xl overflow-hidden flex justify-center items-center blob-animate">
                                    <img
                                        src={ThumbnailImg}
                                        alt="Overlay"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // 👉 Desktop: Row Layout (your original)
                    <div className="flex flex-row justify-center items-center w-full gap-16">
                        {/* Left content */}
                        <div className="flex flex-col gap-3 mt-10 ml-20 mb-10">
                            <img
                                src={Icon}
                                alt="Estate 360 Icon"
                                className="w-full max-w-[428px] h-auto lg:h-[344px]"
                            />
                            <div className="w-full text-[#fcfbe8] text-[1.8rem] font-light leading-[1.2] font-[domaine_displayregular]">
                                We care for your{" "}
                                <span className="font-[domaine_displayRgIt]">smiles</span>,<br />
                                well-being, and more!
                            </div>
                        </div>

                        {/* Right content */}
                        <div className="relative w-full max-w-[556px] h-[575.08px] rounded-lg overflow-hidden">
                            <img
                                src={Thumbnail}
                                alt="Thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="relative w-[350px] h-[350px] bg-white shadow-xl overflow-hidden flex justify-center items-center blob-animate">
                                    <img
                                        src={ThumbnailImg}
                                        alt="Overlay"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom text stays same */}
                <div className="absolute bottom-6 left-6 text-[10px] text-white mt-4 sm:mt-0">
                    <p>
                        HARERA Website:{" "}
                        <a
                            href="https://haryanarera.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-300"
                        >
                            https://haryanarera.gov.in
                        </a>
                    </p>
                    <p>HARERA Registration no.: RC/REP/HARERA/GGM/860/592/2024/87</p>
                </div>

            </div>


            {isMobile ? (
                // ----------------- Mobile View -----------------
                <div
                    className="relative pt-[5rem] pb-[5rem] w-full flex flex-col items-center bg-[#f3f3f3] bg-center bg-no-repeat bg-contain min-h-[80vh]"
                    style={{ backgroundImage: `url(${Bubble})` }}
                >
                    {/* Text block on top */}
                    <div className="relative z-10 w-full max-w-4xl px-6 text-left mb-8">
                        <p className="font-[domaine_displaymedium] text-[1.3rem] leading-snug font-bold">
                            <span className="italic">LiveWell </span>
                            at Estate 360, a unique <i>intergenerational</i> <br />
                            residential community at Sector 36A, Gurugram. <br />
                            Imagined and developed by Max Estates, it offers:
                        </p>
                    </div>

                    {/* Blob list (smaller for mobile) */}
                    <div className="relative z-10 w-full">
                        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 ml-15">
                            <li className="w-[220px] h-[220px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full blob-animate">
                                <p>
                                    <span className="text-xl font-bold">11.8<br />acres</span><br />
                                    <span className="text-xs opacity-80">of intentional design</span>
                                </p>
                            </li>

                            <li className="w-[220px] h-[220px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full blob-animate">
                                <p>
                                    <span className="text-xl font-bold">60+<br />amenities</span><br />
                                    <span className="text-xs opacity-80">catering to your well-being</span>
                                </p>
                            </li>

                            <li className="w-[220px] h-[220px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full blob-animate">
                                <p>
                                    <span className="text-xl font-bold">1 lac<br />sq.ft</span><br />
                                    <span className="text-xs opacity-80">of amenities</span>
                                </p>
                            </li>

                            <li className="w-[220px] h-[220px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full blob-animate">
                                <p>
                                    <span className="text-xl font-bold">700<br />trees</span><br />
                                    <span className="text-xs opacity-80">throughout the estate</span>
                                </p>
                            </li>

                            <li className="w-[220px] h-[220px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full blob-animate">
                                <p>
                                    <span className="text-xl font-bold">6<br />residences</span><br />
                                    <span className="text-xs opacity-80">including 2 for senior living</span>
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            ) : (
                // ----------------- Desktop / Larger Screens -----------------
                <div
                    className="relative pt-[5rem] pb-[8rem] w-full flex flex-col items-center bg-[#f3f3f3] bg-center bg-no-repeat bg-contain min-h-[80vh]"
                    style={{ backgroundImage: `url(${Bubble})` }}
                >
                    {/* Text block on top */}
                    <div className="relative z-10 w-full max-w-4xl px-6 text-left mb-16">
                        <p className="font-[domaine_displaymedium] text-[1.2rem] lg:text-[2rem] leading-snug font-bold">
                            <span className="italic">LiveWell </span>
                            at Estate 360, a unique <i>intergenerational</i> <br />
                            residential community at Sector 36A, Gurugram. <br />
                            Imagined and developed by Max Estates, it offers:
                        </p>
                    </div>

                    {/* Blob list (larger for desktop) */}
                    <div className="relative z-10 w-full px-6">
                        <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
                            <li className="w-[140px] h-[140px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float">
                                <p>
                                    <span className="text-2xl font-bold">11.8<br />acres</span><br />
                                    <span className="text-sm opacity-80">of intentional design</span>
                                </p>
                            </li>

                            <li className="w-[200px] h-[200px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float-delayed">
                                <p>
                                    <span className="text-3xl font-bold">60+<br />amenities</span><br />
                                    <span className="text-sm opacity-80">catering to your well-being</span>
                                </p>
                            </li>

                            <li className="w-[150px] h-[150px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float">
                                <p>
                                    <span className="text-2xl font-bold">1 lac<br />sq.ft</span><br />
                                    <span className="text-sm opacity-80">of amenities</span>
                                </p>
                            </li>

                            <li className="w-[170px] h-[170px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float-delayed">
                                <p>
                                    <span className="text-2xl font-bold">700<br />trees</span><br />
                                    <span className="text-sm opacity-80">throughout the estate</span>
                                </p>
                            </li>

                            <li className="w-[150px] h-[150px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float">
                                <p>
                                    <span className="text-2xl font-bold">6<br />residences</span><br />
                                    <span className="text-sm opacity-80">including 2 for senior living</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}






        </div >





    )
}

export default Estate