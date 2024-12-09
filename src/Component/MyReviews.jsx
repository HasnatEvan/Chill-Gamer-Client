import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom"; // For the Update button
import Swal from "sweetalert2";

const MyReviews = () => {
    const reviews = useLoaderData(); // Load all reviews
    const { user } = useContext(AuthContext); // Get the logged-in user's data

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (reviews && user) {
            const filtered = reviews.filter((review) => review.email === user.email);
            setFilterData(filtered); // Set filtered data
        }
    }, [reviews, user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-black.vercel.app/game/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            // Show success message
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });

                            // Update filtered data after deletion
                            setFilterData((prevData) =>
                                prevData.filter((review) => review._id !== _id)
                            );
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting review:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting the review.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center py-8 px-4">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">My Reviews</h2>

            {/* Display filtered reviews */}
            {filterData.length === 0 ? (
                <p className="text-xl text-gray-600">You have not written any reviews yet.</p>
            ) : (
                <table className="min-w-full table-auto bg-white rounded-xl shadow-xl p-6">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-300 to-pink-300 text-white">
                            <th className="py-3 px-6 text-left">Game Title</th>
                            <th className="py-3 px-6 text-left">Rating</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((review) => (
                            <tr key={review._id} className="border-t border-gray-300 hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6 text-lg font-semibold text-gray-800">{review.title}</td>
                                <td className="py-3 px-6 text-gray-600">{review.rating} / 5</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex space-x-2 justify-center">
                                        {/* Update button */}
                                        <Link
                                            to={`/updateReview/${review._id}`}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                                                Update
                                            </button>
                                        </Link>
                                        {/* Delete button */}
                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyReviews;
