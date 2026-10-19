import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

import { validateLogin } from "../../utils/authValidation";
import type { LoginErrors } from "../../utils/authValidation";
import type { LoginFormProps, LoginFormValues } from "./LoginForm.types";
import { loginFormStyles as styles } from "./LoginForm.styles";

const INITIAL_VALUES: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = ({
  onSubmit,
  isSubmitting = false,
  error,
}: LoginFormProps) => {
  const [values, setValues] = useState<LoginFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await onSubmit({
      email: values.email.trim(),
      password: values.password,
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="login-email">
            Email address
          </label>

          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => {
              const email = event.target.value;
              setValues((current) => ({ ...current, email }));
              setErrors((current) => ({ ...current, email: undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            className={styles.input}
            placeholder="you@example.com"
          />

          {errors.email && (
            <p id="login-email-error" className={styles.error}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <div className={styles.passwordHeader}>
            <label className={styles.label} htmlFor="login-password">
              Password
            </label>

            <Link className={styles.forgotLink} to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={values.password}
            onChange={(event) => {
              const password = event.target.value;
              setValues((current) => ({ ...current, password }));
              setErrors((current) => ({ ...current, password: undefined }));
            }}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={
              errors.password ? "login-password-error" : undefined
            }
            className={styles.input}
            placeholder="Enter your password"
          />

          {errors.password && (
            <p id="login-password-error" className={styles.error}>
              {errors.password}
            </p>
          )}
        </div>

        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}

        <Button
          type="submit"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
