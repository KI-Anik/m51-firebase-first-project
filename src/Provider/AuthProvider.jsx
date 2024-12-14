/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

        // observer, checking am i sign in or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return() => {
            unSubscribe()
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

    const name = 'hey vai'
    //sort hand object
    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
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