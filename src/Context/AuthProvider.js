import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
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

  ///-----------------notE --3 create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //-----------notE --5 update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //------------notE --5 Sign-out
  const logout = () => {
    ///loading state to prevent the reload log out issue

    return signOut(auth);
  };

  //-------------------
  const authInfo = {
    userInfo,
    setUserInfo,
    handleGoogleLogin,
    createUser,
    updateUserProfile,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
