import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2'; // Import SweetAlert2

const ReviewDetails = () => {
    const { _id, image, title, review, rating, publishingYear, genre, email } = useLoaderData();
    const navigate = useNavigate();

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        return (
            <>
                {Array(fullStars).fill('★').map((star, index) => (
                    <span key={`full-${index}`} className="text-yellow-400 text-xl">{star}</span>
                ))}
                {Array(emptyStars).fill('☆').map((star, index) => (
                    <span key={`empty-${index}`} className="text-gray-400 text-xl">{star}</span>
                ))}
            </>
        );
    };

    const handleAddToWatchlist = () => {
        const game = { _id, image, title, rating, review, publishingYear, genre, email };
        
        // Get current watchlist from localStorage, or initialize it as an empty array
        const currentWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

        // Check if the game is already in the watchlist
        if (!currentWatchlist.some((item) => item._id === _id)) {
            currentWatchlist.push(game);
            localStorage.setItem('watchlist', JSON.stringify(currentWatchlist));
            
            // SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Game added!',
                text: 'This game has been added to your watchlist.',
                confirmButtonText: 'Cool',
            });
        } else {
            // SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'Already in Watchlist',
                text: 'This game is already in your watchlist.',
                confirmButtonText: 'Got it',
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center py-8 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
                {/* Game Cover Image */}
                <img className="w-full h-64 object-cover sm:h-48 md:h-64 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105" src={image} alt={title} />

                {/* Review Details */}
                <div className="p-6 flex-grow">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4 hover:text-pink-600 transition-colors">{title}</h2>
                    <p className="text-gray-700 mb-4">
                        <span className="font-semibold text-pink-500">Review:</span> {review}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-gray-600">
                            <span className="font-semibold text-teal-500">Rating:</span>
                            <div className="flex items-center mt-1">
                                {renderStars(Number(rating))}
                                <span className="ml-2 text-sm text-gray-500">({rating}/5)</span>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            <span className="font-semibold text-teal-500">Year:</span> {publishingYear}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-teal-500">Genre:</span> {genre}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-teal-500">Reviewer Email:</span> {email}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="p-4 mt-auto flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back
                    </button>
                    <button
                        onClick={handleAddToWatchlist}
                        className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center text-center"
                    >
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
