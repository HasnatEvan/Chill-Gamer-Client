import { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';
import img from '../../src/assets/signup.jpg'; // Import your image

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
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
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
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-8 px-4"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-5xl w-full bg-white bg-opacity-80 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center py-6 border-b-4 border-gray-300 mb-4">
          Your Watchlist
        </h2>

        {watchlist.length === 0 ? (
          <p className="text-xl text-gray-600 text-center py-8">Your watchlist is empty.</p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-purple-300 to-pink-300 text-white">
                <th className="py-3 px-6 text-left">Game Title</th>
                <th className="py-3 px-6 text-left">Genre</th>
                <th className="py-3 px-6 text-left">Year</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((game) => (
                <tr key={game._id} className="border-t border-gray-300 hover:bg-gray-100 transition-all duration-300">
                  <td className="py-3 px-6 text-lg font-semibold text-gray-800">{game.title}</td>
                  <td className="py-3 px-6 text-gray-600">{game.genre}</td>
                  <td className="py-3 px-6 text-gray-600">{game.publishingYear}</td>
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
