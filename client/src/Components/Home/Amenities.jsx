import React, { useState } from 'react';
import LeftCover from '../../assets/LeftCover.png';
import CenterCover from '../../assets/CenterCover.png';
import RightCover from '../../assets/RightCover.png';

import Dining from '../../assets/Dining.jpg';
import Pool from '../../assets/Pool.jpg';
import Gym from '../../assets/Gym.jpg';
import CardRoom from '../../assets/CardRoom.jpg';
import Reading from '../../assets/Reading.jpg';
import Theaters from '../../assets/Theaters.jpg';
import CreativeWorkshop from '../../assets/CreativeWorkshop.jpg';
import Yoga from '../../assets/Yoga.jpg';
import Resident from '../../assets/Resident.jpg';
import SectionTwoBubble from '../../assets/section-two-bubbles.png'
import Lake from '../../assets/Lake.webp'
import Golf from '../../assets/Golf.webp'
import OutdoorGym from '../../assets/OutdoorGym.webp'
import Tennis from '../../assets/Tennis.webp'
import Terrace from '../../assets/Terrace.webp'
import Block from '../../assets/Block.webp'
import Amphitheatre from '../../assets/Amphitheatre.webp'
import Plaza from '../../assets/Plaza.webp'



const Amenities = () => {
    const [page, setPage] = useState(0);
    const totalPages = 3;

    const prevPage = () => setPage(page === 0 ? 0 : page - 1);
    const nextPage = () => setPage(page === totalPages - 1 ? totalPages - 1 : page + 1);

    const pages = [
        [
            { img: Dining, cover: LeftCover, title: 'Dining Experience', desc: "From world-class cuisines to ‘Ghar Ka Khaana,’ residents can enjoy it all." },
            { img: Pool, cover: CenterCover, title: 'All Weather Indoor Pool', desc: "Heated in winters, it makes for the perfect low-impact physical activity option for our residents." },
            { img: Gym, cover: RightCover, title: 'The Gym', desc: "Designed with seniors in mind, it is equipped to fulfil every fitness goal." },
        ],
        [
            { img: CardRoom, cover: LeftCover, title: 'The Card Room', desc: "The place which stimulates minds and puts a huge smile on every face." },
            { img: Reading, cover: CenterCover, title: 'The Reading Corner', desc: "Spending time with their favourite titles, residents can explore countless worlds." },
            { img: Theaters, cover: RightCover, title: 'The Theatre', desc: "From screening films to staging plays, it is the place for our residents to unleash their  creativity." },
        ],
        [
            { img: CreativeWorkshop, cover: RightCover, title: 'The Creative Workshop', desc: "Where residents can take their favourite hobbies to new horizons." },
            { img: Yoga, cover: RightCover, title: 'The Yoga Pavilion', desc: "Residents can experience well-rounded health benefits under expert guidance, every day." },
            { img: Resident, cover: RightCover, title: 'Resident Engagement Programs', desc: "Daily, monthly, and weekly social calendars that keep every resident engaged." },
        ],
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

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div id="amenities">
            <div className="w-full min-h-screen bg-[#f9f9e4] flex flex-col items-center px-4 lg:px-0 pb-10">
                {/* Heading */}
                <div className="text-center mt-16 sm:mt-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug custom-domaine">
                        The Antara Club: heart of the community
                    </h2>
                    <div className="w-2/5 sm:w-1/4 h-1 bg-black mt-2 mx-auto"></div>
                </div>

                {/* Paragraph */}
                <div className="max-w-md sm:max-w-lg mt-5 text-center text-gray-800 px-2 sm:px-0">
                    <p>
                        Crafted with the aim of promoting an active lifestyle for seniors, the Antara Club serves as a comprehensive platform for wellness and significantly contributes to holistic well-being. It encourages engagement in a variety of activities and utilisation of diverse facilities, fostering an effective and well-rounded lifestyle, enriched with lifecare.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden mt-10 px-2 sm:px-8 lg:px-[8rem]">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${page * 100}%)` }}
                        >
                            {pages.map((pageItems, idx) => (
                                <div key={idx} className="flex-shrink-0 w-full flex justify-center gap-4 flex-wrap">
                                    {pageItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="relative w-full sm:w-60 rounded-lg overflow-hidden bg-[#f9f9e4] flex flex-col items-center"
                                            style={{ minHeight: '28rem' }} // set same height for all cards
                                        >
                                            {/* Cover Image */}
                                            <img
                                                src={item.cover}
                                                alt="Cover"
                                                className="w-full h-40 sm:h-44 object-cover rounded-t-lg"
                                            />

                                            {/* Circular Image */}
                                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 -mt-16 sm:-mt-20 rounded-full shadow-xl overflow-hidden flex justify-center items-center">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover blob-animate"
                                                />
                                            </div>

                                            {/* Title & Description */}
                                            <div className="text-center mt-4 px-2">
                                                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                                                <p className="mt-2 text-sm sm:text-base">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevPage}
                        disabled={page === 0}
                        className={`absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 p-2 rounded-full z-10 transition-opacity duration-300 ${page === 0 ? 'opacity-50 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z" />
                        </svg>
                    </button>

                    <button
                        onClick={nextPage}
                        disabled={page === totalPages - 1}
                        className={`absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-2 rounded-full z-10 transition-opacity duration-300 ${page === totalPages - 1 ? 'opacity-50 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z" transform="translate(100,100) rotate(180)" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-3 space-x-2">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full ${page === idx ? 'bg-red-900' : 'bg-gray-300'}`}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="w-full bg-[#b25d49] relative flex flex-col pb-40">

                {/* Bubble image at the back */}
                <img
                    src={SectionTwoBubble}
                    className="absolute top-64 sm:top-80 w-full h-auto object-cover z-0"
                    alt="Background Bubble"
                />

                {/* Text content container */}
                <div className="text-center z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24 mt-20 sm:mt-25">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug custom-domaine text-white">
                        Outdoor spaces for inspired senior living.
                    </h2>
                    <div className="w-1/5 sm:w-1/6 h-1 bg-white mt-2 mx-auto"></div>
                </div>

                {/* Paragraph text container */}
                <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto my-6 z-10 px-4 sm:px-0">
                    <p className="text-white text-justify sm:text-left">
                        Experience the essence of active aging in our meticulously designed outdoor spaces. These spaces are not just about activities, they're about fostering connections, embracing tranquillity, and nurturing the spirit of wellness in every
                        <span className="block w-full text-center sm:text-left">interaction.</span>
                    </p>
                </div>

                {/* Slider */}
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
                                    className="w-full h-60 sm:h-80 md:h-96 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4 p-2">
                                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{image.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-white' : 'bg-gray-400'
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