import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // replace with real auth

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};


export default ProtectedRoute;
