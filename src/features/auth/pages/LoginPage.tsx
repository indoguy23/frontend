import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import LoginForm, { type LoginFormValues } from "../components/LoginForm";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    setError("");

    try {
      // Authentication API will be connected after the Django backend is ready.
      void values;

      setError(
        "Login is not connected yet. Please try again after backend integration.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthLayout
        title="Welcome back"
        description="Sign in to your MarketHub account to continue shopping."
        footer={
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="font-medium underline">
              Create an account
            </Link>
          </p>
        }
      >
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
