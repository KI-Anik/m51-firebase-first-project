/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observer, checking am i sign in or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set user if found
            setLoading(false);    // Loading is complete
        });

        return () => {
            unSubscribe(); // Clean up on component unmount
        }
    }, [])

    // onAuthStateChanged(auth, (currentUser) =>{
    //     if(currentUser){
    //         console.log('already logged in', currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('never logged here')
    //         setUser(null)
    //     }
    // })

    //sort hand object destructure
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/*main.jsx will acces to this context*/}

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;