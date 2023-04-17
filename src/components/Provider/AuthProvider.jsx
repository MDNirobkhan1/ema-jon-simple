import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase-config';


export const AuthContext = createContext(null);
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [lodding, setLodding]=useState(true)

    const createUser= (email, password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email, password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLodding(false)
        })
        return ()=>{
            return unsubcribe();
        }
    },[])

    const authInfo ={
        user,
        lodding,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;