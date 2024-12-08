import React from 'react';

const trendingGames = [
    { id: 1, name: 'Game 1', title: 'An exciting adventure game.', imageUrl: 'https://i.ibb.co.com/DLK51zB/timber-explorer-1029473-526278.jpg', rating: 4.5 },
    { id: 2, name: 'Game 2', title: 'A challenging puzzle experience.', imageUrl: 'https://i.ibb.co.com/9c87Bs8/red-human-figure-standing-labyrinth-220873-6717.jpg', rating: 4.7 },
    { id: 3, name: 'Game 3', title: 'An immersive RPG world.', imageUrl: 'https://i.ibb.co.com/4Z9Tj15/beautiful-medieval-fantasy-landscape-23-2150916358.jpg', rating: 4.2 },
    { id: 4, name: 'Game 4', title: 'A thrilling action-packed game.', imageUrl: 'https://i.ibb.co.com/SsLDpRx/apocalyptic-destruction-war-zone-landscape-23-2150985678.jpg', rating: 4.8 },
];

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <span key={`full-${index}`} className="text-yellow-500 text-lg">★</span>
                ))}
            {halfStar && <span className="text-yellow-500 text-lg">✰</span>}
            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <span key={`empty-${index}`} className="text-gray-300 text-lg">☆</span>
                ))}
        </>
    );
};

const Section1 = () => {
    return (
        <section className="trending-games bg-gradient-to-r from-gray-100 to-blue-50 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
                    Trending Games
                </h2>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Explore the most popular games that are trending right now! From action-packed adventures to mind-bending puzzles, we have something for everyone. Choose your favorite and dive into the world of gaming.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                    {trendingGames.map((game) => (
                        <div
                            key={game.id}
                            className="card bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={game.imageUrl}
                                alt={game.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{game.name}</h3>
                                {game.title && (
                                    <p className="text-sm text-gray-500 italic mt-1">{game.title}</p>
                                )}
                                <div className="flex items-center mt-4">
                                    <span className="mr-2 text-sm text-gray-600 font-medium">Rating:</span>
                                    {renderStars(game.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section1;
