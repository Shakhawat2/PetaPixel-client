import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const user = {displayName : "shohug"}

    //01. create user with Email and Password 
    const createUserWithEmail = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //02. Login with Email and Password 
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    //03. Log Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    //04. update user 
    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            
          }).catch((error) => {
            console.log(error?.message);
          });
    }

    const authInfo = {
        user,
        createUserWithEmail,
        logIn,
        logOut,
        updateUser,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;