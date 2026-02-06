import React, { useState, useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let timer;
    if (!user && !loading) {
      timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-info h-20 w-20"></span>
        <p className="ml-4 text-gray-400">Verifying session...</p>
      </div>
    );
  }

  if (shouldRedirect && !user) {
    return <Navigate to="/login" />;
  }

  return user ? (
    children
  ) : (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-info h-20 w-20"></span>
      <p className="ml-4 text-gray-400">Verifying session...</p>
    </div>
  );
};

export default PrivateRoute;
