import React from 'react';
import { Link } from 'react-router-dom';
import codersGround from '../../assets/hero-img.png';

const Home = () => {
    return (
        <div className="hero min-h-[85vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row md:gap-20 py-10">

                <div>
                    <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Coders Ground</h1>
                    <p className="py-6 text-lg">Coders Ground is where smart and enthusiastic people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.</p>
                    <Link to='/courses' className="btn btn-primary">View Courses</Link>
                </div>
                <img src={codersGround} className="md:max-w-xl rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Home;