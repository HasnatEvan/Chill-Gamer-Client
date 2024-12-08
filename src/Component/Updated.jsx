import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // SweetAlert2 ইমপোর্ট
import up from '../../src/assets/up.jpg'; // Import the background image

const Updated = () => {
    const games = useLoaderData(); // Get the game data
    const { _id, image, title, review, rating, publishingYear, genre, email } = games; // Destructure the game data
    const navigate = useNavigate(); // Navigation hook

    const handleUpdated = (event) => {
        event.preventDefault(); // ফর্ম রিফ্রেশ বন্ধ করা
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const updateGame = { image, title, review, rating, publishingYear, genre, email };

        fetch(`http://localhost:5000/game/${_id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateGame), // Updated data পাঠানো
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Game updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close',
                    }).then(() => {
                        navigate('/reviews'); // আপডেট সফল হলে হোম পেজে রিডাইরেক্ট
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong while updating.',
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
            });
    };

    return (
        <div>
            <div
                className="min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${up})` }} // Set 'up.jpg' as the background image
            >
                <div className="max-w-2xl w-full p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
                    <h2 className="text-2xl text-center font-bold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s">
                        Update Your Review
                    </h2>
                    <form onSubmit={handleUpdated}>
                        {/* Form Fields */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Game Cover Image URL:</label>
                            <input
                                type="url"
                                className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                                placeholder="Enter Image URL"
                                name="image"
                                defaultValue={image}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Game Title:</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                                placeholder="Enter Game Title"
                                name="title"
                                defaultValue={title}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Review Description:</label>
                            <textarea
                                className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                                placeholder="Write your review..."
                                rows="4"
                                name="review"
                                defaultValue={review}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Rating:</label>
                            <select
                                className="w-full p-2 border rounded bg-transparent text-black"
                                name="rating"
                                defaultValue={rating}
                                required
                            >
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Publishing Year:</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded bg-transparent text-white placeholder-white"
                                placeholder="Enter Publishing Year (e.g., 2021)"
                                name="publishingYear"
                                defaultValue={publishingYear}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Genre:</label>
                            <select
                                className="w-full p-2 border rounded bg-transparent text-black"
                                name="genre"
                                defaultValue={genre}
                            >
                                <option value="action">Action</option>
                                <option value="rpg">RPG</option>
                                <option value="adventure">Adventure</option>
                                <option value="sports">Sports</option>
                                <option value="simulation">Simulation</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2 text-white">Your Email:</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                value={email}
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
        </div>
    );
};

export default Updated;
