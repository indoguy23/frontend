import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ROUTES } from "@/app/route";

const SESSION_KEY = "markethub-demo-session";

const hasValidSession = (): boolean => {
  try {
    const storedSession =
      localStorage.getItem(SESSION_KEY) ?? sessionStorage.getItem(SESSION_KEY);

    if (!storedSession) {
      return false;
    }

    const session: unknown = JSON.parse(storedSession);

    if (typeof session !== "object" || session === null) {
      return false;
    }

    const user = session as {
      email?: unknown;
      role?: unknown;
    };

    return (
      typeof user.email === "string" &&
      user.email.trim().length > 0 &&
      typeof user.role === "string" &&
      user.role.trim().length > 0
    );
  } catch {
    return false;
  }
};

const ProtectedRoute = () => {
  const location = useLocation();

  if (!hasValidSession()) {
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
