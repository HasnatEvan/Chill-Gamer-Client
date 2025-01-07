import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/reviews">All Reviews</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/addReview">Add Review</NavLink></li>
                    <li><NavLink to="/myReviews">My Reviews</NavLink></li>
                    <li><NavLink to="/gameWatch">Game Watchlist</NavLink></li>
                </>
            )}
        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.log("Error during logout", error.message);
            });
    };

    return (
        <>
            <style>
                {`
                /* Bounce animation */
                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    25% {
                        transform: translateY(-10px);
                    }
                    50% {
                        transform: translateY(0);
                    }
                    75% {
                        transform: translateY(-5px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                /* Fade-in and scale animation */
                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                /* Apply the bounce animation to the logo */
                .bounce-text {
                    animation: bounce 1s ease infinite;
                }

                /* Apply the fade-in and scale animation */
                .fade-scale-text {
                    animation: fadeInScale 1.5s ease-out forwards;
                }
                `}
            </style>

            <div className="navbar bg-gradient-to-r from-[#0b0c14] via-[#2a3b50] to-[#0f2c3c] text-[#00ffcc] shadow-xl px-4 py-3 sticky top-0 z-50">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center space-x-3">
                <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#00ffcc]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#0b0c14] text-[#00ffcc] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg absolute left-0"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl flex items-center space-x-2">
                    
                        {/* Text Logo with Enhanced Style */}
                        <span className="text-2xl  font-extrabold text-[#00ffcc] text-shadow-md bounce-text fade-scale-text">
                            𝕮𝖍𝖎𝖑𝖑 𝕲𝖆𝖒𝖊𝖗
                        </span>
                    </NavLink>
                    {/* Mobile Hamburger Menu */}
                   
                </div>

                {/* Navbar Center (Desktop) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#00ffcc]">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    {/* User Icon and Logout Button */}
                    {user ? (
                        <div className="flex items-center space-x-2">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="lg:h-14 lg:w-14 h-8 w-8 rounded-full border-2 border-[#00ffcc] object-cover shadow-2xl"
                                />
                            ) : (
                                <FaUserCircle className="text-[#00ffcc] h-14 w-14" />
                            )}
                            <button
                                onClick={handleLogOut}
                                className="text-[#00ffcc] hover:bg-[#00ffaa] hover:text-black px-4 py-2 rounded-lg shadow-xl"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="btn btn-outline btn-sm text-[#00ffcc] border-[#00ffcc] hover:bg-[#00ffaa] hover:text-black"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavBar;
