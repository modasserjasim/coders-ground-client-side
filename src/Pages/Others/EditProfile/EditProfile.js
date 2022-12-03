import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);

    const handleEditUser = (e) => {
        e.preventDefault();
        toast.success('Your profile was updated!');
    }
    const handleNameChange = e => {
        setName(e.target.value);
        console.log(name);
    }
    return (
        <div className='flex items-center min-h-[90vh] py-10 m-3 md:py-14'>
            <ScrollRestoration />
            <div className="w-full max-w-md p-4 border border-slate-200 rounded-md shadow-lg sm:p-8 mx-auto drop-shadow-sm">
                <h3>Update your profile</h3>
                <form onSubmit={handleEditUser} className="mt-6">
                    <label htmlFor="name" className="block text-xs font-semibold mb-1">Your Name</label>
                    <input onChange={handleNameChange} defaultValue={name} id="name" type="text" name="name" placeholder="Modasser Jasim" className="w-full px-3 py-2 border rounded-md" required />
                    <label htmlFor="photo" className="block text-xs font-semibold mt-4 mb-1">Photo URL</label>
                    <input ref={photoURLRef} defaultValue={user?.photoURL} id="photo" type="text" name="photo" placeholder="modasserjasim.com/profile.png" className="w-full px-3 py-2 border rounded-md" />
                    <label htmlFor="email" className="block text-xs font-semibold mt-4 mb-1">E-mail Address</label>
                    <input readOnly defaultValue={user?.email} id="email" type="email" name="email" placeholder="hello@modasserjasim.com" autoComplete="email" className="w-full px-3 py-2 border rounded-md" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-primary shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none border rounded-md">
                        Update Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;