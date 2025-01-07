import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../../src/assets/logo.jpeg'; // সঠিক লোগো পাথ

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0b0c14] via-[#2a3b50] to-[#0f2c3c] text-gray-400 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold flex items-center justify-center md:justify-start space-x-2">
                            <img
                                src={logo} // লোগো পাথ এখানে ব্যবহার করা হলো
                                alt="Chill Gamer Logo"
                                className="h-8 w-8 rounded-full"
                            />
                            <span className="text-[#00ffcc] animate-[fadeIn_1s_ease-out_forwards]">   𝕮𝖍𝖎𝖑𝖑 𝕲𝖆𝖒𝖊𝖗</span> {/* Navbar color with animation */}
                        </h2>
                    </div>

                    {/* Center Section */}
                    <div className="flex flex-col items-center space-y-2 text-sm">
                        <a href="/home" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/contact" className="hover:underline">Contact Us</a>
                        <a href="/support" className="hover:underline">Support</a>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col space-y-2 items-center">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-500"
                        >
                            <FaFacebookF className="text-blue-500" />
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-400"
                        >
                            <FaLinkedinIn className="text-blue-400" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-pink-500"
                        >
                            <FaInstagram className="text-pink-500" />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section - Centered and at the bottom */}
            <div className="text-center lg:ml-12 mt-6">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
