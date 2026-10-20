export interface RegisterFormValues {
  fullName: string;
  storeName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "customer" | "vendor";
  acceptedTerms: boolean;
}

export interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => Promise<void>;
  isSubmitting?: boolean;
  error?: string;
}
