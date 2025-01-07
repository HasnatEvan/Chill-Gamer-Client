import { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';

const GameWatch = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const handleDelete = (gameId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF6347', // Navbar-style red
      cancelButtonColor: '#4CAF50', // Navbar-style green
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWatchlist = watchlist.filter((game) => game._id !== gameId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        Swal.fire('Deleted!', 'Your game has been removed.', 'success');
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2C3E50] py-8 px-4">
      <div className="max-w-5xl w-full bg-[#34495E] bg-opacity-90 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-[#00ffcc] text-center py-6 border-b-4 border-gray-300 mb-4">
        𝒀𝒐𝒖𝒓 𝑾𝒂𝒕𝒄𝒉𝒍𝒊𝒔𝒕
        </h2>

        {watchlist.length === 0 ? (
          <p className="text-xl text-gray-200 text-center py-8">Your watchlist is empty.</p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-[#1F2937] text-gray-300">
                <th className="py-3 px-6 text-left">Game Title</th>
                <th className="py-3 px-6 text-left">Genre</th>
                <th className="py-3 px-6 text-left">Year</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((game) => (
                <tr key={game._id} className="border-t border-gray-200 hover:bg-[#4A5568] transition-all duration-300">
                  <td className="py-3 px-6 text-lg font-semibold text-gray-500">{game.title}</td>
                  <td className="py-3 px-6 text-gray-500">{game.genre}</td>
                  <td className="py-3 px-6 text-gray-500">{game.publishingYear}</td>
                  <td className="py-3 px-6 text-center">
                    <button 
                      onClick={() => handleDelete(game._id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GameWatch;
