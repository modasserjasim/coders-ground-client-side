import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import nodeArch from '../../assets/node-arch.png';

const Blog = () => {
    return (
        <div className='my-10 px-4 md:px-6 max-w-7xl mx-auto'>
            <div className="mb-12 space-y-2 text-center">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
                <h2 className="text-2xl font-bold md:text-4xl">4 React JS Q&A</h2>
                <p className="lg:w-5/12 lg:mx-auto">Learn how to think in React with step-by-step explanations and interactive examples.</p>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        1. what is CORS?
                    </h5>
                    <p className="text-md mt-4">
                        CORS stands for cross-origin resource sharing.<br />
                        The CORS method allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.
                    </p>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg mt-8">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-primary to-purple-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        2. Why are you using firebase? What other options do you have to implement authentication?
                    </h5>
                    <div className="text-md mt-4">
                        The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, Web apps and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data. <br /> <br />

                        <span className='text-xl font-semibold'>The best Firebase features that I am addicted to use are:</span><br />
                        <ul className='ml-2 my-3'>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <b>Firebase Remote Config:</b> I love this product; it actually saved me sometimes from going broke.
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <b>Firebase Database:</b> The feature I have been using from the very first day since it stores data as JSON and synchronized in realtime.
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <b>Firebase Authentication:</b> it has saved countless hours of my life since it allows to authenticates your app with the users.
                            </li>
                        </ul>

                        <span className='text-xl font-semibold'>What other options do you have to implement authentication?</span><br />
                        There are many option to implement authentication such as <b>Auth0</b>, <b>MongoDB</b>, <b>Passport</b>, <b>Okta</b>, <b>Amazon Cognito</b> and <b>Keycloak</b> are the most popular alternatives to Firebase Authentication.
                    </div>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg mt-8">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        3. How does the private route work?
                    </h5>
                    <p className="text-md mt-4">
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </p>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg mt-8">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        4. What is Node? How does Node work?
                    </h5>
                    <p className="text-md mt-4">
                        Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.<br /><br />

                        Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.<br /><br />

                        <b>Node.js = Runtime Environment + JavaScript Library</b>
                        <br /><br />

                        <span className='text-xl font-semibold'>How does Node work?</span><br />
                        Node is completely event-driven. Basically the server consists of one thread processing one event after another.<br /><br />

                        A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.<br /><br />

                        So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js<br /> <br />
                        <img src={nodeArch} alt="Node Architecture" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;