import React from 'react';
import { HiOutlineClock } from "react-icons/hi";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, course_title, category_name, course_thumb, course_description, course_duration, description, author } = course;
    return (
        <div className="card w-auto bg-base-100 shadow-xl hover:drop-shadow-2xl">

            <figure><img src={course_thumb} alt={course_title} /></figure>
            {
                category_name === 'Programming' && <div className="badge badge-secondary absolute top-0 right-0">FEATURED</div>
            }
            <div className="card-body p-6">
                <div className="badge badge-outline">{category_name}</div>
                <h2 className="card-title">
                    {course_title}

                </h2>
                <p className='py-2'>{course_description}</p>
                <div className="card-actions justify-between items-center">
                    <div className="flex items-center gap-1">
                        <img src={author.img} alt={author.name} className="w-8 rounded-full" />
                        <h4>{author.name}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                        <HiOutlineClock className="text-xl" /> {course_duration}
                    </div>
                </div>
                <Link to={`/course/${id}`} className="btn btn-wide">Learn More</Link>
            </div>

        </div>
    );
};

export default CourseCard;