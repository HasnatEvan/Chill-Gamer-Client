import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaStar } from "react-icons/fa";

const MyReviews = () => {
    const reviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (reviews && user) {
            const filtered = reviews.filter((review) => review.email === user.email);
            setFilterData(filtered);
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
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success",
                            });
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
        <div className="min-h-screen bg-[#1F2937] flex flex-col items-center py-8 px-4 animate-fadeIn">
            <h2 className="text-4xl font-extrabold text-[#00ffcc] mb-6 animate-slideInTop">
                𝑴𝒚 𝑹𝒆𝒗𝒊𝒆𝒘𝒔
            </h2>

            {filterData.length === 0 ? (
                <p className="text-xl text-gray-400 animate-pulse">You have not written any reviews yet.</p>
            ) : (
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full table-auto bg-[#2D3748] rounded-xl shadow-xl p-6 animate-fadeIn">
                        <thead>
                            <tr className="bg-[#1F2937] text-white">
                                <th className="py-3 px-6 text-left text-gray-400">Game Title</th>
                                <th className="py-3 px-6 text-left text-gray-400">Rating</th>
                                <th className="py-3 px-6 text-left text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((review) => (
                                <tr
                                    key={review._id}
                                    className="border-t border-gray-300 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                                >
                                    <td className="py-3 px-6 text-lg font-semibold text-gray-400">
                                        {review.title}
                                    </td>
                                    <td className="py-3 px-6 text-gray-400">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`inline-block ${
                                                    index < review.rating
                                                        ? "text-yellow-400 animate-bounce"
                                                        : "text-gray-500"
                                                }`}
                                            />
                                        ))}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex space-x-2 justify-center">
                                            <Link
                                                to={`/updateReview/${review._id}`}
                                                className="text-blue-400 hover:text-blue-600"
                                            >
                                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110">
                                                    <FaEdit className="inline-block" />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
                                            >
                                                <FaTrashAlt className="inline-block" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyReviews;
