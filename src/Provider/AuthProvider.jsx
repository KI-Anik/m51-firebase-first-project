import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const name = 'hey vai'
    //sort hand object
    const authInfo = {
        name
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {/*main.jsx will acces to this context*/}
        
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;