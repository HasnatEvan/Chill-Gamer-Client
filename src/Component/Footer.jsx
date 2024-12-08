const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold">Chill Gamer</h2>
                        <p className="text-sm mt-2">
                            &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
                        </p>
                    </div>

                    {/* Center Section */}
                    <div className="flex flex-col sm:flex-row sm:space-x-6 text-center">
                        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                        <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                        <a href="/contact" className="text-sm hover:underline">Contact Us</a>
                    </div>

                    {/* Right Section */}
                    <div className="flex space-x-4 justify-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex items-center">
                            <i className="fab fa-facebook-f mr-2"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
                            <i className="fab fa-twitter mr-2"></i> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 flex items-center">
                            <i className="fab fa-instagram mr-2"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
