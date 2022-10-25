import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";
///---------------------------
export const AuthContext = createContext();

const auth = getAuth(app);
///---------------------------
const AuthProvider = ({ children }) => {
  // const user = { displayName: "Rayhan" };
  const [userInfo, setUserInfo] = useState(null);

  //---------------notE --1 Google sign in
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Logged in successfully!!");
        const user = result.user;
        console.log(user);
        // setUserInfo(user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  //---------notE --2 Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside auth state change", currentUser);

      setUserInfo(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //-------------------
  const authInfo = { userInfo, handleGoogleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
