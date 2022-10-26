import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useContext(AuthContext);
  //before check the user first catch the user's current location
  console.log(userInfo);
  const location = useLocation();
  if (loading) {
    // Use spinner here
    return <div>Loading</div>;
  }
  if (!userInfo?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
