import React, { useContext } from 'react';
import backgroundImage from '../assets/signup.jpg';
import 'animate.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user) {
            Swal.fire({
                title: 'Error!',
                text: 'You need to be logged in to add a review.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genre = form.genre.value;
        const email = form.email.value;

        const newGame = { image, title, review, rating, publishingYear, genre, email };

        fetch('http://localhost:5000/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGame),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Review Added Successfully!',
                        text: 'Your game review has been saved successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        navigate('/reviews');
                    });
                }
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add the review. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error("Error:", error);
            });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="max-w-2xl w-full p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out animate__animated animate__fadeIn animate__delay-1s"
            >
                <h2 className="text-2xl text-center font-bold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s">Add a New Review</h2>
                <form onSubmit={handleSubmit}>
                    {/* Game Cover Image */}
                    <div className="mb-4 animate__animated animate__fadeIn animate__delay-2s">
                        <label className="block font-medium mb-2 text-white">Game Cover Image URL:</label>
                        <input
                            type="url"
                            className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                            placeholder="Enter Image URL"
                            name="image"
                            required
                        />
                    </div>

                    {/* Game Title */}
                    <div className="mb-4 animate__animated animate__fadeIn animate__delay-2s">
                        <label className="block font-medium mb-2 text-white">Game Title:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                            placeholder="Enter Game Title"
                            name="title"
                            required
                        />
                    </div>

                    {/* Review Description */}
                    <div className="mb-4 animate__animated animate__fadeIn animate__delay-3s">
                        <label className="block font-medium mb-2 text-white">Review Description:</label>
                        <textarea
                            className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                            placeholder="Write your review..."
                            rows="4"
                            name="review"
                            required
                        ></textarea>
                    </div>

                    {/* Rating */}
                    <div className="mb-4 animate__animated animate__bounceInUp animate__delay-4s">
                        <label className="block font-medium mb-2 text-white">Rating:</label>
                        <select
                            className="w-full p-2 border rounded bg-transparent text-black"
                            name="rating"
                            required
                        >
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                    </div>

                    {/* Publishing Year */}
                    <div className="mb-4 animate__animated animate__bounceInUp animate__delay-4s">
                        <label className="block font-medium mb-2 text-white">Publishing Year:</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                            placeholder="Enter Publishing Year (e.g., 2021)"
                            name="publishingYear"
                        />
                    </div>

                    {/* Genre */}
                    <div className="mb-4 animate__animated animate__bounceInUp animate__delay-5s">
                        <label className="block font-medium mb-2 text-white">Genre:</label>
                        <select
                            className="w-full p-2 border rounded bg-transparent text-black"
                            name="genre"
                        >
                            <option value="action">Action</option>
                            <option value="rpg">RPG</option>
                            <option value="adventure">Adventure</option>
                            <option value="sports">Sports</option>
                            <option value="simulation">Simulation</option>
                        </select>
                    </div>

                    {/* User Email */}
                    <div className="mb-4 animate__animated animate__bounceInUp animate__delay-5s">
                        <label className="block font-medium mb-2 text-white">Your Email:</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={user?.email || ''} 
                            readOnly
                            className="w-full p-2 border rounded bg-gray-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
