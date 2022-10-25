import React, { useState } from 'react';
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/codersground-black.png';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='w-44' />
                        </Link>
                        <div className="md:hidden">
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
                            <li className=" hover:text-indigo-200">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to='/courses'>Courses</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to='/faq'>FAQ</Link>
                            </li>
                            <li className=" hover:text-indigo-200">
                                <Link to='/blog'>Blog</Link>
                            </li>

                        </ul>

                        <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                            <Link to='/login'
                                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                            >
                                Login
                            </Link>
                            <Link to='/register'
                                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link to='/login'
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Login
                    </Link>
                    <Link to='/register'
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;