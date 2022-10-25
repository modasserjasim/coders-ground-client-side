import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesSidebar = () => {

    return (
        <aside className="p-6 bg-base-200 min-h-screen">
            <div className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>

                </div>

            </div>
        </aside>
    );
};

export default CoursesSidebar;