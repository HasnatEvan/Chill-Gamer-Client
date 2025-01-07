import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRated = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-black.vercel.app/highest-rated-games")
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
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with margin */}
        <h2 className="lg:text-4xl text-2xl font-extrabold text-center mb-12 pt-10 text-[#00ffcc] drop-shadow-lg">
        𝑯𝒊𝒈𝒉𝒆𝒔𝒕 𝑹𝒂𝒕𝒆𝒅 𝑮𝒂𝒎𝒆𝒔
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {games.map((game) => (
            <div
              key={game._id}
              className="card bg-400 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-blue-200"
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
                  className="inline-block w-full text-center text-black bg-gradient-to-r from-[#00ffcc] to-[#00b3b3] py-2 rounded-md font-medium transition-transform transform hover:scale-105 hover:from-[#00b3b3] hover:to-[#00ffcc]"
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
