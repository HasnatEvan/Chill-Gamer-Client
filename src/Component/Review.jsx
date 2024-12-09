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
        <div className="min-h-screen bg-gray-100 py-8 px-4 w-11/12 mx-auto">
            {/* Header */}
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                Total Reviews <span className="text-blue-500">({filteredGames.length})</span>
            </h2>

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search games..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full sm:w-1/3"
                />

                {/* Sort */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full sm:w-1/3"
                >
                    <option value="">Sort By</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="rating-desc">Rating: High to Low</option>
                    <option value="year-asc">Year: Old to New</option>
                    <option value="year-desc">Year: New to Old</option>
                </select>

                {/* Genre Filter */}
                <select
                    value={genreFilter}
                    onChange={(e) => setGenreFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full sm:w-1/3"
                >
                    <option value="all">All Genres</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="rpg">RPG</option>
                    <option value="simulation">Simulation</option>
                    <option value="strategy">Strategy</option>
                    <option value="sports">Sports</option>
                </select>
            </div>

            {/* Display a message for "All Genres" */}
            {genreFilter === "all" && (
                <p className="text-center text-sm text-gray-600 mt-4">
                    "Explore all kinds of games from thrilling action to immersive simulation! Choose your favorite genre to narrow down the list."
                </p>
            )}

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
