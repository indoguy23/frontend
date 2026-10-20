import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import {
  getRegisteredDemoUsers,
  hashDemoPassword,
  saveDemoSession,
  type DemoAccountRole,
} from "../utils/demoAuth";

const DEMO_ACCOUNTS = [
  {
    email: "admin@markethub.demo",
    password: "Admin@123",
    fullName: "MarketHub Admin",
    role: "admin" as const,
    storeName: "",
  },
  {
    email: "vendor@markethub.demo",
    password: "Vendor@123",
    fullName: "Demo Vendor",
    role: "vendor" as const,
    storeName: "Demo Store",
  },
  {
    email: "customer@markethub.demo",
    password: "Customer@123",
    fullName: "Demo Customer",
    role: "customer" as const,
    storeName: "",
  },
];

type LoginLocationState = {
  message?: string;
  email?: string;
  from?: {
    pathname?: string;
    search?: string;
    hash?: string;
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const locationState = location.state as LoginLocationState | null;

  const registrationMessage = locationState?.message;
  const registeredEmail = locationState?.email;

  const requestedPath = locationState?.from?.pathname;

  const redirectTo =
    requestedPath &&
    requestedPath.startsWith("/") &&
    !requestedPath.startsWith("//")
      ? `${requestedPath}${locationState?.from?.search ?? ""}${locationState?.from?.hash ?? ""}`
      : "/";

  const handleLogin = async (values: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    setIsSubmitting(true);
    setError("");

    try {
      const email = values.email.trim().toLowerCase();

      const demoAccount = DEMO_ACCOUNTS.find(
        (account) =>
          account.email === email && account.password === values.password,
      );

      let session: {
        email: string;
        fullName: string;
        role: DemoAccountRole;
        storeName: string;
      };

      if (demoAccount) {
        session = {
          email: demoAccount.email,
          fullName: demoAccount.fullName,
          role: demoAccount.role,
          storeName: demoAccount.storeName,
        };
      } else {
        const users = getRegisteredDemoUsers();

        const registeredUser = users.find(
          (user) => user.email.toLowerCase() === email,
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
        };
      }

      saveDemoSession(
        {
          ...session,
          loggedInAt: new Date().toISOString(),
        },
        values.rememberMe,
      );

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
        {registrationMessage && (
          <p
            role="status"
            className="mb-4 rounded-lg bg-teal-50 p-3 text-sm text-teal-800"
          >
            {registrationMessage}
          </p>
        )}

        <LoginForm
          onSubmit={handleLogin}
          isSubmitting={isSubmitting}
          error={error}
          initialEmail={registeredEmail ?? ""}
        />
      </AuthLayout>
    </>
  );
};

export default LoginPage;
