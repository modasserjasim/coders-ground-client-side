import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const PasswordReset = () => {
    const { resetPassword } = useContext(AuthContext);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        console.log(email);

        resetPassword(email)
            .then(() => {
                toast.success('We have sent a password reset email. Please check your inbox/spam folder to reset the password');
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode);
            });
    }
    return (
        <div className='flex items-center min-h-[90vh] py-10 m-3'>
            <ScrollRestoration />
            <div className="w-full max-w-md p-4 border border-slate-200 rounded-md shadow-lg sm:p-8 mx-auto drop-shadow-sm">
                <h2 className="mb-10 text-3xl font-semibold text-center">Reset your password</h2>
                <form onSubmit={handlePasswordReset} className="mt-6">

                    <label htmlFor="email" className="block text-xs font-semibold mb-1">E-mail Address</label>
                    <input id="email" type="email" name="email" placeholder="Enter your email" autoComplete="email" className="w-full px-3 py-2 border rounded-md" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-primary shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none border rounded-md">
                        Reset Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;