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
        autoplaySpeed: 3000
    };

    const banners = [
        {
            id: 1,
            title: "Discover the Best Games",
            description: "Explore top-rated games reviewed by gamers like you.",
            image: "https://i.ibb.co.com/VxtHMdH/banner1.jpg"
        },
        {
            id: 2,
            title: "Share Your Reviews",
            description: "Add your opinions and help others choose their next game.",
            image: "https://i.ibb.co/5W08RtD/futuristic-blue-black-gaming-header-social-media-banner-template-136469-1376.jpg"
        },
        {
            id: 3,
            title: "Find Your Favorite Genre",
            description: "Search reviews by genre and find your perfect match.",
            image: "https://i.ibb.co/2jsFDvn/futuristic-green-black-gaming-header-social-media-banner-template-136469-1042.jpg"
        }
    ];

    return (
        <div className="bg-gray-900 py-8">
            <Slider {...settings}>
                {banners.map(banner => (
                    <div key={banner.id} className="relative">
                        {/* Image */}
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="mx-auto w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-transparent to-black/70 text-white rounded-lg">
                            <h2 className="text-xl sm:text-3xl md:text-5xl mt-[100px] lg:mt-[200px] font-extrabold drop-shadow-md">{banner.title}</h2>
                            <p className=" text-sm sm:text-lg md:text-xl  text-gray-300 drop-shadow-md">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
