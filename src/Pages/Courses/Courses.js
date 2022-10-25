import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import CoursesSidebar from '../Shared/CoursesSidebar/CoursesSidebar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='lg:max-w-7xl mx-auto'>
            <div className='grid grid-cols-4 gap-10'>

                <div className='col-span-3 py-20'>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
                <div className='col-span-1'>
                    <CoursesSidebar></CoursesSidebar>
                </div>

            </div>
        </div>
    );
};

export default Courses;