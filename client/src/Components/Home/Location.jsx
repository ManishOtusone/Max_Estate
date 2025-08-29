import React, { useState, useRef, useEffect } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Location = () => {
    const locations = [
        {
            title: (<>Indira Gandhi International <br />Airport (IGI)</>),
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-8.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.6994980739!2d76.82493568163165!3d28.423187538198537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b94c6f54a0b%3A0x99f9b67e04618c25!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1723116811648",
        },
        {
            title: "Medanta Hospital",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-2.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.293612321482!2d77.03456741508484!3d28.446092499498926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190035ac99bf%3A0xe21261ce95537341!2sMedanta%20Hospital!5e0!3m2!1sen!2sin!4v1723116811648",
        },
        {
            title: "Delhi Public School",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-3.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.693612321482!2d76.98697981508484!3d28.482908899498926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1714cdf3b52b%3A0x888152824408a301!2sDelhi%20Public%20School%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1723116811648",
        },
        {
            title: "Sector 55-56 Metro Station",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-4.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.693612321482!2d77.10520001508484!3d28.423409999498926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21ff2adfd457%3A0xf51517e1309d4dcb!2sSector%2055-56%20Metro%20Station!5e0!3m2!1sen!2sin!4v1723116811648",
        },
        {
            title: "Cyber City",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-5.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.68263582048!2d77.07933505!3d28.494594599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193d1f35f8d7%3A0xf7a45f9ccf8c154!2sDLF%20Cyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1724836700000",
        },
        {
            title: "Ambience Mall",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-6.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.564673212174!2d77.09527841508678!3d28.50432799949893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193e3c5a5ad9%3A0x95c0fbb85ed7f3fa!2sAmbience%20Mall%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1724836750000",
        },
        {
            title: "IICC, Dwarka",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-7.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.289339673882!2d77.02124511508557!3d28.55699829949892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05a9d2fa2ad7%3A0xdda8ab8c7b2d8b65!2sIICC%20%7C%20India%20International%20Convention%20%26%20Expo%20Centre!5e0!3m2!1sen!2sin!4v1724836800000",
        },
        {
            title: "Planned Global City",
            image:
                "https://maxestates.in/wp-content/uploads/2024/07/map-point-1.jpg",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.51267320928!2d76.89618005!3d28.429110899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da7f9c7bb1b7b%3A0xa8126c0ddedb7b72!2sGlobal%20City%20Project%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1724836850000",
        },
    ];

    const [currentMapUrl, setCurrentMapUrl] = useState(locations[0].mapUrl);
    const flickityRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Keep state synced when user scrolls/drag
    useEffect(() => {
        if (!flickityRef.current) return;
        const flkty = flickityRef.current;

        const onChange = () => {
            const index = flkty.selectedIndex;
            setCurrentIndex(index);
            setCurrentMapUrl(locations[index].mapUrl);
        };

        flkty.on("change", onChange);
        return () => {
            flkty.off("change", onChange);
        };
    }, [locations]);

    // ✅ Click jumps directly to that card
    // ✅ Move 1 step forward relative to the clicked card
    const handleCardClick = (i) => {
        if (!flickityRef.current) return;
        const flkty = flickityRef.current;

        flkty.select(i); // jump to clicked slide
        setCurrentIndex(i);
        setCurrentMapUrl(locations[i].mapUrl);
    };





    return (
        <div className="bg-[#b25d49] w-full py-20">
            <div className="text-center text-white">
                <h2 className="text-2xl sm:text-3xl font-semibold">Location</h2>
                <div className="w-16 h-1 bg-white mt-2 mx-auto"></div>
            </div>

            <div className="relative w-[90%] lg:w-[80%] mx-auto mt-8 h-[550px] rounded-2xl overflow-hidden shadow-xl">
                {/* Map */}
                <iframe
                    key={currentMapUrl}
                    src={currentMapUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>

                <div className="absolute inset-0 bg-black/10"></div>

                {/* Slider */}
                <div className="absolute bottom-0 left-0 w-full pt-4">
                    <Flickity
                        className="carousel"
                        flickityRef={(c) => (flickityRef.current = c)}
                        options={{
                            wrapAround: true,
                            contain: true,
                            draggable: true,
                            prevNextButtons: false,
                            cellAlign: "",
                            pageDots: false,

                        }}
                    >
                        {locations.map((loc, i) => (
                            <div
                                key={i}
                                onClick={() => handleCardClick(i)}
                                className="carousel-cell w-48 mx-2 cursor-pointer rounded-xl overflow-hidden shadow-lg"
                            >
                                <div
                                    className={`h-full transform transition-transform duration-300 rounded-xl ${i === currentIndex
                                        ? "scale-105 bg-blue-900"
                                        : "scale-100 bg-white"
                                        }`}
                                >
                                    <img
                                        src={loc.image}
                                        alt={loc.title}
                                        className="w-full h-28 object-cover rounded-t-xl"
                                    />
                                    <div
                                        className={`text-sm text-center p-2 font-semibold ${i === currentIndex ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {loc.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Flickity>
                </div>
            </div>
        </div>
    );
};

export default Location;
