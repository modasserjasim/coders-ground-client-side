import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CoursesSidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://coders-ground.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <aside className="px-4 py-6 bg-base-200 h-auto">
            <div className="space-y-8 text-sm">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold tracking-widest uppercase">Our courses</h2>
                    {
                        courses.map(course => <div key={course.id} className="bg-base-100 dark:border-gray-400 border rounded-md hover:bg-primary hover:text-white hover:transition transition hover:delay-75 delay-75">
                            <NavLink to={`/course/${course.id}`} className={({ isActive }) => isActive ? 'flex md:block lg:flex bg-primary rounded text-white items-center gap-2 p-1' : 'flex md:block lg:flex items-center gap-2 p-1'}>
                                <img src={course.course_thumb} alt={course.course_title} className="w-16 h-12 rounded" />
                                <h3 className='font-semibold text-base'>{course.course_title}</h3>
                            </NavLink>
                        </div>)
                    }
                </div>

            </div>
        </aside>
    );
};

export default CoursesSidebar;