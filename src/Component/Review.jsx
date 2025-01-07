import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";

const Review = () => {
    const games = useLoaderData(); // Load all games
    const [filteredGames, setFilteredGames] = useState(games);
    const [sortOption, setSortOption] = useState("");
    const [genreFilter, setGenreFilter] = useState("all");
    const [search, setSearch] = useState("");

    useEffect(() => {
        let updatedGames = [...games];

        // Filter by genre
        if (genreFilter !== "all") {
            updatedGames = updatedGames.filter((game) =>
                Array.isArray(game.genres) && game.genres.includes(genreFilter)
            );
        }

        // Filter by search
        if (search.trim()) {
            updatedGames = updatedGames.filter((game) =>
                game.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort games
        if (sortOption) {
            const [key, order] = sortOption.split("-");
            updatedGames.sort((a, b) =>
                order === "asc" ? a[key] - b[key] : b[key] - a[key]
            );
        }

        setFilteredGames(updatedGames);
    }, [games, genreFilter, search, sortOption]);

    return (
        <div className="min-h-screen bg-black text-gray-400 py-8 px-4">
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-center text-[#00ffcc] mb-8">
                𝑮𝒂𝒎𝒆 𝑹𝒆𝒗𝒊𝒆𝒘𝒔
            </h1>

            {/* Display a message for "All Genres" */}
            {genreFilter === "all" && (
                <p className="text-center text-sm text-gray-600 my-4">
                    Explore all kinds of games from thrilling action to immersive simulation! 
                    Choose your favorite genre to narrow down the list.
                </p>
            )}

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search games..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#00ffcc] w-full sm:w-1/3 text-black"
                />

                {/* Sort */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#00ffcc] w-full sm:w-1/3 text-black"
                >
                    <option value="">Sort By</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="rating-desc">Rating: High to Low</option>
                </select>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <GameCard key={game._id} game={game}></GameCard>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-600 col-span-full">
                        No reviews found for the selected criteria.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Review;
