import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
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
      // notE for logout after email verification error solve
      if (currentUser === null || currentUser?.emailVerified) {
        currentUser?.emailVerified && setUserInfo(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  ///-----------------notE --3 create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //-------notE --4 sign-in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //-----------notE --5 update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //------------notE --6 verify email null
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  //------------notE --7 Sign-out
  const logout = () => {
    ///loading state to prevent the reload log out issue

    return signOut(auth);
  };
  // notE --8 Forget Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //-------------------
  const authInfo = {
    userInfo,
    setUserInfo,
    handleGoogleLogin,
    createUser,
    updateUserProfile,
    signIn,
    logout,
    verifyEmail,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
