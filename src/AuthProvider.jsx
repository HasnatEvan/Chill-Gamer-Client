import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

export const AuthContext = createContext(null);

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign up function
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Log in function
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)

    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // Observe user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            // console.log("Auth subscription cleaned up.");
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        logOut,
        signInWithGoogle,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
