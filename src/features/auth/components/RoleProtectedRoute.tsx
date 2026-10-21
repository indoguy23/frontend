import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getDemoSession } from "../utils/demoAuth";

type UserRole = "admin" | "vendor" | "customer";

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
}

const RoleProtectedRoute = ({ allowedRoles }: RoleProtectedRouteProps) => {
  const location = useLocation();
  const session = getDemoSession();

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(session.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
