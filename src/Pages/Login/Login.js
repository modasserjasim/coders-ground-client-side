import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginWithGoogle, loginWithGithub, loginWithEmail } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const githubProvider = new GithubAuthProvider();
    const handleLoginGithub = () => {
        loginWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <div className='flex items-center min-h-[84vh] py-10 m-3'>
            <div className="w-full max-w-md p-4 rounded-md shadow-lg sm:p-8 mx-auto drop-shadow-sm">
                <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleLogin} className="mt-6">

                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1">E-mail Address</label>
                    <input id="email" type="email" name="email" placeholder="hello@modasserjasim.com" autoComplete="email" className="w-full px-3 py-2 border rounded-md" required />

                    <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mt-4 mb-1">Password</label>
                    <input id="password" type="password" name="password" placeholder="********" className="w-full px-3 py-2 border rounded-md" required />

                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-primary shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none border rounded-md">
                        Login Now
                    </button>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGoogle />
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleLoginGithub} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <IoLogoGithub />
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <p className="text-sm text-center dark:text-gray-400">Don't have account?
                    <Link to='/register' className="text-bold text-primary pl-1">Register here</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;