import React from 'react';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';
import CoursesSidebar from '../Shared/CoursesSidebar/CoursesSidebar';
import { FaCheck, FaRegCheckCircle } from "react-icons/fa";
import { BiPrinter } from "react-icons/bi";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [7, 9]
};

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, course_title, category_name, course_thumb, description, instructor, course_features, materials, price } = course;
    return (
        <div ref={ref} className='lg:max-w-7xl mx-auto px-4 md:px-6'>
            <ScrollRestoration />
            <div className='flex flex-col-reverse md:grid md:grid-cols-8 gap-5 lg:gap-8'>
                <div className='col-span-2 bg-base-200'>
                    <CoursesSidebar></CoursesSidebar>
                </div>
                <div className='col-span-4 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className="mb-5">
                            <h1 className='text-2xl font-semibold'>{course_title}</h1>
                            <h3 className="">Category: {category_name}</h3>
                        </div>
                        <Pdf targetRef={ref} filename={`${id}.pdf`} options={options} x={0} y={0} scale={0.5}>
                            {({ toPdf }) => <button onClick={toPdf} type='button'><BiPrinter className='text-4xl hover:text-primary' /></button>
                            }
                        </Pdf>
                    </div>
                    <img src={course_thumb} alt={course_title} className="rounded-md" />
                    <h3 className='text-2xl font-bold py-2'>About Course</h3>
                    <p>{description}</p>

                    <h3 className='text-xl font-bold mt-12'>What Will You Learn?</h3>
                    <div className='p-4'>

                        {
                            course_features.map((feature, index) => <div key={index}>
                                <p className='flex items-center gap-2 py-1'>
                                    <span><FaRegCheckCircle className='text-primary text-xl' /></span> {feature}</p>
                            </div>)
                        }
                    </div>
                    <h3 className='text-xl font-bold mt-8 py-2'>About Instructor</h3>
                    <div className='lg:flex gap-4 md:m-5 mb-5 border'>
                        <img src={instructor.img} alt={instructor.name} className="md:w-48" />
                        <div className='p-4'>
                            <h3 className='text-xl font-bold'>{instructor.name}</h3>
                            <p>{instructor.info}</p>
                        </div>

                    </div>
                    <div className='md:hidden p-4 border rounded-md shadow-2xl'>
                        <h1 className='text-4xl font-extrabold'>${price}</h1>
                        <h3 className='text-xl font-bold mt-10'>Material Includes</h3>

                        {
                            materials.map((mt, index) => <div key={index}>
                                <p className='flex items-center gap-2 py-2'><FaCheck className='text-primary' /> {mt}</p>
                            </div>)
                        }
                        <Link to={`/checkout/${id}`} className="w-full btn mt-7 hover:bg-primary">Get Premium Access</Link>
                    </div>
                </div>
                {/* Hide this on mobile  */}
                <div className='col-span-2 my-10 hidden md:block'>
                    <div className='p-4 border rounded-md shadow-2xl md:sticky md:top-28'>
                        <h1 className='text-4xl font-extrabold'>${price}</h1>
                        <h3 className='text-xl font-bold mt-10'>Material Includes</h3>

                        {
                            materials.map((mt, index) => <div key={index}>
                                <p className='flex items-center gap-2 py-2'><FaCheck className='text-primary' /> {mt}</p>
                            </div>)
                        }
                        <Link to={`/checkout/${id}`} className="w-full border-0 btn mt-7 hover:bg-primary text-white">Get Premium Access</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CourseDetails;
