import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const { registerNewUser, loginWithGoogle, loginWithGithub, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleUserRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        //register with email and password
        registerNewUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success(`We have sent an verification email to [${email}]. Please verify your email address  before login!`);
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`${errorCode}`);
            })

    }
    // register with Google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleRegister = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                toast.success(`You have successfully registered as ${user.displayName}`);
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`Sorry! ${errorCode}`);
            })
    }

    // register with Github
    const githubProvider = new GithubAuthProvider();
    const handleGithubRegister = () => {
        loginWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                toast.success(`You have successfully registered in as ${user.displayName}`);
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`Sorry! ${errorCode}`);
            })
    }

    // handle user profile update
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated');
            })
            .catch(error => {
                const errorCode = error.code;
                toast.error(`${errorCode}`);
            })
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => toast.error(error))
    }

    return (
        <div className='flex items-center min-h-[90vh] py-10 m-3 md:py-14'>
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
                    <input id="password" type="password" name="password" placeholder="******" className="w-full px-3 py-2 border rounded-md" required />
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
                    <button onClick={handleGoogleRegister} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGoogle className='text-xl' />
                        <p>Register with Google</p>
                    </button>
                    <button onClick={handleGithubRegister} aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGithub className='text-xl' />
                        <p>Register with GitHub</p>
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