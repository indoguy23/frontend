import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, Store, UserRound } from "lucide-react";
import {
  validateRegister,
  type RegisterErrors,
} from "../../utils/authValidation";
import type { RegisterRequest } from "../../types/auth.types";

type AccountRole = "customer" | "vendor";

interface RegisterFormProps {
  onSubmit: (values: {
    fullName: string;
    storeName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: AccountRole;
    acceptedTerms: boolean;
  }) => Promise<void>;
  isSubmitting?: boolean;
  error?: string;
}

type RegisterFormErrors = RegisterErrors &
  Partial<Record<"storeName" | "acceptedTerms", string>>;

const RegisterForm = ({
  onSubmit,
  isSubmitting = false,
  error = "",
}: RegisterFormProps) => {
  const [role, setRole] = useState<AccountRole>("customer");
  const [fullName, setFullName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const inputClass =
    "min-w-0 w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-8 pr-8 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values: RegisterRequest = {
      fullName: fullName.trim(),
      email: email.trim(),
      password,
      confirmPassword,
    };

    const nextErrors: RegisterFormErrors = {
      ...validateRegister(values),
    };

    if (role === "vendor" && !storeName.trim()) {
      nextErrors.storeName = "Store name is required for vendors.";
    }

    if (!acceptedTerms) {
      nextErrors.acceptedTerms = "Please accept the Terms and Privacy Policy.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    await onSubmit({
      ...values,
      email: values.email.toLowerCase(),
      storeName: role === "vendor" ? storeName.trim() : "",
      role,
      acceptedTerms,
    });
  };

  const renderError = (field: keyof RegisterFormErrors) =>
    errors[field] ? (
      <p className="mt-1 text-xs text-red-600">{errors[field]}</p>
    ) : null;

  return (
    <>
      <header className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Create your account
        </h2>
        <p className="mt-1 text-sm leading-5 text-slate-500">
          Choose how you want to use MarketHub.
        </p>
      </header>

      <div
        className="mb-4 grid grid-cols-2 rounded-lg bg-slate-100 p-1"
        role="group"
        aria-label="Choose account type"
      >
        {(["customer", "vendor"] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={role === option}
            onClick={() => {
              setRole(option);
              setErrors({});
            }}
            className={`cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium capitalize transition ${
              role === option
                ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-2 gap-x-3 gap-y-2.5"
      >
        <div className={`min-w-0 ${role === "vendor" ? "" : "col-span-1"}`}>
          <label
            htmlFor="register-name"
            className="mb-1 block text-xs font-semibold text-slate-800"
          >
            Full name
          </label>
          <div className="relative">
            <UserRound
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              id="register-name"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.fullName)}
              className={`${inputClass} pr-3 ${errors.fullName ? "border-red-500" : ""}`}
            />
          </div>
          {renderError("fullName")}
        </div>

        {role === "vendor" && (
          <div className="min-w-0">
            <label
              htmlFor="register-store"
              className="mb-1 block text-xs font-semibold text-slate-800"
            >
              Store name
            </label>
            <div className="relative">
              <Store
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                id="register-store"
                autoComplete="organization"
                value={storeName}
                onChange={(event) => setStoreName(event.target.value)}
                placeholder="Your store name"
                aria-invalid={Boolean(errors.storeName)}
                className={`${inputClass} pr-3 ${errors.storeName ? "border-red-500" : ""}`}
              />
            </div>
            {renderError("storeName")}
          </div>
        )}

        <div className={`min-w-0 ${role === "vendor" ? "col-span-2" : ""}`}>
          <label
            htmlFor="register-email"
            className="mb-1 block text-xs font-semibold text-slate-800"
          >
            Email
          </label>
          <div className="relative">
            <Mail
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className={`${inputClass} pr-3 ${errors.email ? "border-red-500" : ""}`}
            />
          </div>
          {renderError("email")}
        </div>

        <div className="col-span-2 grid min-w-0 grid-cols-2 gap-2">
          <div className="min-w-0">
            <label
              htmlFor="register-password"
              className="mb-1 block text-xs font-semibold text-slate-800"
            >
              Password
            </label>
            <div className="relative">
              <LockKeyhole
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="New password"
                aria-invalid={Boolean(errors.password)}
                className={`${inputClass} ${errors.password ? "border-red-500" : ""}`}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {renderError("password")}
          </div>

          <div className="min-w-0">
            <label
              htmlFor="register-confirm-password"
              className="mb-1 block text-xs font-semibold text-slate-800"
            >
              Confirm password
            </label>
            <div className="relative">
              <LockKeyhole
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                id="register-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm"
                aria-invalid={Boolean(errors.confirmPassword)}
                className={`${inputClass} ${errors.confirmPassword ? "border-red-500" : ""}`}
              />
              <button
                type="button"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                onClick={() => setShowConfirmPassword((visible) => !visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
              >
                {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {renderError("confirmPassword")}
          </div>
        </div>

        <div className="col-span-2">
          <label className="flex cursor-pointer items-start gap-2 text-xs text-slate-600">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
            />
            <span>
              I agree to the{" "}
              <Link
                to="/terms"
                className="font-medium text-teal-800 hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-medium text-teal-800 hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
          {renderError("acceptedTerms")}
        </div>

        {error && (
          <p
            role="alert"
            className="col-span-2 rounded-lg bg-red-50 p-2 text-xs text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="col-span-2 w-full cursor-pointer rounded-lg bg-linear-to-r from-teal-600 to-teal-800 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-800/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>

        <div className="col-span-2 flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">or</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={() =>
            window.alert("Google sign-up will be available after integration.")
          }
          className="col-span-2 w-full cursor-pointer rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          Continue with Google
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-teal-800 hover:text-teal-950"
        >
          Sign in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
