import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

import { validateRegister } from "../../utils/authValidation";
import type { RegisterErrors } from "../../utils/authValidation";
import type {
  RegisterFormProps,
  RegisterFormValues,
} from "./RegisterForm.types";
import { registerFormStyles as styles } from "./RegisterForm.styles";

const INITIAL_VALUES: RegisterFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = ({
  onSubmit,
  isSubmitting = false,
  error,
}: RegisterFormProps) => {
  const [values, setValues] = useState<RegisterFormValues>(INITIAL_VALUES);

  const [errors, setErrors] = useState<RegisterErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateRegister(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await onSubmit({
      ...values,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
    });
  };

  const handleChange = (field: keyof RegisterFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const fields: {
    name: keyof RegisterFormValues;
    label: string;
    type: string;
    autoComplete: string;
    placeholder: string;
  }[] = [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      autoComplete: "name",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      placeholder: "you@example.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      autoComplete: "new-password",
      placeholder: "Create a password",
    },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      autoComplete: "new-password",
      placeholder: "Re-enter your password",
    },
  ];

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {fields.map((field) => {
          const fieldError = errors[field.name];
          const errorId = `register-${field.name}-error`;

          return (
            <div key={field.name} className={styles.field}>
              <label
                htmlFor={`register-${field.name}`}
                className={styles.label}
              >
                {field.label}
              </label>

              <input
                id={`register-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                value={values[field.name]}
                onChange={(event) =>
                  handleChange(field.name, event.target.value)
                }
                aria-invalid={Boolean(fieldError)}
                aria-describedby={fieldError ? errorId : undefined}
                className={styles.input}
                placeholder={field.placeholder}
              />

              {fieldError && (
                <p id={errorId} className={styles.error}>
                  {fieldError}
                </p>
              )}
            </div>
          );
        })}

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
          Create Account
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
