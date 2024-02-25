 import { createContext, useEffect, useState } from "react";
 import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
 import app from "../../Firebase/Firebase.config";
  
  export const AuthContext = createContext(null)
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth(app);
  const AuthProvider = ({children}) => {
 
   const [user, setUser] = useState(null)
   const [loading,setLoading] = useState(true)


//    googleProvider
   const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   
   // register page
   const createUser = (email,password) =>{
    setLoading(true)
    console.log('HI Guys')
    return createUserWithEmailAndPassword(auth,email,password)
   }

   // sign in
   const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   // logout 

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
        setLoading(false)
    });
    return  () =>{
        unSubscribe()
    }
   },[])
   const userInfo = {
    user,
    createUser,
    loading,
    signIn,
    logOut,
    googleLogin
   }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;