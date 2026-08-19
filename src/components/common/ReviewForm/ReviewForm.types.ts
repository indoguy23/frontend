export interface ReviewFormValues {
  rating: number;
  title: string;
  comment: string;
}

export interface ReviewFormErrors {
  rating?: string;
  title?: string;
  comment?: string;
}

export interface ReviewFormProps {
  value: ReviewFormValues;

  onChange: (value: ReviewFormValues) => void;

  onSubmit: (value: ReviewFormValues) => void;

  errors?: ReviewFormErrors;

  loading?: boolean;

  disabled?: boolean;

  showTitle?: boolean;

  submitLabel?: string;

  className?: string;
}
