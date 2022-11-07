import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

// const auth = getAuth(app);
const UserContext = ({children}) => {
    const user = {displayName : "shohug"}

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;