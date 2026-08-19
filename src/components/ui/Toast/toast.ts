import { toast } from "sonner";

export const showToast = {
  success: toast.success,
  error: toast.error,
  warning: toast.warning,
  info: toast.info,
  loading: toast.loading,
  promise: toast.promise,
  dismiss: toast.dismiss,
};
