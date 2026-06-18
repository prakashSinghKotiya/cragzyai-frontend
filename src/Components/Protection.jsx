import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("User from context:", user);
  if(loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;