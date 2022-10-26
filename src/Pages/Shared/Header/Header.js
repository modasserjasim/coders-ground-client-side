import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { HiMenuAlt1, HiOutlineX, HiUserCircle } from "react-icons/hi";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../../../assets/codersground-black.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('You have logged out from the site');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex px-4 md:px-6">
                <div>
                    <div className="flex items-center gap-7 justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='w-44' />
                        </Link>
                        <div className="flex items-center md:hidden">
                            <label className="swap swap-rotate mt-1">
                                <input type="checkbox" />
                                <IoSunnyOutline className="swap-on fill-current text-2xl" />
                                <IoMoonOutline className="swap-off fill-current text-2xl" />
                            </label>
                            {
                                user?.uid &&
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        {
                                            user?.photoURL ? <div className="w-8 rounded-full">
                                                <img src={user?.photoURL} alt='User img' /> </div> :
                                                <div className="text-3xl rounded-full">
                                                    <HiUserCircle /> </div>
                                        }
                                    </label>
                                </div>
                            }
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <HiOutlineX className='text-2xl' />
                                ) : (
                                    <HiMenuAlt1 className='text-2xl' />
                                )}
                            </button>

                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className=" hover:text-primary">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className=" hover:text-primary">
                                <Link to='/courses'>Courses</Link>
                            </li>
                            <li className=" hover:text-primary">
                                <Link to='/faq'>FAQ</Link>
                            </li>
                            <li className=" hover:text-primary">
                                <Link to='/blog'>Blog</Link>
                            </li >
                            <li className="hover:text-primary hidden md:block">
                                <label className="swap swap-rotate mt-2">
                                    <input type="checkbox" />
                                    <IoSunnyOutline className="swap-on fill-current text-2xl" />
                                    <IoMoonOutline className="swap-off fill-current text-2xl" />
                                    {/* <HiMoon className="swap-off fill-current text-3xl" /> */}
                                </label>
                            </li>

                        </ul>

                        <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                            {
                                user?.uid ? <Link onClick={handleLogOut}
                                    className="px-4 mr-3 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Log Out
                                </Link> : <>
                                    <Link to='/login'
                                        className="px-4 mr-3 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Login
                                    </Link>
                                    <Link to='/register'
                                        className="px-4 py-2 btn-primary rounded-md shadow"
                                    >
                                        Register
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:flex items-center">
                    <div>
                        {
                            user?.uid ? <Link onClick={handleLogOut}
                                className="px-4 mr-3 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                            >
                                Log Out
                            </Link> : <>
                                <Link to='/login'
                                    className="px-4 mr-3 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Login
                                </Link>
                                <Link to='/register'
                                    className="px-4 py-2 btn-primary rounded-md shadow"
                                >
                                    Register
                                </Link>
                            </>
                        }
                    </div>
                    {
                        user?.uid &&
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    user?.photoURL ? <div className="w-8 rounded-full">
                                        <img src={user?.photoURL} alt='User img' /> </div> :
                                        <div className="text-3xl rounded-full">
                                            <HiUserCircle /> </div>
                                }
                            </label>
                        </div>
                    }
                </div>

            </div>
        </nav>
    );
};

export default Header;