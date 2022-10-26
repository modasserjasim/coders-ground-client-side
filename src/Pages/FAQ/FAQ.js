import React from 'react';

const FAQ = () => {
    return (
        <div className='my-10 px-4 md:px-6 max-w-3xl mx-auto'>
            <div className="mb-12 space-y-2 text-center">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">FAQs</span>
                <h2 className="text-2xl font-bold md:text-4xl">Frequently Asked Questions</h2>
                <p className="lg:w-8/12 lg:mx-auto">Learn how to think in React with step-by-step explanations and interactive examples.</p>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-2xl font-medium">
                        <h3>Who we are (CodersGround)?</h3>
                    </div>
                    <div className="collapse-content">
                        <p>Coders Ground is where smart and enthusiastic Bangladeshi people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-2xl font-medium">
                        <h3>Coders Ground Mission</h3>
                    </div>
                    <div className="collapse-content">
                        <p>Our mission is to even up education through the offering of high-quality learning opportunities that are accessible, flexible, and affordable. Virtually anyone anywhere in Bangladesh with an internet connection and a determination of self-learning can come to Coders Ground, master an array of skills, and start working to pursue his dreams.</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-2xl font-medium">
                        <h3>Coders Ground Vision</h3>
                    </div>
                    <div className="collapse-content">
                        <p>Coders Ground is where motivated learners will come to learn the skills they need, to pursue the jobs they wish, to build things they want and to lead the lives they deserve. Students will be offered with opportunity to do some close to real-world projects curated by experts. These will help them to have the experience and portfolio for future. The online courses will come from not only individuals but rather renowned and established organizations of many different sectors- to provide the best quality education and recognition to the people of Bangladesh. Our goal is to grow exponentially and to engage and educate 50k+ people by 2022.</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-2xl font-medium">
                        <h3> What's In The Future?</h3>
                    </div>
                    <div className="collapse-content">
                        <p>Our future learning models and personalized support system will enable an unimaginable degree of engagement with our students and instructors. And, we will be with them through every phase of their learning graph: from the time the social media team may reply a query on Facebook Page, to the fulfilling moment when the career-counselling team will get the email that a learner has found a job or started something new with the knowledge he gained here. Our priority is always the betterment of our students, and this flare will always inspire us to offer high-quality practical education to as many people as we can reach through internet.</p>
                    </div>
                </div>
                <div tabIndex={4} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-2xl font-medium">
                        <h3> Who are eligible to enroll our courses?</h3>
                    </div>
                    <div className="collapse-content">
                        <p>Whether you are a recent graduate trying to land your first job, or a mid-level professional eager for advancement, or just a person wanting to learn about an emerging subject, CodersGround is and will be for everyone.
                            <br /> <br />
                            Just go to the course of your choice and hit the ‘enroll’ button. That’s how easy it is to start learning on CodersGround!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;