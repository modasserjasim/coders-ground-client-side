import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import CoursesSidebar from '../Shared/CoursesSidebar/CoursesSidebar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='lg:max-w-7xl mx-auto px-4 md:px-6'>
            <div className='flex flex-col-reverse md:grid md:grid-cols-8 gap-5 lg:gap-8'>
                <div className='col-span-2'>
                    <CoursesSidebar></CoursesSidebar>
                </div>

                <div className='col-span-6 py-20'>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Courses;