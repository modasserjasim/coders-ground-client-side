import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-base-300 px-4">
            <div className="max-w-5xl mx-auto  py-10">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-4xl font-semibold mb-3"> Download our mobile app </h3>
                    <p>     Be skilled. All day, every day. </p>
                    <div className="flex flex-col items-center sm:flex-row justify-center my-10 gap-3">
                        <div className="flex items-center border border-gray-500 rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt='welcome' />
                            <div className="text-left ml-3">
                                <p className='text-xs '>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border border-gray-500 rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt='welcome' />
                            <div className="text-left ml-3">
                                <p className='text-xs '>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 md:mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm ">
                    <p className="order-2 md:order-1 mt-8 md:mt-0 text-center">
                        <span className='mr-2 '>Copyright © 2022 Coders Ground - All right reserved</span>
                        <span className="px-2 border-l border-secondary hover:text-primary"><Link>Privacy Policy</Link></span>
                        <span className="px-2 border-l border-secondary hover:text-primary"><Link>Terms and Conditions</Link></span>

                    </p>
                    <div className="flex order-1 md:order-2 text-xl">
                        <a className='px-2' href="facebook.com"><FaFacebookF /></a>
                        <a className='px-2' href="instagram.com"><FaInstagram /> </a>
                        <a className='px-2' href="twitter.com"><FaTwitter /> </a>
                        <a className='px-2' href="linkedin.com"><FaLinkedinIn /> </a>
                        <a className='px-2' href="github.com"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
