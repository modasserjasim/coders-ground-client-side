import React from 'react';
import { useContext } from 'react';
import { IoWarningOutline } from "react-icons/io5";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CourseCheckout = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const { course_title, course_thumb, price } = course;
    return (
        <div className='min-h-[82vh]'>
            <h1 className='text-4xl text-center font-bold py-12'>Checkout Now</h1>
            <div className="md:grid grid-cols-3 flex flex-col-reverse px-4 md:px-6 max-w-7xl mx-auto">
                <div className="md:col-span-2 col-span-3 bg-base-200 space-y-8 p-12 rounded-l-md">
                    <div className="p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                            <div className="text-yellow-500 text-xl">
                                <IoWarningOutline />
                            </div>
                            <div className="text-sm font-medium ml-3">Checkout</div>
                        </div>
                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete payment details below to enroll the course.</div>
                    </div>
                    <div className="rounded-md">
                        <form id="payment-form">
                            <section>
                                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Billing Information</h2>
                                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Name</span>
                                        <input name="name" className="focus:outline-none px-3" placeholder="Try Odinsson" required="" />
                                    </label>
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Email</span>
                                        <input name="email" type="email" className="focus:outline-none px-3" placeholder="try@example.com" required="" />
                                    </label>

                                </fieldset>
                            </section>
                        </form>
                    </div>
                    <div className="rounded-md">
                        <section>
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                    <span className="text-right px-2">Card</span>
                                    <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required="" />
                                </label>
                            </fieldset>
                        </section>
                    </div>
                    <button className="submit-button px-4 py-3 rounded-full bg-primary text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                        Pay €846.98
                    </button>
                </div>
                <div className="col-span-3 border-r border-t border-b md:col-span-1 shadow-sm drop-shadow-xl rounded-r-md">
                    <h1 className="py-6 border-b-2 text-xl px-8">Order Summary</h1>
                    <div className="flex justify-between items-center gap-3 border-b px-8 py-4">
                        <div className="flex items-center gap-2">
                            <img className='h-12 rounded-md' src={course_thumb} alt="Product" />
                            <p className="text-md font-semi-bold">{course_title}</p>
                        </div>
                        <div>
                            <p className="text-primary font-semibold inline-block">${price}</p>
                        </div>
                    </div>
                    <div className="px-8 border-b">
                        <div className="flex justify-between py-4 ">
                            <span>Subtotal</span>
                            <span className="font-semibold text-primary">€846.98</span>
                        </div>
                        <div className="flex justify-between py-4 ">
                            <span>Tax</span>
                            <span className="font-semibold text-primary">$200</span>
                        </div>
                    </div>
                    <div className="font-semibold text-xl px-8 flex justify-between py-8">
                        <span>Total</span>
                        <span>€846.98</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCheckout;