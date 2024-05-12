import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);
    console.log("nahid", user);

    const handelLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out Successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    const navItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>

            {user && (
                <li>
                    <NavLink to="/update">Update Profile</NavLink>
                </li>
            )}

            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-red-100 py-2">
            <div className="container">
                <div className="navbar p-0 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">
                            daisyUI
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {loading && (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                        {!loading && user && (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName}
                                            />
                                        ) : (
                                            <RxAvatar className="w-10 h-10" />
                                        )}
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    {user.displayName && (
                                        <li>
                                            <div className="font-bold">
                                                {user.displayName}
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div
                                            className=""
                                            onClick={handelLogout}
                                        >
                                            Logout
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {!loading && !user && (
                        <Link
                            to="/login"
                            className="tw-btn py-2 px-5 rounded-md tw-btn-primary"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
