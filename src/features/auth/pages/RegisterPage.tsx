import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (values: {
    fullName: string;
    storeName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "customer" | "vendor";
    acceptedTerms: boolean;
  }) => {
    setIsSubmitting(true);
    setError("");

    try {
      const existingUsers = JSON.parse(
        localStorage.getItem("markethub-demo-users") || "[]",
      ) as Array<{ email: string }>;

      if (existingUsers.some((user) => user.email === values.email)) {
        setError("An account with this email already exists in demo mode.");
        return;
      }

      const newUser = {
        fullName: values.fullName,
        email: values.email,
        role: values.role,
        storeName: values.role === "vendor" ? values.storeName : "",
      };

      localStorage.setItem(
        "markethub-demo-users",
        JSON.stringify([...existingUsers, newUser]),
      );

      navigate("/login", {
        state: { message: "Demo registration completed. Sign in to continue." },
      });
    } catch {
      setError("Unable to complete demo registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthLayout fitViewport noScroll>
        <RegisterForm
          onSubmit={handleRegister}
          isSubmitting={isSubmitting}
          error={error}
        />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
