import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import Courses from '../Pages/Courses/Courses';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import FAQ from '../Pages/FAQ/FAQ';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import CourseDetails from '../Pages/Others/CourseDetails/CourseDetails';
import Register from '../Pages/Register/Register';

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
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>
            },

        ]
    }
])