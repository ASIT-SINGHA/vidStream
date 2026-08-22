import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../../stores/useAuthStore.js";

function ProtectedRoute(){
  let token = useAuthStore((state) => state.accessToken);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;