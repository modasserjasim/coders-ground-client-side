import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CoursesSidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <aside className="px-4 py-6 bg-base-200 h-auto">
            <div className="space-y-8 text-sm">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold tracking-widest uppercase">Our courses</h2>
                    {
                        courses.map(course => <div key={course.id} className="border rounded-md p-1 hover:bg-primary hover:text-white hover:transition transition hover:delay-75 delay-75">
                            <Link to={`/course/${course.id}`} className='flex md:block lg:flex items-center gap-2 '>
                                <img src={course.course_thumb} alt={course.course_title} className="w-16 h-12 rounded" />
                                <h3 className='font-semibold text-base'>{course.course_title}</h3>
                            </Link>
                        </div>)
                    }
                </div>

            </div>
        </aside>
    );
};

export default CoursesSidebar;