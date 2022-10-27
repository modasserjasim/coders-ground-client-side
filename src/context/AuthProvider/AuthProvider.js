import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // login with Google account
    const loginWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // login with Github account
    const loginWithGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //register with a email and password 
    const registerNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email and password
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    // verify email when register with email and password
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('track using useEffect', currentUser);
            if (currentUser === null || (currentUser.emailVerified || currentUser.providerData[0].providerId === "github.com")) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, loading, loginWithGoogle, loginWithGithub, registerNewUser, loginWithEmail, updateUserProfile, verifyEmail, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;