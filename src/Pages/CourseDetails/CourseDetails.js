import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSidebar from '../Shared/CoursesSidebar/CoursesSidebar';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, course_title, category_name, course_thumb, course_description, course_duration, description, author } = course;
    console.log(course);
    return (
        <div className='lg:max-w-7xl mx-auto px-4 md:px-6'>
            <div className='flex flex-col-reverse md:grid md:grid-cols-8 gap-5 lg:gap-8'>
                <div className='col-span-2'>
                    <CoursesSidebar></CoursesSidebar>
                </div>
                <div className='col-span-4 py-20'>
                    <div className="">
                        <h1>Welcome</h1>
                        <img src={course_thumb} alt={course_title} />
                    </div>
                </div>
                <div className='col-span-2'>
                    <CoursesSidebar></CoursesSidebar>
                </div>


            </div>
        </div>
    );
};

export default CourseDetails;
