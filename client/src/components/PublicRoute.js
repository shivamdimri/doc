import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  // Check if a token exists in localStorage
  if (localStorage.getItem("token")) {
    // If token exists, redirect to the home page or any other specified page
    return <Navigate to="/home" />;
  } else {
    // If no token exists, render the public route's children
    return children;
  }
}

export default PublicRoute;
