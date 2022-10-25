import React, { createContext } from "react";

export const AuthContext = createContext();
const user = { displayName: "Rayhan" };
const userInfo = { user };
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
