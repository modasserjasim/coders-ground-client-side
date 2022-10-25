import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

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
    return (
        <div className='flex items-center min-h-[84vh] py-10 m-3'>
            <div className="w-full max-w-md p-4 rounded-md shadow-lg sm:p-8 mx-auto drop-shadow-sm">
                <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>
                <form className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="hello@modasserjasim.com" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                                <Link className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md btn-primary">Login</button>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
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