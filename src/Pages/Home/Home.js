import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import coders from '../../assets/coders.json';
import Lottie from 'lottie-react'


const Home = () => {
    return (
        <div className="hero min-h-[90vh] bg-base-200 px-4 md:px-6 overflow-hidden">
            <ScrollRestoration />
            <div className="hero-content flex-col md:flex-row md:gap-20 py-10">

                <div className='md:w-10/12'>
                    <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Coders Ground</h1>
                    <p className="py-6 text-lg">Coders Ground is where smart and enthusiastic people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.</p>
                    <Link to='/courses' className="btn btn-primary z-10">View Courses</Link>
                </div>
                <Lottie animationData={coders} loop={true} className="-m-16 -z-10" />
            </div>
        </div>
    );
};

export default Home;