import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    const { _id, image, title, rating } = game;

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); 
        const emptyStars = 5 - fullStars; 
        return (
            <div className="flex items-center space-x-1">
                {Array(fullStars).fill('★').map((star, index) => (
                    <span
                        key={`full-${index}`}
                        className="text-yellow-400 text-lg animate-spin-slow"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {star}
                    </span>
                ))}
                {Array(emptyStars).fill('☆').map((star, index) => (
                    <span key={`empty-${index}`} className="text-gray-300 text-lg">
                        {star}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="relative max-w-sm bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:-rotate-2 transition-all duration-500 m-4">
            {/* Game Cover */}
            <div className="relative group">
                <img
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-110 group-hover:rotate-1 duration-700"
                    src={image}
                    alt={title}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
                    {rating} / 5
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 bg-white rounded-b-lg group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-indigo-100 transition-colors duration-700">
                <h2 className="font-extrabold text-xl text-gray-800 truncate group-hover:text-purple-600 transition-all duration-300">
                    {title}
                </h2>
                <div className="flex items-center mt-2">{renderStars(Number(rating))}</div>

                {/* Details Button */}
                <Link to={`/reviewDetails/${_id}`}>
                    <button className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white w-full py-2 rounded shadow-md hover:shadow-xl hover:scale-110 transform transition-all duration-500 animate-fade-in">
                        Explore Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
