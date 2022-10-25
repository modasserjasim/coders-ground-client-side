import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Courses from '../Pages/Courses/Courses';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/Others/CourseDetails/CourseDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>
            },
        ]
    }
])