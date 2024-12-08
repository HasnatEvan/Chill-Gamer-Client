import { Link, NavLink } from "react-router-dom";
import logo from '../../src/assets/logo.jpeg';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Apply theme to the document body
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleThemeToggle = (event) => {
        setTheme(event.target.checked ? "synthwave" : "light");
    };

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
        <div className="navbar bg-[#1F2937] shadow-lg px-4 py-2">
            {/* Navbar Start */}
            <div className="navbar-start flex items-center space-x-3">
                <NavLink to="/" className="btn btn-ghost text-xl flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </NavLink>
                {/* Mobile Hamburger Menu */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
                    >
                        {links}
                    </ul>
                </div>
            </div>

            {/* Navbar Center (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center space-x-4">
                <div className="relative group">
                    {user && user.photoURL ? (
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                        </div>
                    ) : (
                        <FaUserCircle className="text-white h-10 w-10" />
                    )}
                    {user?.displayName && (
                        <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {user.displayName}
                        </span>
                    )}
                </div>
                {user ? (
                    <button onClick={handleLogOut} className="text-white hover:bg-gray-700">
                        Log Out
                    </button>
                ) : (
                    <NavLink to="/login" className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
                        Login
                    </NavLink>
                )}

                {/* Theme Toggle */}
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller"
                        onChange={handleThemeToggle}
                    />
                    {/* Sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* Moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;
