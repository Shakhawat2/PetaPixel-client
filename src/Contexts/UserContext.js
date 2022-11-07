import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    //Loader 
    const [loading, setLoading] = useState(true)
    // Current User
    const [user, setUser] = useState(null)

    //01. create user with Email and Password 
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //02. Login with Email and Password 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    //03. Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    //04. update user 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

        }).catch((error) => {
            console.log(error?.message);
        });
    }

    //05. sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    //06. Change Password 
    const chagePassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }




    //On Auth State Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUserWithEmail,
        logIn,
        logOut,
        updateUser,
        signInWithGoogle,
        chagePassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;