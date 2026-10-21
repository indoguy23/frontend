import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getDemoSession } from "../../utils/demoAuth";

const ProtectedRoute = () => {
  const location = useLocation();
  const session = getDemoSession();

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
