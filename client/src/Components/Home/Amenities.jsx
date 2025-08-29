import React, { useState, useEffect } from 'react';
import LeftCover from '../../assets/LeftCover.png';
import CenterCover from '../../assets/CenterCover.png';
import RightCover from '../../assets/RightCover.png';

import Dining from '../../assets/Dining.png';
import Pool from '../../assets/Pool.png';
import Gym from '../../assets/Gym.png';

import CardRoom from '../../assets/CardRoom.png';
import Reading from '../../assets/Reading.png';
import Theaters from '../../assets/Theaters.png';

import CreativeWorkshop from '../../assets/CreativeWorkshop.png';
import Yoga from '../../assets/Yoga.png';
import Resident from '../../assets/Resident.jpg';

import SectionTwoBubble from '../../assets/section-two-bubbles.png';
import Lake from '../../assets/Lake.webp';
import Golf from '../../assets/Golf.webp';
import OutdoorGym from '../../assets/OutdoorGym.webp';
import Tennis from '../../assets/Tennis.webp';
import Terrace from '../../assets/Terrace.webp';
import Block from '../../assets/Block.webp';
import Amphitheatre from '../../assets/Amphitheatre.webp';
import Plaza from '../../assets/Plaza.webp';

const Amenities = () => {
    const [page, setPage] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [activeIndex, setActiveIndex] = useState(0);

    // --- ALL items first ---
    const items = [
        { img: Dining, cover: LeftCover, title: "Dining Experience", desc: "From world-class cuisines to ‘Ghar Ka Khaana,’ residents can enjoy it all." },
        { img: Pool, cover: CenterCover, title: "All Weather Indoor Pool", desc: "Heated in winters, it makes for the perfect low-impact physical activity option for our residents." },
        { img: Gym, cover: RightCover, title: "The Gym", desc: "Designed with seniors in mind, it is equipped to fulfil every fitness goal." },
        { img: CardRoom, cover: LeftCover, title: "The Card Room", desc: "The place which stimulates minds and puts a huge smile on every face." },
        { img: Reading, cover: CenterCover, title: "The Reading Corner", desc: "Spending time with their favourite titles, residents can explore countless worlds." },
        { img: Theaters, cover: RightCover, title: "The Theatre", desc: "From screening films to staging plays, it is the place for our residents to unleash their creativity." },
        { img: CreativeWorkshop, cover: RightCover, title: "The Creative Workshop", desc: "Where residents can take their favourite hobbies to new horizons." },
        { img: Yoga, cover: RightCover, title: "The Yoga Pavilion", desc: "Residents can experience well-rounded health benefits under expert guidance, every day." },
        { img: Resident, cover: RightCover, title: "Resident Engagement Programs", desc: "Daily, monthly, and weekly social calendars that keep every resident engaged." },
    ];

    const images = [
        { src: Lake, name: 'Serpentine Lake' },
        { src: Golf, name: 'Golf Putting' },
        { src: OutdoorGym, name: 'Outdoor Gym' },
        { src: Tennis, name: 'Padel Tennis' },
        { src: Terrace, name: 'Yoga Terrace' },
        { src: Block, name: 'Sports Block' },
        { src: Amphitheatre, name: 'Amphitheatre' },
        { src: Plaza, name: 'Community Plaza' }
    ];
    const totalSlides = images.length;

    // --- Handle screen size ---
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000); // 5 seconds

        return () => clearInterval(interval); // cleanup on unmount
    }, [totalSlides]);

    // --- Group items based on screen ---
    const groupedItems = isMobile
        ? items.map((item) => [item]) // 1 per page mobile
        : items.reduce((acc, curr, i) => {
            if (i % 3 === 0) acc.push([]);
            acc[acc.length - 1].push(curr);
            return acc;
        }, []); // 3 per page desktop

    const totalPages = groupedItems.length;

    // --- Pagination controls ---

    const nextPage = () => {
        setPage(prev => (prev + 1) % totalPages);
    };


    const prevPage = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextPage();
        }, 5000);

        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <div id="amenities">
            {/* Section 1: Indoor Amenities */}
            <div className="w-full min-h-200 bg-[#f9f9e4] flex flex-col items-center px-4 lg:px-0 pb-10">
                <div className="text-center mt-16 sm:mt-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug custom-domaine">
                        The Antara Club: heart of the community
                    </h2>
                    <div className="w-2/5 sm:w-1/4 h-1 bg-black mt-2 mx-auto"></div>
                </div>

                <div className="max-w-md sm:max-w-lg mt-5 text-center text-gray-800 px-2 sm:px-0">
                    <p>
                        Crafted with the aim of promoting an active lifestyle for seniors, the Antara Club serves as a comprehensive platform for wellness and significantly contributes to holistic well-being.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative w-full overflow-hidden mt-20 px-2 sm:px-8 lg:px-[8rem]">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${page * 100}%)` }}
                        >
                            {groupedItems.map((pageItems, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4"
                                >
                                    {pageItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="relative w-full h-[32rem] rounded-lg overflow-hidden bg-[#f9f9e4] flex flex-col pt-5"
                                        >
                                            {/* Cover image */}
                                            <div className="relative w-full h-44">
                                                <img
                                                    src={item.cover}
                                                    alt="Cover"
                                                    className="object-cover rounded-t-lg"
                                                />

                                                {/* Circular image over the cover */}
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <div className="w-42 h-42 sm:w-50 sm:h-50 rounded-full shadow-xl overflow-hidden flex justify-center items-center">
                                                        <img
                                                            src={item.img}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover blob-animate"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Text section */}
                                            <div className="flex flex-col justify-start items-center text-center mt-6 px-2 flex-1">
                                                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                                                <p className="mt-2 text-sm sm:text-base">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={prevPage}
                        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 p-2 rounded-full z-10"
                    >
                        ◀
                    </button>
                    <button
                        onClick={nextPage}
                        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-2 rounded-full z-10"
                    >
                        ▶
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full ${page === idx ? "bg-red-900" : "bg-gray-300"}`}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Section 2: Outdoor Amenities */}
            <div className="w-full bg-[#b25d49] relative flex flex-col pb-40">
                <img
                    src={SectionTwoBubble}
                    className="absolute top-64 sm:top-80 w-full h-auto object-cover z-0"
                    alt="Background Bubble"
                />

                <div className="text-center z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24 mt-20 sm:mt-25">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug custom-domaine text-white">
                        Outdoor spaces for inspired senior living.
                    </h2>
                    <div className="w-1/5 sm:w-1/6 h-1 bg-white mt-2 mx-auto"></div>
                </div>

                <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto my-6 z-10 px-4 sm:px-0">
                    <p className="text-white text-center sm:text-center">
                        Experience the essence of active aging in our meticulously designed outdoor spaces. These spaces are not just about activities, they're about fostering connections, embracing tranquillity, and nurturing the spirit of wellness in every interaction.
                    </p>
                </div>

                {/* Outdoor Slider */}
                <div className="w-full sm:w-11/12 lg:w-3/4 mx-auto mt-6 sm:mt-8 rounded-lg overflow-hidden z-20">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full relative">
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="w-full h-60 sm:h-80 md:h-96 sm-mx-5 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4 p-2">
                                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                                        {image.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-white" : "bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Amenities;
