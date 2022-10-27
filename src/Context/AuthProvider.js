import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

///---------------------------
export const AuthContext = createContext();

const auth = getAuth(app);
///---------------------------
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  ///leading state to prevent the reload log out issue
  const [loading, setLoading] = useState(true);

  //---------------  Google sign in

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //-------------Github login

  const gitHubLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  ///----------------- create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //------- sign-in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //---------Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Inside auth state change", currentUser);

      setUserInfo(currentUser);
      ///leading state to prevent the reload log out issue
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //-----------update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //------------Sign-out
  const logout = () => {
    ///loading state to prevent the reload log out issue
    setLoading(true);
    return signOut(auth);
  };
  // --------- Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //-------------------
  const authInfo = {
    userInfo,
    setUserInfo,
    googleLogin,
    createUser,
    updateUserProfile,
    signIn,
    logout,
    resetPassword,
    loading,
    gitHubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
