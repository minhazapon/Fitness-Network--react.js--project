import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";



export const fireContext = createContext(null)

       const GProvider = new GoogleAuthProvider();

const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = ( email, password ) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const InUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password )
    }

    const googleUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, GProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect( ()=> {
    const unSubscribe =  onAuthStateChanged( auth,  currentUser =>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
     })
     return()=>{
        unSubscribe();
     }
    } , [])
     


    const authInfo = { user, createUser, InUser, googleUser, logOut, loading }
  
    return (
        <div>

            <fireContext.Provider value={authInfo} >

                {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;