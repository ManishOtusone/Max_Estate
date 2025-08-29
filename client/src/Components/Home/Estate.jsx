import React from 'react'
import Icon from '../../assets/estate-360-icon.png';
import Thumbnail from '../../assets/section-one.png';
import ThumbnailImg from '../../assets/section-one-img.jpg';
import Bubble from '../../assets/section-two-bubbles.png';


const Estate = () => {
    return (

        <div id='estate'>
            {/* First Section */}
            <div class="relative w-full min-h-[100vh] bg-[#67132f] flex flex-col md:flex-row justify-center items-center px-4 lg:px-16 gap-8 lg:gap-16 mt-5">

                <div class='flex flex-col gap-3 mt-10 ml-0 lg:ml-20 mb-10'>
                    <img src={Icon} alt="Estate 360 Icon" class="w-full max-w-[428px] h-auto lg:h-[344px]" />
                    <div class='w-full text-[#fcfbe8] text-[1.2rem] lg:text-[1.8rem] font-light leading-[1.2] font-[domaine_displayregular]'>
                        We care for your <span class='font-[domaine_displayRgIt]'>smiles</span>,<br />well-being, and more!
                    </div>

                    <div class='w-full text-[#cecfe5] text-[1rem] lg:text-[1.4rem] font-light leading-[1.2] font-[domaine_displayregular] '>
                        Welcome to <br /><span class='font-[domaine_displayMdIt]'>The Antara Way of Life </span>
                    </div>
                </div>

                <div class='relative w-full max-w-[556px] h-auto lg:h-[575.08px] rounded-lg overflow-hidden'>
                    <img
                        src={Thumbnail}
                        alt="Thumbnail"
                        class='w-full h-full object-cover'
                    />

                    <div class='absolute inset-0 flex justify-center items-center'>
                        <div class="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-white shadow-xl overflow-hidden flex justify-center items-center blob-animate">
                            <img
                                src={ThumbnailImg}
                                alt="Overlay"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-6 left-6 text-[10px] text-white">
                    <p>
                        HARERA Website:{" "}
                        <a
                            href="https://haryanarera.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline hover:text-gray-300"
                        >
                            https://haryanarera.gov.in
                        </a>
                    </p>
                    <p>
                        HARERA Registration no.: RC/REP/HARERA/GGM/860/592/2024/87
                    </p>
                </div>
            </div>

            {/* Second Section */}
            {/* Second Section */}
            {/* Second Section */}
            {/* Second Section */}
            <div
                className="relative pt-[10rem] pb-[8rem] w-full flex flex-col items-center bg-[#f3f3f3] bg-center bg-no-repeat bg-contain min-h-[80vh]"
                style={{ backgroundImage: `url(${Bubble})` }}
            >
                {/* Text block on top */}
                <div className="relative z-10 w-full max-w-4xl px-6 text-left mb-16">
                    <p className="font-[domaine_displaymedium] text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] leading-snug font-bold">
                        <span className="italic">LiveWell </span>
                        at Estate 360, a unique <i>intergenerational</i> <br />
                        residential community at Sector 36A, Gurugram. <br />
                        Imagined and developed by Max Estates, it offers:
                    </p>
                </div>

                {/* Blob list */}
                <div className="relative z-10 w-full px-6">
                    <ul className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
                        {/* Blob 1 */}
                        <li className="w-[120px] sm:w-[140px] md:w-[140px] lg:w-[140px] h-[120px] sm:h-[140px] md:h-[140px] lg:h-[140px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float hover:scale-105 transition-transform duration-300">
                            <p>
                                <span className="text-2xl sm:text-3xl font-bold">11.8<br />acres</span><br />
                                <span className="text-xs sm:text-sm opacity-80">of intentional design</span>
                            </p>
                        </li>

                        {/* Blob 2 */}
                        <li className="w-[180px] sm:w-[200px] md:w-[200px] lg:w-[200px] h-[180px] sm:h-[200px] md:h-[200px] lg:h-[200px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float-delayed hover:scale-105 transition-transform duration-300">
                            <p>
                                <span className="text-2xl sm:text-3xl font-bold">60+<br />amenities</span><br />
                                <span className="text-xs sm:text-sm opacity-80">catering to your well-being</span>
                            </p>
                        </li>

                        {/* Blob 3 */}
                        <li className="w-[130px] sm:w-[150px] md:w-[150px] lg:w-[150px] h-[130px] sm:h-[150px] md:h-[150px] lg:h-[150px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float hover:scale-105 transition-transform duration-300">
                            <p>
                                <span className="text-2xl sm:text-3xl font-bold">1 lac<br />sq.ft</span><br />
                                <span className="text-xs sm:text-sm opacity-80">of amenities</span>
                            </p>
                        </li>

                        {/* Blob 4 */}
                        <li className="w-[150px] sm:w-[170px] md:w-[170px] lg:w-[170px] h-[150px] sm:h-[170px] md:h-[170px] lg:h-[170px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float-delayed hover:scale-105 transition-transform duration-300">
                            <p>
                                <span className="text-2xl sm:text-3xl font-bold">700<br />trees</span><br />
                                <span className="text-xs sm:text-sm opacity-80">throughout the estate</span>
                            </p>
                        </li>

                        {/* Blob 5 */}
                        <li className="w-[130px] sm:w-[150px] md:w-[150px] lg:w-[150px] h-[130px] sm:h-[150px] md:h-[150px] lg:h-[150px] bg-[#67132f] text-white flex flex-col justify-center items-center text-center p-3 shadow-xl rounded-full animate-float hover:scale-105 transition-transform duration-300">
                            <p>
                                <span className="text-2xl sm:text-3xl font-bold">6<br />residences</span><br />
                                <span className="text-xs sm:text-sm opacity-80">including 2 for senior livings</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>






        </div >





    )
}

export default Estate