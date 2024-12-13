/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const createUser = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
    }

        const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
        }

        onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                console.log('already logged in', currentUser)
            }
            else{
                console.log('never logged here')
            }
        })

    const name = 'hey vai'
    //sort hand object
    const authInfo = {
        name,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {/*main.jsx will acces to this context*/}
        
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;