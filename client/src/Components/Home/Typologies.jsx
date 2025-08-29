import React, { useState, useRef, useEffect } from 'react';
import TypologiesBg from '../../assets/typologies-section-bg.png';
import TwoBedroomsTypeC from '../../assets/2BedroomsTypeC.jpg';
import ThreeBedroomsTypeB from '../../assets/3BedroomsTypeB.jpg';
import ThreeBedroomsTypeBMirror from '../../assets/3BMirror.jpg';
import ThreeBedroomsTypeA from '../../assets/3BedroomsTypeA.jpg';
import EnquiryModal from "../../pages/Enquiry";


import { CSSTransition, SwitchTransition } from 'react-transition-group';

const typologiesData = {
    'All': {
        heading: 'All ',
        points: [
            'Senior Living Residences at Estate 360, Gurgaon',
            'Senior-friendly features',
            'Fully-finished residences',
            'Spacious balcony with living room',
            'Exclusive corner apartments',
            'Separation of guest areas and living spaces',
        ],
        image: ThreeBedroomsTypeBMirror,
    },
    '2 Bedrooms+ TypeC': {
        heading: '2 Bedrooms+ TypeC',
        points: [
            'Senior Living Residences at Estate 360, Gurgaon',
            'Senior-friendly features',
            'Fully-finished residences',
            'Spacious balcony with living room',
            'Exclusive corner apartments',
            'Separation of guest areas and living spaces',
        ],
        image: TwoBedroomsTypeC,
    },
    '3 Bedrooms+ TypeB': {
        heading: '3 Bedrooms+ TypeB',
        points: [
            'Senior Living Residences at Estate 360, Gurgaon',
            'Senior-friendly features',
            'Fully-finished residences',
            'Spacious balcony with living room',
            'Exclusive corner apartments',
            'Separation of guest areas and living spaces',
        ],
        image: ThreeBedroomsTypeB,
    },
    '3 Bedrooms+ TypeB Mirror': {
        heading: '3 Bedrooms+ TypeB Mirror',
        points: [
            'Senior Living Residences at Estate 360, Gurgaon',
            'Senior-friendly features',
            'Fully-finished residences',
            'Spacious balcony with living room',
            'Exclusive corner apartments',
            'Separation of guest areas and living spaces',
        ],
        image: ThreeBedroomsTypeBMirror,
    },
    '3 Bedrooms+ TypeA': {
        heading: '3 Bedrooms+ TypeA',
        points: [
            'Senior Living Residences at Estate 360, Gurgaon',
            'Senior-friendly features',
            'Fully-finished residences',
            'Spacious balcony with living room',
            'Exclusive corner apartments',
            'Separation of guest areas and living spaces',
        ],
        image: ThreeBedroomsTypeA,
    },
};

const Typologies = () => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [animationDirection, setAnimationDirection] = useState('right');
    const currentData = typologiesData[selectedOption];
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);



    const textRef = useRef(null);
    const imageRef = useRef(null);

    const handleOptionChange = (e) => {
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        setAnimationDirection(direction);
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div id="typologies">
            {isMobile ?
                (
                    <div className='bg-[#f4f4f4] w-full relative flex flex-col py-20 px-4 sm:px-6 lg:px-0'>
                        {/* Background Image */}
                        <img
                            src={TypologiesBg}
                            alt="Background"
                            className='absolute inset-0 mt-10 object-cover z-0'
                        />

                        {/* Heading */}
                        <div className="text-center z-10 p-4">
                            <h2 className="text-sm sm:text-3xl md:text-3xl font-semibold leading-snug custom-domaine">
                                Residences to suit your every need.
                            </h2>
                            <div className="w-[55%] h-1 bg-black mt-2 mx-auto"></div>
                        </div>

                        {/* Paragraph */}
                        <div className='text-center z-10 p-2'>
                            <p className='text-sm'>
                                Our thoughtfully designed, fully-finished residences, focus on improving the quality of life of our residents.
                            </p>
                        </div>

                        {/* Typologies Card */}
                        <div className="z-20 w-full bg-white h-auto rounded-lg mx-auto mt-8 px-4 sm:px-6 py-5 flex flex-col items-start text-[#67132f]">

                            {/* Top Heading */}
                            <h2 className="text-3xl mb-4">Typologies</h2>

                            {/* Select */}
                            <select
                                onChange={handleOptionChange}
                                value={selectedOption}
                                className="border border-[#67132f] rounded-md p-3 bg-white focus:border-[#67132f] focus:outline-none text-xl mb-6 w-full md:w-auto"
                            >
                                {Object.keys(typologiesData).map((key) => (
                                    <option key={key} value={key}>
                                        {key}
                                    </option>
                                ))}
                            </select>

                            {/* Heading + List */}
                            <SwitchTransition>
                                <CSSTransition
                                    key={selectedOption}
                                    nodeRef={textRef}
                                    classNames={`slide-${animationDirection}`}
                                    timeout={500}
                                >
                                    <div ref={textRef} className="flex flex-col items-start w-full">
                                        <h3 className="text-xl mb-2">{currentData.heading}</h3>
                                        <div className="h-1 bg-[#67132f] w-full"></div>

                                        <ul className="list-inside space-y-2 text-[#67132f] text-sm mt-3">
                                            {currentData.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>

                            {/* Image */}
                            <div className="w-full mt-6">
                                <SwitchTransition>
                                    <CSSTransition
                                        key={selectedOption}
                                        nodeRef={imageRef}
                                        classNames={`slide-${animationDirection}`}
                                        timeout={500}
                                    >
                                        <img
                                            ref={imageRef}
                                            src={currentData.image}
                                            alt={currentData.heading}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                        </div>


                        {/* Buttons */}
                        <div className='flex flex-wrap justify-center sm:justify-between mt-6 sm:mt-10 px-4 sm:px-10 gap-4'>
                            <button className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'>
                                Download Brochure
                            </button>
                            <button className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'>
                                Explore Estate 360
                            </button>
                            <button
                                className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'
                                onClick={() => setModalOpen(true)}
                            >
                                Connect With Us
                            </button>

                            <EnquiryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                        </div>
                    </div>
                )
                :
                (
                    <div className='bg-[#f4f4f4] w-full relative flex flex-col py-20 px-4 sm:px-6 lg:px-0'>
                        {/* Background Image */}
                        <img
                            src={TypologiesBg}
                            alt="Background"
                            className='absolute inset-0 mt-10 object-cover z-0'
                        />

                        {/* Heading */}
                        <div className="text-center z-10 p-4">
                            <h2 className="text-xl sm:text-3xl md:text-3xl font-semibold leading-snug custom-domaine">
                                Residences to suit your every need.
                            </h2>
                            <div className="w-[15%] h-1 bg-black mt-2 mx-auto"></div>
                        </div>

                        {/* Paragraph */}
                        <div className='text-center z-10 p-2'>
                            <p>
                                Our thoughtfully designed, fully-finished residences, focus on improving the <br />quality of life of our residents.
                            </p>
                        </div>

                        {/* Typologies Card */}
                        <div className='z-20 w-full md:w-[70%] lg:w-[80%] bg-white h-auto md:h-[480px] rounded-lg mx-auto mt-8 px-4 sm:px-6 py-5 flex flex-col md:flex-row'>

                            {/* Text + Select */}
                            <div className='md:w-[60%] w-full p-4 flex flex-col items-start text-[#67132f]'>
                                <div className='flex flex-col md:flex-row md:items-center md:space-x-4 mb-4 mt-10 w-full'>
                                    <h2 className="text-3xl mb-2 md:mb-0">Typologies</h2>
                                    <select
                                        onChange={handleOptionChange}
                                        value={selectedOption}
                                        className="border border-[#67132f] rounded-md p-3 bg-white focus:border-[#67132f] focus:outline-none text-xl mt-2 md:mt-0 w-full md:w-auto"
                                    >
                                        {Object.keys(typologiesData).map((key) => (
                                            <option key={key} value={key}>{key}</option>
                                        ))}
                                    </select>
                                </div>

                                <SwitchTransition>
                                    <CSSTransition
                                        key={selectedOption}
                                        nodeRef={textRef}
                                        classNames={`slide-${animationDirection}`}
                                        timeout={500}
                                    >
                                        <div ref={textRef} className="flex flex-col items-start mt-5 w-full">
                                            <div className="flex flex-col items-start w-full">
                                                <h3 className="text-2xl mb-2">{currentData.heading}</h3>
                                                <div className="h-1 bg-[#67132f] w-[70%]"></div>
                                            </div>
                                            <ul className="list-inside space-y-2 text-[#67132f] text-xl mt-3">
                                                {currentData.points.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>

                            {/* Image */}
                            <div className='md:w-[55%] w-full mt-5 md:mt-0'>
                                <SwitchTransition>
                                    <CSSTransition
                                        key={selectedOption}
                                        nodeRef={imageRef}
                                        classNames={`slide-${animationDirection}`}
                                        timeout={500}
                                    >
                                        <img
                                            ref={imageRef}
                                            src={currentData.image}
                                            alt={currentData.heading}
                                            className="w-full h-auto md:h-full object-cover rounded-lg"
                                        />
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-wrap justify-center sm:justify-between mt-6 sm:mt-10 px-4 sm:px-10 gap-4 mx-30'>
                            <button className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'>
                                Download Brochure
                            </button>
                            <button className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'>
                                Explore Estate 360
                            </button>
                            <button
                                className='border border-gray-600 rounded-full px-5 py-3 text-gray-800 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#001B3E]'
                                onClick={() => setModalOpen(true)}
                            >
                                Connect With Us
                            </button>

                            <EnquiryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                        </div>
                    </div>
                )}





            <div className='bg-[#f9f9e4] w-full relative flex flex-col py-20 px-4 sm:px-6 lg:px-0'>
                {/* Background Image */}
                <img
                    src={TypologiesBg}
                    alt="Background"
                    className='absolute inset-0 mt-10 object-cover z-0'
                />

                {/* Heading */}
                <div className="text-center z-10 p-4 text-[#67132f]">
                    <h2 className="text-xl sm:text-3xl md:text-3xl font-semibold leading-snug custom-domaine">
                        Begin your tour from home.
                    </h2>
                    <div className="w-[15%] h-1 bg-[#67132f] mt-2 mx-auto"></div>
                </div>

                {/* Video Card */}
                <div className='z-20 w-full md:w-[70%] lg:w-[80%] bg-white rounded-lg mx-auto mt-8 overflow-hidden'>
                    <div className='relative' style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/xRf0j-KVn1o"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>







        </div >
    );
};

export default Typologies;