export interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => Promise<void>;
  isSubmitting?: boolean;
  error?: string;
}
