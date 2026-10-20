import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, ShoppingBag } from "lucide-react";

import AuthLayout from "../components/AuthLayout";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    // Frontend demo only: no email is actually sent.
    setSubmitted(true);
  };

  return (
    <>
      <AuthLayout>
        <Link
          to="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-800"
        >
          <ArrowLeft size={16} />
          Back to sign in
        </Link>

        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
          <ShoppingBag size={23} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Forgot password?
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your email address to start the password recovery process.
        </p>

        {submitted ? (
          <div
            role="status"
            className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900"
          >
            This is a frontend demo. Password recovery emails will be enabled
            after backend integration.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
            <div>
              <label
                htmlFor="forgot-email"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  id="forgot-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-linear-to-r from-teal-600 to-teal-800 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-800/20 hover:brightness-110"
            >
              Continue
            </button>
          </form>
        )}

        <p className="mt-7 text-center text-sm text-slate-500">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-medium text-teal-800 hover:text-teal-950"
          >
            Sign in
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default ForgotPasswordPage;
