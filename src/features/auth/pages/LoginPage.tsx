import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

const DEMO_ACCOUNTS = [
  { email: "admin@markethub.demo", password: "Admin@123" },
  { email: "vendor@markethub.demo", password: "Vendor@123" },
  { email: "customer@markethub.demo", password: "Customer@123" },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (values: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    setIsSubmitting(true);
    setError("");

    try {
      const account = DEMO_ACCOUNTS.find(
        (item) =>
          item.email === values.email && item.password === values.password,
      );

      if (!account) {
        setError(
          "Invalid demo credentials. Select an account from the demo list.",
        );
        return;
      }

      const session = {
        email: account.email,
        role: account.email.startsWith("admin")
          ? "admin"
          : account.email.startsWith("vendor")
            ? "vendor"
            : "customer",
        loggedInAt: new Date().toISOString(),
      };

      const storage = values.rememberMe ? localStorage : sessionStorage;
      storage.setItem("markethub-demo-session", JSON.stringify(session));

      navigate("/");
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
        />
      </AuthLayout>
    </>
  );
};

export default LoginPage;
