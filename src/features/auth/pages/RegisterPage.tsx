import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import {
  getRegisteredDemoUsers,
  hashDemoPassword,
  saveRegisteredDemoUsers,
} from "../utils/demoAuth";

interface RegisterValues {
  fullName: string;
  storeName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "customer" | "vendor";
  acceptedTerms: boolean;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (values: RegisterValues) => {
    setIsSubmitting(true);
    setError("");

    try {
      const email = values.email.trim().toLowerCase();
      const existingUsers = getRegisteredDemoUsers();

      const emailAlreadyExists = existingUsers.some(
        (user) => user.email.toLowerCase() === email,
      );

      const demoEmails = [
        "admin@markethub.demo",
        "vendor@markethub.demo",
        "customer@markethub.demo",
      ];

      if (emailAlreadyExists || demoEmails.includes(email)) {
        setError("An account with this email already exists.");
        return;
      }

      const passwordHash = await hashDemoPassword(values.password);

      const newUser = {
        fullName: values.fullName.trim(),
        email,
        passwordHash,
        role: values.role,
        storeName: values.role === "vendor" ? values.storeName.trim() : "",
      };

      saveRegisteredDemoUsers([...existingUsers, newUser]);

      navigate("/login", {
        state: {
          message: "Registration successful. Please sign in to continue.",
          email,
        },
      });
    } catch {
      setError("Unable to complete registration. Please try again.");
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
