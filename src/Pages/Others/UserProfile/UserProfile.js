import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='flex justify-center items-center my-10 md:my-20'>
            <ScrollRestoration />
            <div className="rounded-md shadow-lg w-80">
                <div className="text-center p-6 bg-base-300 border-b border-base-300">
                    <img src={user?.photoURL} alt="" className='mx-auto rounded-full w-32' />
                    <p className="pt-2 text-lg font-semibold ">{user?.displayName}</p>
                    <p className="text-sm ">{user?.email}</p>
                </div>
                <div className="border-b border-base-300  flex justify-center">
                    <Link to='/edit-profile'
                        className="border rounded-full py-2 px-4 font-semibold border-base-100 flex items-center justify-center gap-2 text-md">
                        <BiEdit />   Edit your Account
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default UserProfile;