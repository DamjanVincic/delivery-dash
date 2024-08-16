import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();
  return user?.role === role ? children : <Navigate to="/" />;
}
