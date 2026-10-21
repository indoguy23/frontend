import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import {
  clearDemoSession,
  getRegisteredDemoUsers,
  hashDemoPassword,
  saveDemoSession,
  type DemoAccountRole,
  type DemoSession,
} from "../utils/demoAuth";

const DEMO_ACCOUNTS: {
  email: string;
  password: string;
  fullName: string;
  role: DemoAccountRole;
}[] = [
  {
    email: "admin@markethub.demo",
    password: "Admin@123",
    fullName: "MarketHub Admin",
    role: "admin",
  },
  {
    email: "vendor@markethub.demo",
    password: "Vendor@123",
    fullName: "Demo Vendor",
    role: "vendor",
  },
  {
    email: "customer@markethub.demo",
    password: "Customer@123",
    fullName: "Demo Customer",
    role: "customer",
  },
];

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginLocationState {
  from?: {
    pathname?: string;
    search?: string;
    hash?: string;
  };
  email?: string;
  message?: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const locationState = location.state as LoginLocationState | null;
  const requestedPath = locationState?.from;

  const redirectTo =
    requestedPath?.pathname?.startsWith("/") &&
    !requestedPath.pathname.startsWith("//")
      ? `${requestedPath.pathname}${requestedPath.search ?? ""}${requestedPath.hash ?? ""}`
      : "/";

  const handleLogin = async (values: LoginValues) => {
    setIsSubmitting(true);
    setError("");

    try {
      const email = values.email.trim().toLowerCase();

      const demoAccount = DEMO_ACCOUNTS.find(
        (account) =>
          account.email === email && account.password === values.password,
      );

      let session: DemoSession;

      if (demoAccount) {
        session = {
          email: demoAccount.email,
          fullName: demoAccount.fullName,
          role: demoAccount.role,
          storeName: "",
          loggedInAt: new Date().toISOString(),
        };
      } else {
        const registeredUsers = getRegisteredDemoUsers();

        const registeredUser = registeredUsers.find(
          (user) => user.email.trim().toLowerCase() === email,
        );

        if (!registeredUser) {
          setError("Invalid email or password.");
          return;
        }

        const passwordHash = await hashDemoPassword(values.password);

        if (registeredUser.passwordHash !== passwordHash) {
          setError("Invalid email or password.");
          return;
        }

        session = {
          email: registeredUser.email,
          fullName: registeredUser.fullName,
          role: registeredUser.role,
          storeName: registeredUser.storeName,
          loggedInAt: new Date().toISOString(),
        };
      }

      clearDemoSession();
      saveDemoSession(session, values.rememberMe);

      navigate(redirectTo, { replace: true });
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthLayout fitViewport>
        <LoginForm
          onSubmit={handleLogin}
          isSubmitting={isSubmitting}
          error={error}
          initialEmail={locationState?.email ?? ""}
        />
      </AuthLayout>
    </>
  );
};

export default LoginPage;
