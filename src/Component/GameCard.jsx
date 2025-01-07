import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    const { _id, image, title, rating } = game;

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <span
                            key={`full-${index}`}
                            className="text-yellow-500 text-lg"
                        >
                            ★
                        </span>
                    ))}
                {halfStar && <span className="text-yellow-500 text-lg">✰</span>}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <span
                            key={`empty-${index}`}
                            className="text-gray-300 text-lg"
                        >
                            ☆
                        </span>
                    ))}
            </>
        );
    };

    return (
        <div className="card bg-black rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-blue-200 w-full sm:w-72 md:w-80 lg:w-96">
            {/* Game Cover */}
            <div className="relative bg-black">
                <img
                    className="w-full h-48 object-cover rounded-t-lg"
                    src={image}
                    alt={title}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
                    {rating} / 5
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 bg-black rounded-b-lg">
                <h2 className="font-extrabold text-xl text-gray-400 truncate">{title}</h2>
                <div className="flex items-center mt-2">{renderStars(Number(rating))}</div>

                {/* Details Button */}
                <Link to={`/reviewDetails/${_id}`}>
                    <button className="mt-4 bg-gradient-to-r from-[#00ffcc] to-[#00b3b3] text-black w-full py-2 rounded-md font-medium transition-transform transform hover:scale-105 hover:from-[#00b3b3] hover:to-[#00ffcc]">
                        Explore Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
