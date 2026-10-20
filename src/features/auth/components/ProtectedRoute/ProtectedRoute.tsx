import { Navigate, Outlet, useLocation } from "react-router-dom";

const SESSION_KEY = "markethub-demo-session";

const hasActiveSession = (): boolean => {
  try {
    const session =
      localStorage.getItem(SESSION_KEY) ?? sessionStorage.getItem(SESSION_KEY);

    if (!session) return false;

    const parsedSession: unknown = JSON.parse(session);

    if (
      typeof parsedSession !== "object" ||
      parsedSession === null ||
      !("email" in parsedSession) ||
      typeof parsedSession.email !== "string" ||
      !parsedSession.email.trim()
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

const ProtectedRoute = () => {
  const location = useLocation();

  if (!hasActiveSession()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
