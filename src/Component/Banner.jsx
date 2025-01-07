import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: () => <div className="dot"></div>, // Custom style for the dots
    };

    const banners = [
        {
            id: 1,
            title: "Discover the Best Games",
            description: "Explore top-rated games reviewed by gamers like you. Whether you're into action, adventure, or strategy, we've got something for everyone.",
            image: "https://i.ibb.co/VjDwn5t/man-wearing-vr-glasses-gaming.jpg"
        },
        {
            id: 2,
            title: "Share Your Reviews",
            description: "Add your opinions and help others choose their next game. Share your experiences with the gaming community and become a part of the conversation.",
            image: "https://i.ibb.co/ZmfhcGZ/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic.jpg"
        },
        {
            id: 3,
            title: "Find Your Favorite Genre",
            description: "Search reviews by genre and find your perfect match. From racing to RPGs, discover the best games tailored to your interests.",
            image: "https://i.ibb.co/v1zS3Qf/man-racing-dirt-bike-fantasy-environment.jpg"
        }
    ];

    return (
        <div className="bg-black  relative">
            <Slider {...settings}>
                {banners.map(banner => (
                    <div key={banner.id} className="relative">
                        {/* Image */}
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="mx-auto w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-transparent to-black/70 text-white rounded-lg">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-20 lg:mt-32 px-4 text-center drop-shadow-lg">
                                {banner.title}
                            </h2>
                            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mt-4 px-6 text-center drop-shadow-lg">
                                {banner.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Pagination dots (customized) */}
            <div className="slick-dots absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
                {/* Custom dots styling */}
            </div>
        </div>
    );
};

export default Banner;
