import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";

const Review = () => {
    const games = useLoaderData(); 

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 w-11/12 mx-auto">
            {/* Header */}
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                Total Reviews <span className="text-blue-500"></span>
            </h2>

            {/* Game Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <GameCard key={game._id} game={game}></GameCard> 
                ))}
            </div>
        </div>
    );
};

export default Review;
