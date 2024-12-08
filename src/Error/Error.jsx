const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-200 animate-fade-in">
            <h1 className="text-7xl font-extrabold text-gray-800 animate-bounce">404</h1>
            <p className="mt-4 text-2xl text-gray-600 animate-slide-in-up">
                Page Not Found
            </p>
            <p className="mt-2 text-lg text-gray-500 animate-slide-in-up delay-200">
                The page you are looking for does not exist or has been moved.
            </p>
            <button
                onClick={() => (window.location.href = "/")}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-400 focus:outline-none animate-slide-in-up delay-400"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default Error;
