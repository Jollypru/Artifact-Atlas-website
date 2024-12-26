import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
   

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUser(null);
            setLoading(false);
        })
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            console.log('state captured', currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://assignment-11-server-omega-ashy.vercel.app/jwt', user, { withCredentials: true })
                    .then(res =>{
                        setUser(currentUser);
                        console.log('login token', res.data);
                    })
                    .catch(error => console.log('Error during login token fetch', error))
                    .finally(() => setLoading(false));
            }
            else {
                axios.post('https://assignment-11-server-omega-ashy.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('logout', res.data);
                        setUser(null);
                       
                    })
                    .catch((err) => console.error('Error during logout request:', err))
                    .finally(() => setLoading(false));
            }

        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;