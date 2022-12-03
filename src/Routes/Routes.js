import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import Courses from '../Pages/Courses/Courses';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import FAQ from '../Pages/FAQ/FAQ';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Register from '../Pages/Register/Register';
import CourseCheckout from '../Pages/CourseCheckout/CourseCheckout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PasswordReset from '../Pages/Others/PasswordReset/PasswordReset';
import UserProfile from '../Pages/Others/UserProfile/UserProfile';
import EditProfile from '../Pages/Others/EditProfile/EditProfile';

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
                loader: () => fetch('https://coders-ground.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://coders-ground.vercel.app/course/${params.id}`)
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
                path: '/password-reset',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/edit-profile',
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CourseCheckout></CourseCheckout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coders-ground.vercel.app/course/${params.id}`)
            }


        ]
    }
])