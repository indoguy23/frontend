import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import Dialog from "@/components/ui/Dialog";
import type { LoginRequest } from "../../types/auth.types";
import { validateLogin, type LoginErrors } from "../../utils/authValidation";

const demoAccounts = [
  {
    label: "ADMIN PANEL",
    email: "admin@markethub.demo",
    password: "Admin@123",
  },
  {
    label: "VENDOR PANEL",
    email: "vendor@markethub.demo",
    password: "Vendor@123",
  },
  {
    label: "CUSTOMER",
    email: "customer@markethub.demo",
    password: "Customer@123",
  },
];

interface LoginFormProps {
  onSubmit: (values: LoginRequest & { rememberMe: boolean }) => Promise<void>;
  isSubmitting?: boolean;
  error?: string;
  initialEmail?: string;
}

const LoginForm = ({
  onSubmit,
  isSubmitting = false,
  error = "",
  initialEmail = "",
}: LoginFormProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [demoAccountsOpen, setDemoAccountsOpen] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values: LoginRequest = {
      email: email.trim(),
      password,
    };

    const nextErrors = validateLogin(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    await onSubmit({
      ...values,
      email: values.email.toLowerCase(),
      rememberMe,
    });
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10";

  return (
    <>
      <header className="mb-5">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sign in to your account to continue.
        </p>
      </header>

      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <div>
          <label
            htmlFor="login-email"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "login-email-error" : undefined}
              className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
            />
          </div>

          {errors.email && (
            <p id="login-email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Password
          </label>

          <div className="relative">
            <LockKeyhole
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "login-password-error" : undefined
              }
              className={`${inputClass} pr-12 ${errors.password ? "border-red-500" : ""}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500 hover:text-slate-900"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p id="login-password-error" className="mt-1 text-xs text-red-600">
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 py-1 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 accent-teal-700"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="font-medium text-teal-800 hover:text-teal-950"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-xl bg-linear-to-r from-teal-600 to-teal-800 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-800/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">or</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={() =>
            window.alert("Google sign-in will be available after integration.")
          }
          className="w-full cursor-pointer rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          Continue with Google
        </button>
      </form>

      <Dialog open={demoAccountsOpen} onOpenChange={setDemoAccountsOpen}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="mt-4 w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-800"
          >
            Demo accounts
          </button>
        </Dialog.Trigger>
        <Dialog.Content size="sm">
          <Dialog.Header>
            <Dialog.Title>Demo accounts</Dialog.Title>
            <Dialog.Description>
              Select an account to fill in its sign-in credentials.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body className="space-y-2">
            {demoAccounts.map((account) => (
              <button
                key={account.email}
                type="button"
                onClick={() => {
                  setEmail(account.email);
                  setPassword(account.password);
                  setErrors({});
                  setDemoAccountsOpen(false);
                }}
                className="flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg border border-slate-200 p-3 text-left transition hover:border-teal-600 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <span className="pt-0.5 text-[10px] font-bold tracking-wide text-teal-800">
                  {account.label}
                </span>
                <span className="text-right text-xs text-slate-600">
                  <span className="block break-all font-mono">
                    {account.email}
                  </span>
                  <span className="block font-mono">{account.password}</span>
                </span>
              </button>
            ))}
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>

      <p className="mt-6 text-center text-sm text-slate-500">
        New here?{" "}
        <Link
          to="/register"
          className="font-medium text-teal-800 hover:text-teal-950"
        >
          Create an account
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
