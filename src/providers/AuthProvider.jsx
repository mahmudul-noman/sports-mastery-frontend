import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        console.log('Google OK')
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('User: ', currentUser);

            if (currentUser) {
                axios.post('https://sports-mastery-server.vercel.app/jwt', { email: currentUser.email })
                .then(data => {
                    // console.log(data);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;