import React from 'react';
import { useContext } from 'react';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const { registerNewUser, updateUserProfile } = useContext(AuthContext);

    const handleUserRegistration = (e) => {
        console.log(e);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        registerNewUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, photoURL);
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <div className='flex items-center min-h-[84vh] py-10 m-3 md:py-14'>
            <div className="w-full max-w-md p-4 rounded-md shadow-lg sm:p-8 mx-auto drop-shadow-sm">
                <h2 className="mb-10 text-3xl font-semibold text-center">
                    Register an account
                </h2>
                <form onSubmit={handleUserRegistration} className="mt-6">
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
                    <input id="name" type="text" name="name" placeholder="Modasser Jasim" className="w-full px-3 py-2 border rounded-md" required />
                    <label htmlFor="photo" className="block text-xs font-semibold text-gray-600 mt-4 mb-1">Photo URL</label>
                    <input id="photo" type="text" name="photo" placeholder="modasserjasim.com/profile.png" className="w-full px-3 py-2 border rounded-md" />
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mt-4 mb-1">E-mail Address</label>
                    <input id="email" type="email" name="email" placeholder="hello@modasserjasim.com" autoComplete="email" className="w-full px-3 py-2 border rounded-md" required />
                    <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mt-4 mb-1">Password</label>
                    <input id="password" type="password" name="password" placeholder="********" className="w-full px-3 py-2 border rounded-md" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-primary shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none border rounded-md">
                        Register Now
                    </button>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGoogle />
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGithub />
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <p className="text-sm text-center dark:text-gray-400">Already have an account?
                    <Link to='/login' className="text-bold text-primary pl-1">Login now</Link>
                </p>
            </div>

        </div>
    );
};

export default Register;