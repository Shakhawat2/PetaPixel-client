import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
        return signOut(auth).then(() => {
            toast.success("Sign-out successful")
            
          }).catch((error) => {
            // An error happened.
            toast.error(error.message)
          });
          
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
    }

    //06. Change Password 
    const chagePassword = (email) =>{
        return sendPasswordResetEmail(auth, email).then(() => {
            toast.success("Password reset email sent!") 
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
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