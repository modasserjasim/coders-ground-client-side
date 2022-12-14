import React from 'react';
import { HiOutlineClock } from "react-icons/hi";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, course_title, category_name, course_thumb, course_description, course_duration, instructor, price } = course;
    return (
        <div className="card w-auto bg-base-100 border-base-300 border shadow-xl hover:drop-shadow-2xl">

            <figure><img src={course_thumb} alt={course_title} /></figure>
            {
                category_name === 'Programming' && <div className="badge badge-primary absolute top-0 right-0">FEATURED</div>
            }
            <div className="card-body p-6">
                <div className='flex justify-between flex-wrap'>
                    <div className="badge badge-outline">{category_name}</div>
                    <div className="flex items-center gap-1">
                        <HiOutlineClock className="text-md" /> {course_duration}
                    </div>
                </div>
                <h2 className="card-title">
                    {course_title}

                </h2>
                <p className='py-2'>{course_description}</p>
                <div className="card-actions">
                    <div className="flex items-center gap-1">
                        <img src={instructor.img} alt={instructor.name} className="w-8 rounded-full" />
                        <h4>{instructor.name}</h4>
                    </div>
                </div>


            </div>
            <div className="flex justify-between py-3 px-6 border-t border-base-300">
                <p className='text-xl font-semibold'>${price}</p>
                <Link to={`/course/${id}`} className="btn btn-sm">Learn More</Link>
            </div>

        </div>
    );
};

export default CourseCard;