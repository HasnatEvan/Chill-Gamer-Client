import { Link, NavLink } from "react-router-dom";
import logo from '../../src/assets/logo.jpeg';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to="/" activeClassName="text-primary" exact>Home</NavLink></li>
            <li><NavLink to="/reviews" activeClassName="text-primary">All Reviews</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/addReview" activeClassName="text-primary">Add Review</NavLink></li>
                    <li><NavLink to="/myReviews" activeClassName="text-primary">My Reviews</NavLink></li>
                    <li><NavLink to="/gameWatch" activeClassName="text-primary">Game Watchlist</NavLink></li>
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
                  <Link to={'/'}>
                   <button onClick={handleLogOut} className=" text-white  hover:bg-gray-700">
                        Log Out
                    </button>

                  </Link> 
                ) : (
                    <NavLink to="/login" className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default NavBar;
