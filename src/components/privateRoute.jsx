// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router";

// // import React from 'react'

// function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
// }

// export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function PrivateRoute() {
  // Retrieve the user data from the Redux store
  const { currentUser } = useSelector((state) => state.user) || {};
  console.log(state);

  // Check if currentUser exists
  return currentUser ? <Outlet /> : <Navigate to="/home" />;
}

export default PrivateRoute;
