import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRated = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/highest-rated-games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  // Render stars with full, half, and empty stars
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
            <span key={`full-${index}`} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        {halfStar && <span className="text-yellow-500 text-lg">✰</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300 text-lg">
              ☆
            </span>
          ))}
      </>
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-700">
          Highest Rated Games
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game._id}
              className="card bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-blue-200"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {game.name}
                </h3>
                {game.title && (
                  <p className="text-sm text-gray-500 italic mb-2">{game.title}</p>
                )}
                <div className="flex items-center mb-4">
                  <p className="text-sm font-medium text-gray-600 mr-2">Rating:</p>
                  {renderStars(game.rating)}
                </div>
                <Link
                  to={`/reviewDetails/${game._id}`}
                  className="inline-block w-full text-center text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-medium transition-transform transform hover:scale-105"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighestRated;
